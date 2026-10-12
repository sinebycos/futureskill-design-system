import type { ComponentType, CSSProperties, SVGProps } from 'react';
import * as Outline from '@heroicons/react/24/outline';
import * as Solid from '@heroicons/react/24/solid';
import * as Mini from '@heroicons/react/20/solid';
import * as Micro from '@heroicons/react/16/solid';
import { cx } from '../utils/cx';
import { ICON_NAMES, type IconName } from './names';

type HeroIcon = ComponentType<SVGProps<SVGSVGElement> & { title?: string; titleId?: string }>;
const SETS: Record<IconVariant, Record<string, unknown>> = { outline: Outline, solid: Solid, mini: Mini, micro: Micro };
const BOX: Record<IconVariant, number> = { outline: 24, solid: 24, mini: 20, micro: 16 };

export type IconVariant = 'outline' | 'solid' | 'mini' | 'micro';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'ref'> {
  /** Heroicons name in kebab case: "academic-cap", "check-circle". */
  name: IconName | (string & {});
  /** outline 24px (default), solid 24px, mini 20px, micro 16px. */
  variant?: IconVariant;
  /** Size in px. Defaults to the variant's own size. */
  size?: number;
  /** Ink. Leave it out to inherit currentColor; prefer an icon-* token, e.g. "var(--icon-brand)". */
  color?: string;
  /** Accessible name. Without it the icon is hidden from screen readers. */
  title?: string;
  className?: string;
  style?: CSSProperties;
}

const pascal = (name: string) => name.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Icon';

/** Look up a Heroicons component by name, or undefined if it does not exist in that set. */
const folded: Partial<Record<IconVariant, Map<string, string>>> = {};
export function getIcon(name: string, variant: IconVariant = 'outline'): HeroIcon | undefined {
  const set = SETS[variant];
  const exact = set[pascal(name)];
  if (exact) return exact as HeroIcon;
  // a few exports capitalise digits' neighbours ("Squares2X2Icon"): fall back to a case-insensitive match
  const map = (folded[variant] ??= new Map(Object.keys(set).map((k) => [k.toLowerCase(), k])));
  const key = map.get(pascal(name).toLowerCase());
  return key ? (set[key] as HeroIcon) : undefined;
}

/**
 * Draws one Heroicons 2.2 glyph by name. This entry point imports every Heroicons glyph, so use it
 * where the name is data (CMS, config). In product code prefer importing the icon from @heroicons/react directly.
 */
export function Icon({ name, variant = 'outline', size, color, title, className, style, strokeWidth, ...rest }: IconProps) {
  const Glyph = getIcon(name, variant);
  if (!Glyph) {
    if (typeof console !== 'undefined') console.warn(`Icon: unknown icon "${name}" in set "${variant}"`);
    return null;
  }
  const px = size ?? BOX[variant];
  return (
    <Glyph
      {...rest}
      width={px}
      height={px}
      className={cx('fs-icon', className)}
      style={color ? { color, ...style } : style}
      strokeWidth={variant === 'outline' ? (strokeWidth ?? 1.5) : undefined}
      title={title}
      aria-hidden={title ? undefined : true}
    />
  );
}

/** Names available in a set. */
export function iconNames(variant: IconVariant = 'outline'): string[] {
  return ICON_NAMES.filter((n) => getIcon(n, variant) !== undefined);
}
