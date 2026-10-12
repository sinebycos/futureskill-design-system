export * from './generated';
import type { ColorToken, SpacingToken, RadiusToken, ShadowToken, LayoutToken } from './generated';

export type TokenName = ColorToken | SpacingToken | RadiusToken | ShadowToken | LayoutToken;

/** `cssVar('fill-brand-strong')` → `'var(--fill-brand-strong)'`, typed against the token list. */
export function cssVar(name: TokenName | `font-${'thai' | 'english' | 'sarabun'}`): string {
  return `var(--${name})`;
}
