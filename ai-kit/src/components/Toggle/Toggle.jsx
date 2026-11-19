import React from 'react';
import { cx } from '../../utils/cx.js';

const TOGGLE_SPINNER = 'M17.999 19.265C17.3 19.265 16.734 18.699 16.734 18C16.734 15.911 16.326 13.886 15.517 11.977C14.74 10.139 13.614 8.469 12.202 7.059C10.793 5.645 9.123 4.519 7.284 3.744C5.378 2.939 3.353 2.531 1.265 2.531C0.566 2.531 0 1.965 0 1.265C0 0.566 0.566 0 1.265 0C3.694 0 6.053 0.474 8.272 1.416C10.416 2.32 12.339 3.621 13.992 5.273C15.644 6.925 16.941 8.852 17.848 10.993C18.787 13.211 19.262 15.57 19.262 18C19.265 18.699 18.699 19.265 17.999 19.265Z';
const toggleHas = (v) => v != null && v !== false && v !== '';

function ToggleInner({ side, text, icon }) {
  const isIcon = toggleHas(icon);
  const content = isIcon ? icon : toggleHas(text) ? text : null;
  return <span className={cx('fs-toggle__inner', `fs-toggle__inner--${side}`, content == null ? 'fs-toggle__inner--empty' : isIcon ? 'fs-toggle__inner--icon' : 'fs-toggle__inner--text')}>{content}</span>;
}

/** A switch between on and off that takes effect immediately (legacy palette). */
export function Toggle({ size: sizeProp, loading: loadingProp, disabled: disabledProp, checkedText, uncheckedText, checkedIcon, uncheckedIcon, state, className, style, children: _c, ...rest }) {
  const size = sizeProp === 'small' ? 'small' : 'medium';
  const loading = !!loadingProp;
  const disabled = !!disabledProp || loading || state === 'disabled';
  const hasOn = toggleHas(checkedText) || toggleHas(checkedIcon);
  const hasOff = toggleHas(uncheckedText) || toggleHas(uncheckedIcon);
  return (
    <span className={cx('fs-toggle', `fs-toggle--${size}`, hasOn && 'fs-toggle--has-on', hasOff && 'fs-toggle--has-off', loading && 'fs-toggle--loading', disabled && 'fs-toggle--disabled', className)} style={style} data-state={state}>
      <input {...rest} type="checkbox" role="switch" className="fs-toggle__input" disabled={disabled || undefined} aria-busy={loading || undefined} />
      <span className="fs-toggle__track" aria-hidden>
        <ToggleInner side="on" text={checkedText} icon={checkedIcon} />
        <ToggleInner side="off" text={uncheckedText} icon={uncheckedIcon} />
        <span className="fs-toggle__nob">
          {loading ? <svg className="fs-toggle__spinner" viewBox="0 0 36 36"><path d={TOGGLE_SPINNER} transform="translate(16.73 0)" fill="currentColor" /></svg> : null}
        </span>
      </span>
    </span>
  );
}
