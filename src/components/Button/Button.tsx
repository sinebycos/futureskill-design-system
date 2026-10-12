import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonTone = 'brand' | 'neutral' | 'destructive' | 'inverse';
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Figma "Type". Primary = filled, secondary = outlined, text = no container. Default 'primary'. */
  variant?: ButtonVariant;
  /** Default 'brand'. Use 'inverse' only on background-inverse or another dark ground. */
  tone?: ButtonTone;
  /** Default 'medium' (40px). 'large' 54px, 'small' 32px. 'tiny' is the legacy 35px pill, brand tone only. */
  size?: ButtonSize;
  /** Square button with one icon and no label: 48px at medium, 32px at small. Pass the icon as iconLeft and an aria-label. */
  iconOnly?: boolean;
  /** Icon before the label. Sized to the button automatically: 24px large, 20px medium, 16px small (iconOnly: 24px medium, 16px small). */
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  /** Pins a visual state for documentation. Real hover, press and disabled work without it. */
  state?: 'hover' | 'click' | 'disabled';
  /** The HTML button type. Default 'button'. */
  htmlType?: 'button' | 'submit' | 'reset';
}

/** Sizes the icon slot for each button size, so callers can pass a bare Heroicons component. */
export const BUTTON_ICON_SIZE: Record<ButtonSize, number> = { large: 24, medium: 20, small: 16, tiny: 16 };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = 'primary', tone = 'brand', size = 'medium', iconOnly = false, iconLeft, iconRight, state, htmlType = 'button', className, disabled, children, ...rest },
  ref,
) {
  const iconPx = iconOnly ? (size === 'small' ? 16 : 24) : BUTTON_ICON_SIZE[size];
  const slot = (node: ReactNode) => (node ? <span className="fs-btn__icon" style={{ width: iconPx, height: iconPx }}>{node}</span> : null);
  return (
    <button
      {...rest}
      ref={ref}
      type={htmlType}
      className={cx('fs-btn', `fs-btn--${variant}`, `fs-btn--${tone}`, `fs-btn--${size}`, iconOnly && 'fs-btn--icon-only', className)}
      data-state={state}
      disabled={disabled || state === 'disabled' || undefined}
    >
      {iconOnly ? slot(iconLeft ?? iconRight ?? children) : slot(iconLeft)}
      {iconOnly ? null : <span className="fs-btn__label">{children}</span>}
      {iconOnly ? null : slot(iconRight)}
    </button>
  );
});
