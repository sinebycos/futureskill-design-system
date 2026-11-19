import React from 'react';
import { cx } from '../../utils/cx.js';

const BUTTON_ICON_SIZE = { large: 24, medium: 20, small: 16, tiny: 16 };

/** Triggers an action. Primary = filled, secondary = outlined, text = no container. */
export function Button({ variant = 'primary', tone = 'brand', size = 'medium', iconOnly = false, iconLeft, iconRight, state, htmlType = 'button', className, disabled, children, ...rest }) {
  const iconPx = iconOnly ? (size === 'small' ? 16 : 24) : BUTTON_ICON_SIZE[size];
  const slot = (node) => (node ? <span className="fs-btn__icon" style={{ width: iconPx, height: iconPx }}>{node}</span> : null);
  return (
    <button
      {...rest}
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
}
