import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

function focusField(e) {
  if (e.target.closest('input, button, a')) return;
  const el = e.currentTarget.querySelector('input');
  if (el && !el.disabled) el.focus();
}

/** Password field of the legacy input family, with an eye button that shows or hides the value. */
export function PasswordInput({ size = 'medium', visible: visibleProp, defaultVisible, onVisibleChange, showLabel, hideLabel, fullWidth, state, htmlSize, inputRef, className, style, children: _c, ...rest }) {
  const disabled = !!rest.disabled || state === 'disabled';
  const controlled = visibleProp !== undefined;
  const [own, setOwn] = React.useState(!!defaultVisible);
  const visible = controlled ? !!visibleProp : own;
  const toggle = () => { if (!controlled) setOwn(!visible); if (onVisibleChange) onVisibleChange(!visible); };
  const eyePx = size === 'large' ? 16 : 14;
  return (
    <div className={cx('fs-password-input', `fs-password-input--${size}`, visible && 'fs-password-input--visible', disabled && 'fs-password-input--disabled', fullWidth && 'fs-password-input--full-width', className)} style={style} data-state={state || undefined} onClick={focusField}>
      <input {...rest} type={visible ? 'text' : 'password'} ref={inputRef} className="fs-password-input__control" size={htmlSize} disabled={disabled || undefined} />
      <button type="button" className="fs-password-input__toggle" aria-pressed={visible} disabled={disabled || undefined} onClick={toggle} aria-label={visible ? hideLabel || 'Hide password' : showLabel || 'Show password'}>
        <Icon name={visible ? 'eye' : 'eye-slash'} size={eyePx} strokeWidth={2} />
      </button>
    </div>
  );
}
