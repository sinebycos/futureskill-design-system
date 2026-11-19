import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

function focusField(e) {
  if (e.target.closest('input, button, a')) return;
  const el = e.currentTarget.querySelector('input');
  if (el && !el.disabled) el.focus();
}

const SEARCH_BOX_GLYPH = { large: 16, medium: 14, small: 12 };

/** Search field of the legacy input family, with an enter control, optional clear button and suffix. */
export function SearchBox({ size = 'medium', enter = 'default', enterText, enterIcon, enterLabel, suffix: suffixProp, suffixIcon, allowClear, clearLabel, onSearch, onClear, fullWidth, state, htmlSize, inputRef, className, style, children: _c, value: valueProp, defaultValue, onChange, onKeyDown, ...rest }) {
  const disabled = !!rest.disabled || state === 'disabled';
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue == null ? '' : String(defaultValue));
  const value = controlled ? valueProp : own;
  const node = React.useRef(null);
  const setRef = (el) => { node.current = el; if (typeof inputRef === 'function') inputRef(el); else if (inputRef) inputRef.current = el; };
  const change = (e) => { if (!controlled) setOwn(e.target.value); if (onChange) onChange(e); };
  const search = (e) => { if (onSearch && node.current) onSearch(node.current.value, e); };
  const keyDown = (e) => { if (onKeyDown) onKeyDown(e); if (e.key === 'Enter' && !e.defaultPrevented) search(e); };
  const clear = (e) => {
    const input = node.current; if (!input) return;
    const d = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value'); if (d && d.set) d.set.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true })); input.focus(); if (onClear) onClear(e);
  };
  const clearable = !!allowClear && !disabled && String(value).length > 0;
  const suffix = suffixIcon ? suffixIcon : suffixProp;
  const glyph = enter === 'icon' ? 14 : SEARCH_BOX_GLYPH[size] || 14;
  return (
    <div className={cx('fs-search-box', `fs-search-box--${size}`, `fs-search-box--enter-${enter}`, disabled && 'fs-search-box--disabled', fullWidth && 'fs-search-box--full-width', className)} style={style} data-state={state || undefined}>
      <div className="fs-search-box__field" onClick={focusField}>
        <input type="search" {...rest} ref={setRef} className="fs-search-box__control" size={htmlSize} value={value} onChange={change} onKeyDown={keyDown} disabled={disabled || undefined} />
        {clearable || suffix != null ? (
          <span className="fs-search-box__suffix">
            {clearable ? <button type="button" className="fs-search-box__clear" aria-label={clearLabel || 'Clear'} onClick={clear}><Icon name="x-circle" variant="micro" size={12} /></button> : null}
            {suffix}
          </span>
        ) : null}
      </div>
      <button type="button" className="fs-search-box__enter" aria-label={enter === 'text' ? undefined : enterLabel || 'Search'} disabled={disabled || undefined} onClick={search}>
        {enter === 'text' ? (enterIcon || null) : <Icon name="magnifying-glass" size={glyph} strokeWidth={2} />}
        {enter === 'text' ? <span className="fs-search-box__enter-text">{enterText || 'Search'}</span> : null}
      </button>
    </div>
  );
}
