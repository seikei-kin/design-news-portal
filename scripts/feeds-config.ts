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

  // 日本語ソース — アクセシビリティ
  { name: 'Accessible & Usable', url: 'https://accessible-usable.net/feed/', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },
  { name: 'WAIC ニュース', url: 'https://waic.jp/news/feed/', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },
  { name: 'Zenn (a11y)', url: 'https://zenn.dev/topics/a11y/feed', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },
  { name: 'note (#アクセシビリティ)', url: 'https://note.com/hashtag/%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3/rss', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },

  // 日本語ソース — UI/UXデザイン
  { name: 'Goodpatch Blog', url: 'https://goodpatch.com/blog/feed/', type: 'rss', defaultCategory: 'ux-design', isJapanese: true },
  { name: 'Design Memo 2.0', url: 'https://designmemo.jp/feed/', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
  { name: 'ベイジの図書館', url: 'https://baigie.me/blog/feed/', type: 'rss', defaultCategory: 'ux-design', isJapanese: true },
  { name: 'note (#UXデザイン)', url: 'https://note.com/hashtag/UX%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3/rss', type: 'rss', defaultCategory: 'ux-design', isJapanese: true },
  { name: 'Zenn (design)', url: 'https://zenn.dev/topics/design/feed', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },

  // 日本語ソース — ウェブ/フロントエンド
  { name: 'コリス', url: 'https://coliss.com/feed/', type: 'rss', defaultCategory: 'frontend', isJapanese: true },
  { name: 'ICS MEDIA', url: 'https://ics.media/feed/atom.xml', type: 'rss', defaultCategory: 'frontend', isJapanese: true },
  { name: 'LIG Blog', url: 'https://liginc.co.jp/feed', type: 'rss', defaultCategory: 'web-design', isJapanese: true },
  { name: 'Zenn (frontend)', url: 'https://zenn.dev/topics/frontend/feed', type: 'rss', defaultCategory: 'frontend', isJapanese: true },
  { name: 'サイボウズ フロントエンド', url: 'https://zenn.dev/p/cybozu_frontend/feed', type: 'rss', defaultCategory: 'frontend', isJapanese: true },

  // 日本語ソース — 幅広め
  { name: 'Web担当者Forum', url: 'https://webtan.impress.co.jp/rss.xml', type: 'rss', defaultCategory: 'industry', isJapanese: true },
  { name: 'note (#デザイン)', url: 'https://note.com/hashtag/%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3/rss', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
  { name: 'freee Developers', url: 'https://developers.freee.co.jp/feed', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },

  // === ブックマークから追加 ===

  // 追加: 日本語 — UX/デザイン
  { name: 'U-Site', url: 'https://u-site.jp/feed/', type: 'rss', defaultCategory: 'ux-design', isJapanese: true },
  { name: 'unprinted', url: 'https://www.unprinted.design/rss.xml', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
  { name: 'AXIS', url: 'https://www.axismag.jp/feed/', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
  { name: 'could（長谷川恭久）', url: 'https://yasuhisa.com/could/feed/', type: 'rss', defaultCategory: 'web-design', isJapanese: true },
  { name: 'btrax freshtrax', url: 'https://blog.btrax.com/jp/feed/', type: 'rss', defaultCategory: 'ux-design', isJapanese: true },
  { name: 'UXデザインの世界', url: 'https://uxdworld.com/feed/', type: 'rss', defaultCategory: 'ux-design', isJapanese: true },
  { name: '99designs Blog JP', url: 'https://99designs.jp/blog/feed/', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },

  // 追加: 日本語 — フロントエンド/テック
  { name: 'Stocker.jp', url: 'https://stocker.jp/diary/feed/', type: 'rss', defaultCategory: 'web-design', isJapanese: true },
  { name: 'FASTCODING', url: 'https://fastcoding.jp/blog/feed/', type: 'rss', defaultCategory: 'frontend', isJapanese: true },
  { name: 'DeNA DESIGN', url: 'https://design.dena.com/feed.xml', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
  { name: 'Hatena Design Group', url: 'https://design.hatenastaff.com/feed', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
  { name: 'POSTD', url: 'https://postd.cc/feed/', type: 'rss', defaultCategory: 'frontend', isJapanese: true },
  { name: 'ZOZO Tech Blog', url: 'https://techblog.zozo.com/feed', type: 'rss', defaultCategory: 'frontend', isJapanese: true },
  { name: 'Developers.IO', url: 'https://dev.classmethod.jp/feed/', type: 'rss', defaultCategory: 'frontend', isJapanese: true },

  // 追加: 日本語 — アクセシビリティ/インクルーシブ
  { name: 'soar', url: 'https://soar-world.com/feed/', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },
  { name: 'キコニワ', url: 'https://kikoniwa.com/feed/', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },

  // 追加: はてなブックマーク（タグ検索）
  { name: 'はてブ (デザイン)', url: 'https://b.hatena.ne.jp/search/tag?q=%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3&mode=rss', type: 'rss', defaultCategory: 'ui-design', isJapanese: true },
  { name: 'はてブ (アクセシビリティ)', url: 'https://b.hatena.ne.jp/search/tag?q=%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3&mode=rss', type: 'rss', defaultCategory: 'accessibility', isJapanese: true },

  // 追加: 海外 — デザインポータル/キュレーション
  { name: 'Sidebar', url: 'https://sidebar.io/feed.xml', type: 'rss', defaultCategory: 'web-design' },
  { name: 'Web Designer News', url: 'https://webdesignernews.com/feed/', type: 'rss', defaultCategory: 'web-design' },
  { name: 'UX Collective', url: 'https://uxdesign.cc/feed/', type: 'rss', defaultCategory: 'ux-design' },
  { name: 'UX News', url: 'https://ux-news.com/feed/', type: 'rss', defaultCategory: 'ux-design' },
  { name: 'Prototypr', url: 'https://prototypr.io/feed.xml', type: 'rss', defaultCategory: 'ux-design' },
  { name: 'Creative Bloq', url: 'https://www.creativebloq.com/feed/', type: 'rss', defaultCategory: 'web-design' },
  { name: 'Creative Boom', url: 'https://www.creativeboom.com/feed/', type: 'rss', defaultCategory: 'ui-design' },
  { name: 'Abduzeedo', url: 'https://abduzeedo.com/feed/', type: 'rss', defaultCategory: 'ui-design' },
  { name: 'Dezeen', url: 'https://www.dezeen.com/feed/', type: 'rss', defaultCategory: 'ui-design' },

  // 追加: 海外 — 企業デザインブログ
  { name: 'Slack Design', url: 'https://slack.design/feed/', type: 'rss', defaultCategory: 'ui-design' },
  { name: 'Spotify Design', url: 'https://spotify.design/rss.xml', type: 'rss', defaultCategory: 'ui-design' },
  { name: 'Microsoft Design', url: 'https://microsoft.design/feed/', type: 'rss', defaultCategory: 'ui-design' },
  { name: 'Figma Blog', url: 'https://www.figma.com/blog/feed/atom.xml', type: 'rss', defaultCategory: 'tools' },

  // 追加: 海外 — UX/デザイン専門メディア
  { name: 'AIGA Eye on Design', url: 'https://eyeondesign.aiga.org/feed/', type: 'rss', defaultCategory: 'ui-design' },
  { name: 'Brand New', url: 'https://www.underconsideration.com/brandnew/atom.xml', type: 'rss', defaultCategory: 'ui-design' },
  { name: 'Design Week', url: 'https://www.designweek.co.uk/feed/', type: 'rss', defaultCategory: 'industry' },
  { name: 'Jakob Nielsen', url: 'https://jakobnielsenphd.substack.com/feed/', type: 'rss', defaultCategory: 'ux-design' },
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
export const MAX_ARTICLES = 1500;
export const MIN_ARTICLES_THRESHOLD = 10;
