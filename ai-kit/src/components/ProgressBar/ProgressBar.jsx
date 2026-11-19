import React from 'react';
import { cx } from '../../utils/cx.js';

/** A read-only bar with a thumb at the current point and a bubble stating the value ("50/100"). */
export function ProgressBar({ value: valueProp, max: maxProp, label: labelProp, state, className, style, children: _c, ...rest }) {
  const max = Number(maxProp) > 0 ? Number(maxProp) : 100;
  const value = Math.min(max, Math.max(0, Number(valueProp) || 0));
  const pct = (value / max) * 100;
  const label = labelProp === undefined || labelProp === null || labelProp === false ? `${value}/${max}` : labelProp;
  return (
    <div role="progressbar" aria-valuemin={0} aria-valuemax={max} aria-valuenow={value} aria-valuetext={typeof label === 'string' ? label : undefined} {...rest}
      className={cx('fs-progress-bar', pct <= 0 && 'fs-progress-bar--start', pct >= 100 && 'fs-progress-bar--finish', className)} data-state={state || undefined} style={{ '--fs-progress-bar-value': pct, ...style }}>
      <span className="fs-progress-bar__track" />
      <span className="fs-progress-bar__fill" />
      <span className="fs-progress-bar__thumb" />
      <span className="fs-progress-bar__label">{label}<span className="fs-progress-bar__arrow" /></span>
    </div>
  );
}
