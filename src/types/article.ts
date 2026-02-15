export const CATEGORIES = {
  accessibility: 'アクセシビリティ',
  'ux-design': 'UXデザイン',
  'ui-design': 'UIデザイン',
  'web-design': 'ウェブデザイン',
  frontend: 'フロントエンド',
  tools: 'ツール',
  industry: '業界動向',
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export interface Article {
  title: string;
  url: string;
  description: string;
  publishedAt: string; // ISO 8601
  source: string;
  category: CategorySlug;
  isJapanese: boolean;
}

export interface FeedSource {
  name: string;
  url: string;
  type: 'rss' | 'devto' | 'hackernews';
  defaultCategory: CategorySlug;
  isJapanese?: boolean;
}
