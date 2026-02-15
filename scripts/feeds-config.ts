import type { FeedSource } from '../src/types/article.js';

export const RSS_FEEDS: FeedSource[] = [
  // UI/UXデザイン
  { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/feed/', type: 'rss', defaultCategory: 'web-design' },
  { name: 'CSS-Tricks', url: 'https://css-tricks.com/feed/', type: 'rss', defaultCategory: 'frontend' },
  { name: 'A List Apart', url: 'https://alistapart.com/main/feed/', type: 'rss', defaultCategory: 'web-design' },
  { name: 'Nielsen Norman Group', url: 'https://www.nngroup.com/feed/rss/', type: 'rss', defaultCategory: 'ux-design' },
  { name: 'UX Planet', url: 'https://uxplanet.org/feed', type: 'rss', defaultCategory: 'ux-design' },
  { name: 'MDN Blog', url: 'https://developer.mozilla.org/en-US/blog/rss.xml', type: 'rss', defaultCategory: 'frontend' },

  // アクセシビリティ
  { name: 'WebAIM Blog', url: 'https://webaim.org/blog/feed/', type: 'rss', defaultCategory: 'accessibility' },
  { name: 'W3C Blog', url: 'https://www.w3.org/blog/feed/', type: 'rss', defaultCategory: 'industry' },
  { name: 'UK Gov Accessibility Blog', url: 'https://accessibility.blog.gov.uk/feed/', type: 'rss', defaultCategory: 'accessibility' },
  { name: 'Deque Blog', url: 'https://www.deque.com/blog/feed/', type: 'rss', defaultCategory: 'accessibility' },
  { name: 'Pope Tech Blog', url: 'https://blog.pope.tech/feed/', type: 'rss', defaultCategory: 'accessibility' },
  { name: '24 Accessibility', url: 'https://www.24a11y.com/feed/', type: 'rss', defaultCategory: 'accessibility' },

  // ウェブデザイン / フロントエンド
  { name: 'Codrops', url: 'https://tympanus.net/codrops/feed/', type: 'rss', defaultCategory: 'web-design' },

  // 日本語ソース
  { name: 'Accessible & Usable', url: 'https://accessible-usable.net/feed/', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },
  { name: 'Goodpatch Blog', url: 'https://goodpatch.com/blog/feed/', type: 'rss', defaultCategory: 'ux-design', isJapanese: true },
  { name: 'Design Memo 2.0', url: 'https://designmemo.jp/feed/', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
];

export const API_FEEDS: FeedSource[] = [
  { name: 'DEV.to (a11y)', url: 'https://dev.to/api/articles?tag=a11y&per_page=30', type: 'devto', defaultCategory: 'accessibility' },
  { name: 'DEV.to (ux)', url: 'https://dev.to/api/articles?tag=ux&per_page=30', type: 'devto', defaultCategory: 'ux-design' },
];

export const HACKERNEWS_QUERIES = [
  'accessibility',
  'UX design',
  'WCAG',
  'web design',
];

export const CONCURRENCY_LIMIT = 5;
export const MAX_ARTICLES = 500;
export const MIN_ARTICLES_THRESHOLD = 10;
