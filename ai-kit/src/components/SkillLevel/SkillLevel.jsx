import React from 'react';
import { cx } from '../../utils/cx.js';

const SKILL_LEVEL_INFO = { 'not-start': { label: 'Not start', bars: 3 }, novice: { label: 'Novice', bars: 1 }, emerging: { label: 'Emerging', bars: 1 }, intermediate: { label: 'Intermediate', bars: 2 }, 'above-avg': { label: 'Above Avg', bars: 2 }, excellent: { label: 'Excellent', bars: 3 } };

/** Shows which of six skill levels a learner is at, as 3 bars or a chart band (legacy palette). */
export function SkillLevel({ level: levelProp, variant, label: labelProp, range, active, state, className, ...rest }) {
  const level = levelProp && SKILL_LEVEL_INFO[levelProp] ? levelProp : 'not-start';
  const info = SKILL_LEVEL_INFO[level];
  const band = variant === 'band';
  const label = labelProp !== undefined ? labelProp : info.label;
  const inactive = band && (active === false || level === 'not-start');
  const rootClass = cx('fs-skill-level', `fs-skill-level--${band ? 'band' : 'bars'}`, `fs-skill-level--${level}`, inactive && 'fs-skill-level--inactive', className);
  if (band) {
    return (
      <div {...rest} className={rootClass} data-state={state || undefined}>
        <div className="fs-skill-level__head"><span className="fs-skill-level__cap" /><span className="fs-skill-level__label">{label}</span></div>
        <span className="fs-skill-level__range">{range}</span>
      </div>
    );
  }
  return (
    <span role="img" aria-label={typeof label === 'string' ? label : info.label} {...rest} className={rootClass} data-state={state || undefined}>
      {[1, 2, 3].map((i) => <span key={i} className={cx('fs-skill-level__bar', `fs-skill-level__bar--${i}`, i <= info.bars && 'fs-skill-level__bar--on')} />)}
    </span>
  );
}
