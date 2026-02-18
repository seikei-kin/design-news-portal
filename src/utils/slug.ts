/**
 * ソース名をURLセーフなASCIIスラッグに変換する。
 * 日本語はローマ字的なハッシュ（短い数値ID）にフォールバック。
 */
export function sourceSlug(name: string): string {
  const lower = name.toLowerCase().trim();

  // ASCII文字・数字・ハイフンに正規化
  const ascii = lower
    .replace(/[&]/g, 'and')
    .replace(/[+]/g, 'plus')
    .replace(/\//g, '-')
    .replace(/[()（）]/g, '')
    .replace(/[#]/g, '')
    .replace(/[^a-z0-9\u3000-\u9fff\uff00-\uffef-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // 日本語文字が残っている場合、簡易ハッシュに変換
  if (/[\u3000-\u9fff\uff00-\uffef]/.test(ascii)) {
    // 日本語部分を数値ハッシュに
    let hash = 0;
    for (let i = 0; i < lower.length; i++) {
      hash = ((hash << 5) - hash + lower.charCodeAt(i)) | 0;
    }
    const hashStr = Math.abs(hash).toString(36);
    // ASCII部分があれば残す
    const asciiPart = ascii.replace(/[\u3000-\u9fff\uff00-\uffef]+/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
    return asciiPart ? `${asciiPart}-${hashStr}` : `source-${hashStr}`;
  }

  return ascii || 'unknown';
}
