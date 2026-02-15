import RssParser from 'rss-parser';
import pLimit from 'p-limit';
import type { Article, FeedSource } from '../src/types/article.js';
import { RSS_FEEDS, API_FEEDS, HACKERNEWS_QUERIES, CONCURRENCY_LIMIT } from './feeds-config.js';
import { categorize } from './keyword-categorizer.js';

const rssParser = new RssParser({
  timeout: 15_000,
  headers: {
    'User-Agent': 'DesignNewsPortal/1.0 (RSS Reader)',
  },
});

const limit = pLimit(CONCURRENCY_LIMIT);

function normalizeUrl(url: string): string {
  try {
    const u = new URL(url);
    u.hash = '';
    u.searchParams.delete('utm_source');
    u.searchParams.delete('utm_medium');
    u.searchParams.delete('utm_campaign');
    u.searchParams.delete('utm_content');
    u.searchParams.delete('utm_term');
    return u.href.replace(/\/+$/, '');
  } catch {
    return url;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s\S*$/, '') + '…';
}

async function fetchRssFeed(source: FeedSource): Promise<Article[]> {
  try {
    console.log(`  RSS: ${source.name}`);
    const feed = await rssParser.parseURL(source.url);
    return (feed.items ?? [])
      .filter((item) => item.title && item.link)
      .map((item) => {
        const title = stripHtml(item.title ?? '');
        const description = truncate(
          stripHtml(item.contentSnippet ?? item.content ?? item.summary ?? ''),
          300,
        );
        return {
          title,
          url: normalizeUrl(item.link!),
          description,
          publishedAt: item.isoDate ?? new Date().toISOString(),
          source: source.name,
          category: categorize(title, description, source.defaultCategory),
          isJapanese: source.isJapanese ?? false,
        };
      });
  } catch (error) {
    console.warn(`  ⚠ Failed to fetch ${source.name}: ${(error as Error).message}`);
    return [];
  }
}

interface DevToArticle {
  title: string;
  url: string;
  description: string;
  published_at: string;
  user: { name: string };
}

async function fetchDevTo(source: FeedSource): Promise<Article[]> {
  try {
    console.log(`  API: ${source.name}`);
    const response = await fetch(source.url, {
      headers: { 'User-Agent': 'DesignNewsPortal/1.0' },
      signal: AbortSignal.timeout(15_000),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = (await response.json()) as DevToArticle[];
    return data.map((item) => {
      const title = item.title;
      const description = truncate(item.description ?? '', 300);
      return {
        title,
        url: normalizeUrl(item.url),
        description,
        publishedAt: item.published_at,
        source: `DEV.to / ${item.user.name}`,
        category: categorize(title, description, source.defaultCategory),
        isJapanese: false,
      };
    });
  } catch (error) {
    console.warn(`  ⚠ Failed to fetch ${source.name}: ${(error as Error).message}`);
    return [];
  }
}

interface HNSearchResult {
  hits: Array<{
    title: string;
    url: string | null;
    story_text: string | null;
    objectID: string;
    created_at: string;
  }>;
}

async function fetchHackerNews(): Promise<Article[]> {
  const articles: Article[] = [];
  for (const query of HACKERNEWS_QUERIES) {
    try {
      console.log(`  HN: "${query}"`);
      const url = `https://hn.algolia.com/api/v1/search_by_date?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=20`;
      const response = await fetch(url, {
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = (await response.json()) as HNSearchResult;
      for (const hit of data.hits) {
        const articleUrl = hit.url ?? `https://news.ycombinator.com/item?id=${hit.objectID}`;
        const title = hit.title;
        const description = truncate(stripHtml(hit.story_text ?? ''), 300);
        articles.push({
          title,
          url: normalizeUrl(articleUrl),
          description,
          publishedAt: hit.created_at,
          source: 'Hacker News',
          category: categorize(title, description, 'industry'),
          isJapanese: false,
        });
      }
    } catch (error) {
      console.warn(`  ⚠ Failed to fetch HN "${query}": ${(error as Error).message}`);
    }
  }
  return articles;
}

export async function fetchAllArticles(): Promise<Article[]> {
  console.log('Fetching RSS feeds...');
  const rssResults = await Promise.all(
    RSS_FEEDS.map((feed) => limit(() => fetchRssFeed(feed))),
  );

  console.log('Fetching DEV.to API...');
  const devtoResults = await Promise.all(
    API_FEEDS.map((feed) => limit(() => fetchDevTo(feed))),
  );

  console.log('Fetching Hacker News...');
  const hnResults = await fetchHackerNews();

  const allArticles = [...rssResults.flat(), ...devtoResults.flat(), ...hnResults];

  // Deduplicate by normalized URL
  const seen = new Set<string>();
  const deduplicated = allArticles.filter((article) => {
    const key = normalizeUrl(article.url);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  // Sort by date descending
  deduplicated.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  console.log(`Total: ${allArticles.length} → Deduplicated: ${deduplicated.length}`);
  return deduplicated;
}
