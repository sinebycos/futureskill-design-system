import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

const OJT_METHODS = {
  'apprenticeship': ['Apprenticeship', 'trophy'], 'orientation': ['Orientation', 'presentation-chart-line'], 'shadowing': ['Shadowing', 'eye'], 'mentoring': ['Mentoring', 'academic-cap'],
  'coaching': ['Coaching', 'book-open'], 'job-rotation': ['Job Rotation', 'arrows-right-left'], 'cross-training': ['Cross-Training', 'users'], 'simulated-training': ['Simulated Training', 'forward'],
};

/** A coloured pill naming one of the eight on-the-job training methods (legacy palette). */
export function OjtMethodBadge({ method: methodProp, state, className, children, ...rest }) {
  const method = methodProp && OJT_METHODS[methodProp] ? methodProp : 'apprenticeship';
  const [label, icon] = OJT_METHODS[method];
  return (
    <span {...rest} className={cx('fs-ojt-method-badge', `fs-ojt-method-badge--${method}`, className)} data-state={state || undefined}>
      <Icon name={icon} size={16} />
      <span className="fs-ojt-method-badge__label">{children == null ? label : children}</span>
    </span>
  );
}
