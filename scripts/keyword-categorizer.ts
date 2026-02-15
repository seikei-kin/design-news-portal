import type { CategorySlug } from '../src/types/article.js';

const CATEGORY_KEYWORDS: Record<CategorySlug, RegExp[]> = {
  accessibility: [
    /\ba11y\b/i,
    /\baccessib/i,
    /\bwcag\b/i,
    /\baria[-\s]/i,
    /\bscreen\s*reader/i,
    /\bスクリーンリーダー/,
    /\bインクルーシブ/,
    /\bアクセシビリティ/,
    /\bassistive\s+tech/i,
    /\balt\s+text/i,
    /\bcolor\s+contrast/i,
    /\bkeyboard\s+nav/i,
  ],
  'ux-design': [
    /\bux\b/i,
    /\buser\s+experience/i,
    /\buser\s+research/i,
    /\busability/i,
    /\binteraction\s+design/i,
    /\binformation\s+architecture/i,
    /\bユーザビリティ/,
    /\bUXリサーチ/,
    /\bペルソナ/,
    /\bカスタマージャーニー/,
    /\buser\s+test/i,
    /\buser\s+interview/i,
  ],
  'ui-design': [
    /\bui\s+design/i,
    /\bvisual\s+design/i,
    /\bdesign\s+system/i,
    /\bcomponent\s+library/i,
    /\bデザインシステム/,
    /\bコンポーネント/,
    /\bfigma/i,
    /\bsketch/i,
    /\bcolor\s+palette/i,
    /\biconograph/i,
  ],
  'web-design': [
    /\bweb\s+design/i,
    /\blayout/i,
    /\btypograph/i,
    /\bresponsive/i,
    /\bレスポンシブ/,
    /\bタイポグラフィ/,
    /\bgrid\s+layout/i,
    /\bflexbox/i,
  ],
  frontend: [
    /\bcss\b/i,
    /\bhtml\b/i,
    /\bjavascript\b/i,
    /\btypescript\b/i,
    /\bフロントエンド/,
    /\bbrowser\s+api/i,
    /\bperformance/i,
    /\bweb\s+component/i,
    /\bservice\s+worker/i,
    /\bpwa\b/i,
  ],
  tools: [
    /\btool/i,
    /\bextension/i,
    /\bplugin/i,
    /\bchrome\s+devtools/i,
    /\blint/i,
    /\baudit/i,
    /\bツール/,
    /\b拡張機能/,
    /\baxe\b/i,
    /\blighthouse/i,
  ],
  industry: [
    /\btrend/i,
    /\bstandard/i,
    /\bregulat/i,
    /\blaw\b/i,
    /\blegal/i,
    /\bcompliance/i,
    /\bトレンド/,
    /\b法規制/,
    /\b標準/,
    /\bada\b/i,
    /\beaa\b/i,
    /\bsection\s+508/i,
  ],
};

// Priority order: accessibility first, then more specific categories
const CATEGORY_PRIORITY: CategorySlug[] = [
  'accessibility',
  'ux-design',
  'ui-design',
  'tools',
  'industry',
  'frontend',
  'web-design',
];

export function categorize(
  title: string,
  description: string,
  defaultCategory: CategorySlug,
): CategorySlug {
  const text = `${title} ${description}`;

  for (const category of CATEGORY_PRIORITY) {
    const keywords = CATEGORY_KEYWORDS[category];
    if (keywords.some((re) => re.test(text))) {
      return category;
    }
  }

  return defaultCategory;
}
