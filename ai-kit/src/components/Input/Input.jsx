import React from 'react';
import { cx } from '../../utils/cx.js';

function focusField(e) {
  if (e.target.closest('input, button, a')) return;
  const el = e.currentTarget.querySelector('input');
  if (el && !el.disabled) el.focus();
}

/** Draws an icon element at the affix size: 14px, stroke 2. */
function inputIcon(icon) {
  if (!React.isValidElement(icon)) return icon || null;
  const p = icon.props;
  return React.cloneElement(icon, { size: p.size ?? 14, width: p.width ?? 14, height: p.height ?? 14, strokeWidth: p.strokeWidth ?? 2 });
}
function inputSlot(kind, content, icon) {
  if (content == null && !icon) return null;
  return <span className={kind}>{icon ? inputIcon(icon) : content}</span>;
}

/** Single-line text field of the legacy input family, with prefix, suffix and addon cells. */
export function Input({ size = 'medium', htmlSize, prefix, prefixIcon, suffix, suffixIcon, addonBefore, addonBeforeIcon, addonAfter, addonAfterIcon, fullWidth, state, className, style, inputRef, children: _c, ...rest }) {
  const disabled = !!rest.disabled || state === 'disabled';
  const before = inputSlot('fs-input__addon fs-input__addon--before', addonBefore, addonBeforeIcon);
  const after = inputSlot('fs-input__addon fs-input__addon--after', addonAfter, addonAfterIcon);
  return (
    <div className={cx('fs-input', `fs-input--${size}`, disabled && 'fs-input--disabled', before && 'fs-input--addon-before', after && 'fs-input--addon-after', fullWidth && 'fs-input--full-width', className)} style={style} data-state={state}>
      {before}
      <div className="fs-input__field" onClick={focusField}>
        {inputSlot('fs-input__affix', prefix, prefixIcon)}
        <input type="text" {...rest} ref={inputRef} className="fs-input__control" size={htmlSize} disabled={disabled || undefined} />
        {inputSlot('fs-input__affix', suffix, suffixIcon)}
      </div>
      {after}
    </div>
  );
}
