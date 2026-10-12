import { forwardRef, type AnchorHTMLAttributes, type ReactNode, type Ref } from 'react';
import { cx } from '../../utils/cx';
import './TextLink.css';

export type TextLinkTone = 'default' | 'neutral-strong' | 'neutral-weak' | 'destructive' | 'inverse-strong' | 'inverse-weak';
export type TextLinkSize = 'small' | 'tiny';
export type TextLinkWeight = 'bold' | 'regular';

export interface TextLinkProps extends Omit<AnchorHTMLAttributes<HTMLElement>, 'type'> {
  /** Text colour. Default 'default' (brand). Use the two inverse tones only on background-inverse or another dark ground. */
  tone?: TextLinkTone;
  /** Default 'small' (16px on a 24px line). 'tiny' is 14px on a 20px line. */
  size?: TextLinkSize;
  /** Default 'bold' (SemiBold 600). 'regular' is 400. */
  weight?: TextLinkWeight;
  /** Default true: underlined at rest, underline removed on hover and press. false: plain at rest, underlined on hover and press. */
  underline?: boolean;
  /** With href the root is an anchor; without it the root is a button. */
  href?: string;
  /** Greys the label and blocks the action. On an anchor the href is dropped and aria-disabled is set. */
  disabled?: boolean;
  /** Any icon node, drawn before the label. Sized to 20px automatically, e.g. `<ArrowRightIcon />`. */
  iconLeft?: ReactNode;
  /** Any icon node, drawn after the label, sized to 20px automatically. */
  iconRight?: ReactNode;
  /** Pins a visual state for documentation. Real hover, press, focus and disabled work without it. */
  state?: 'hover' | 'press' | 'focus' | 'disabled';
  /** The HTML button type when there is no href. Default 'button'. */
  htmlType?: 'button' | 'submit' | 'reset';
}

/** Renders an `<a>` when `href` is set, otherwise a `<button>`. The ref goes to that root element. */
export const TextLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, TextLinkProps>(function TextLink(
  { tone = 'default', size = 'small', weight = 'bold', underline, iconLeft, iconRight, state, className, children, href, disabled: disabledProp, htmlType, ...rest },
  ref,
) {
  const disabled = !!disabledProp || state === 'disabled';
  const classes = cx(
    'fs-text-link',
    `fs-text-link--${tone}`,
    `fs-text-link--${size}`,
    `fs-text-link--${weight}`,
    underline === false && 'fs-text-link--no-underline',
    className,
  );
  const content = (
    <>
      {iconLeft || null}
      <span className="fs-text-link__label">{children}</span>
      {iconRight || null}
    </>
  );

  if (href != null) {
    const own = disabled ? { 'aria-disabled': 'true' as const, tabIndex: -1, onClick: undefined } : { href };
    return (
      <a {...rest} {...own} ref={ref as Ref<HTMLAnchorElement>} className={classes} data-state={state}>
        {content}
      </a>
    );
  }
  return (
    <button
      {...rest}
      ref={ref as Ref<HTMLButtonElement>}
      type={htmlType ?? 'button'}
      disabled={disabled || undefined}
      className={classes}
      data-state={state}
    >
      {content}
    </button>
  );
});
