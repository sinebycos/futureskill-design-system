import type { CSSProperties, SVGProps } from 'react';

export type IconVariant = 'outline' | 'solid' | 'mini' | 'micro';

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name' | 'ref'> {
  /** Heroicons 2.2 name in kebab case: "academic-cap", "check-circle". */
  name: string;
  /** outline 24px (default, 1.5 stroke), solid 24px, mini 20px, micro 16px. */
  variant?: IconVariant;
  /** Size in px. Defaults to the variant's own size. */
  size?: number;
  /** Ink. Leave it out to inherit currentColor; prefer an icon-* token, e.g. "var(--icon-brand)". */
  color?: string;
  /** Accessible name. Without it the icon is hidden from screen readers. */
  title?: string;
  /** Outline only. Default 1.5. */
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

export function Icon(props: IconProps): JSX.Element;
