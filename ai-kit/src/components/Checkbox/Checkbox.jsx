import React from 'react';
import { cx } from '../../utils/cx.js';

const CHECKBOX_MARK = 'M4.42 7.6L4.4 7.62L0 3.22L1.43 1.79L4.42 4.77L9.19 0L10.62 1.43L4.44 7.62Z';

/** A 16px box, with or without a label, for turning one option on or off. */
export function Checkbox({ indeterminate: indeterminateProp, state, className, style, children, disabled: disabledProp, ...rest }) {
  const inner = React.useRef(null);
  const indeterminate = !!indeterminateProp;
  const disabled = !!disabledProp || state === 'disabled';
  const labelled = children != null && children !== false;
  React.useEffect(() => { if (inner.current) inner.current.indeterminate = indeterminate; });
  return (
    <label className={cx('fs-checkbox', labelled && 'fs-checkbox--labelled', disabled && 'fs-checkbox--disabled', className)} style={style} data-state={state}>
      <span className="fs-checkbox__box">
        <input {...rest} ref={inner} type="checkbox" className="fs-checkbox__input" disabled={disabled || undefined} />
        <svg className="fs-checkbox__mark" viewBox="0 0 16 16" width={16} height={16} aria-hidden><path d={CHECKBOX_MARK} transform="translate(2.69 5)" fill="currentColor" /></svg>
      </span>
      {labelled ? <span className="fs-checkbox__label">{children}</span> : null}
    </label>
  );
}

/** A role="group" list of Checkboxes for picking any number of values. */
export function CheckboxGroup({ layout = 'vertical', options, value: valueProp, defaultValue, onChange, name, disabled, className, children: _c, ...rest }) {
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue || []);
  const value = controlled ? valueProp : own;
  const toggle = (v, e) => {
    const next = value.indexOf(v) < 0 ? value.concat([v]) : value.filter((x) => x !== v);
    if (!controlled) setOwn(next);
    if (onChange) onChange(next, e);
  };
  return (
    <div role="group" {...rest} className={cx('fs-checkbox-group', `fs-checkbox-group--${layout}`, className)}>
      {(options || []).map((o) => {
        const opt = typeof o === 'string' ? { value: o, label: o } : o;
        return <Checkbox key={opt.value} name={name} value={opt.value} checked={value.indexOf(opt.value) >= 0} disabled={disabled || opt.disabled} onChange={(e) => toggle(opt.value, e)}>{opt.label}</Checkbox>;
      })}
    </div>
  );
}
