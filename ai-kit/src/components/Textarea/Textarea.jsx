import React from 'react';
import { cx } from '../../utils/cx.js';

const textLen = (v) => (v == null ? 0 : String(v).length);

/** Multi-line text field of the legacy input family, with an optional character count. */
export function Textarea({ size = 'medium', showCount, fullWidth, state, inputRef, className, style, children: _c, onChange, ...rest }) {
  const disabled = !!rest.disabled || state === 'disabled';
  const [own, setOwn] = React.useState(() => textLen(rest.defaultValue));
  const count = rest.value !== undefined ? textLen(rest.value) : own;
  const change = (e) => { setOwn(e.target.value.length); if (onChange) onChange(e); };
  return (
    <div className={cx('fs-textarea', `fs-textarea--${size}`, disabled && 'fs-textarea--disabled', fullWidth && 'fs-textarea--full-width', className)} style={style} data-state={state || undefined}>
      <textarea rows={2} {...rest} ref={inputRef} className="fs-textarea__control" disabled={disabled || undefined} onChange={change} />
      {showCount ? <span className="fs-textarea__count">{rest.maxLength != null ? `${count} / ${rest.maxLength}` : count}</span> : null}
    </div>
  );
}
