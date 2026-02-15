import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchAllArticles } from './fetch-feeds.js';
import { MAX_ARTICLES, MIN_ARTICLES_THRESHOLD } from './feeds-config.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = resolve(__dirname, '../src/data/articles.json');

async function main() {
  console.log('=== Design News Portal: Data Generation ===\n');

  const articles = await fetchAllArticles();

  if (articles.length < MIN_ARTICLES_THRESHOLD) {
    console.error(
      `\n✗ Only ${articles.length} articles fetched (minimum: ${MIN_ARTICLES_THRESHOLD}). Aborting to prevent empty site deploy.`,
    );
    process.exit(1);
  }

  const trimmed = articles.slice(0, MAX_ARTICLES);

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(trimmed, null, 2), 'utf-8');

  console.log(`\n✓ Wrote ${trimmed.length} articles to ${OUTPUT_PATH}`);

  // Summary by category
  const byCat = new Map<string, number>();
  for (const a of trimmed) {
    byCat.set(a.category, (byCat.get(a.category) ?? 0) + 1);
  }
  console.log('\nCategory breakdown:');
  for (const [cat, count] of [...byCat.entries()].sort((a, b) => b[1] - a[1])) {
    console.log(`  ${cat}: ${count}`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
