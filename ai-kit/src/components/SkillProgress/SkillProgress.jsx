import React from 'react';
import { cx } from '../../utils/cx.js';

/** A plain 10px bar showing a percentage as a purple fill on a pale track (legacy palette). */
export function SkillProgress({ value: valueProp, state, className, style, children: _c, ...rest }) {
  const value = Math.min(100, Math.max(0, Number(valueProp) || 0));
  return (
    <div role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value} {...rest} className={cx('fs-skill-progress', className)} data-state={state || undefined} style={{ '--fs-skill-progress-value': value, ...style }}>
      {value > 0 ? <span className="fs-skill-progress__fill" /> : null}
    </div>
  );
}
