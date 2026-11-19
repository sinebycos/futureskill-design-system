import React from 'react';
import { cx } from '../../utils/cx.js';

const toSegOption = (o) => (o !== null && typeof o === 'object' ? o : { value: o, label: String(o) });

/** A single track holding 2 to 7 tabs, of which exactly one is active. */
export function SegmentedControl({ options: optionsProp, value: valueProp, defaultValue, onChange, size, iconOnly: iconOnlyProp, state, className, children: _c, ...rest }) {
  const options = (optionsProp || []).map(toSegOption);
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue !== undefined ? defaultValue : options[0] ? options[0].value : undefined);
  const value = controlled ? valueProp : own;
  const iconOnly = !!iconOnlyProp;
  const stop = options.some((o) => o.value === value) ? value : options[0] ? options[0].value : undefined;
  const select = (o) => { if (o.value === value) return; if (!controlled) setOwn(o.value); if (onChange) onChange(o.value, o); };
  const onKeyDown = (e, i) => {
    const n = options.length, k = e.key;
    const j = k === 'ArrowRight' || k === 'ArrowDown' ? (i + 1) % n : k === 'ArrowLeft' || k === 'ArrowUp' ? (i + n - 1) % n : k === 'Home' ? 0 : k === 'End' ? n - 1 : -1;
    if (j < 0) return;
    e.preventDefault(); select(options[j]);
    const el = e.currentTarget.parentNode && e.currentTarget.parentNode.children[j]; if (el) el.focus();
  };
  return (
    <div role="radiogroup" {...rest} className={cx('fs-segmented-control', `fs-segmented-control--${size || 'default'}`, iconOnly && 'fs-segmented-control--icon-only', className)} data-state={state || undefined}>
      {options.map((o, i) => {
        const active = o.value === value;
        const counter = !iconOnly && o.counter !== undefined && o.counter !== null && o.counter !== false;
        return (
          <button key={String(o.value)} type="button" role="radio" aria-checked={active} tabIndex={o.value === stop ? 0 : -1} aria-label={iconOnly && typeof o.label === 'string' ? o.label : undefined}
            className={cx('fs-segmented-control__tab', active && 'fs-segmented-control__tab--active', counter && 'fs-segmented-control__tab--counter')} onClick={() => select(o)} onKeyDown={(e) => onKeyDown(e, i)}>
            {iconOnly ? o.icon || null : <span className="fs-segmented-control__label">{o.label}</span>}
            {counter ? <span className="fs-segmented-control__counter">{o.counter}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
