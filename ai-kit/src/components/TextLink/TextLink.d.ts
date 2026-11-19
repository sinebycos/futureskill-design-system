import * as React from 'react';

export type TextLinkTone = 'default' | 'neutral-strong' | 'neutral-weak' | 'destructive' | 'inverse-strong' | 'inverse-weak';
/** An inline text action with no container. */
export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLElement> {
  /** Default 'default' (brand). Inverse tones only on dark grounds. */
  tone?: TextLinkTone;
  /** Default 'small' (16/24). 'tiny' is 14/20. */
  size?: 'small' | 'tiny';
  /** Default 'bold' (600). */
  weight?: 'bold' | 'regular';
  /** Default true: underlined at rest, removed on hover. false: underlined on hover only. */
  underline?: boolean;
  /** With href the root is <a>; without it, <button>. */
  href?: string;
  disabled?: boolean;
  /** Icon nodes sized to 20px. */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  state?: 'hover' | 'press' | 'focus' | 'disabled';
  htmlType?: 'button' | 'submit' | 'reset';
}
export function TextLink(props: TextLinkProps): JSX.Element;
