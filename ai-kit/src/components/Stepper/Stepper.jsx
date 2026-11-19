import React from 'react';
import { cx } from '../../utils/cx.js';

/** One step of a Stepper: indicator, joining lines and label. */
export function StepperStep({ state = 'default', position = 'middle', label: labelProp, className, children, ...rest }) {
  const label = labelProp != null ? labelProp : children;
  return (
    <li aria-current={state === 'active' ? 'step' : undefined} {...rest} className={cx('fs-stepper__step', `fs-stepper__step--${state}`, `fs-stepper__step--${position}`, className)} data-state={state}>
      <span className="fs-stepper__row" aria-hidden>
        <span className="fs-stepper__line fs-stepper__line--before" />
        <span className="fs-stepper__indicator">
          {state === 'done' ? (
            <svg className="fs-stepper__check" viewBox="0 0 16 16" width={16} height={16}>
              <rect x={-3} y={-1} width={6} height={2} rx={1} fill="currentColor" transform="translate(5.17 9.83) rotate(45)" />
              <rect x={-5} y={-1} width={10} height={2} rx={1} fill="currentColor" transform="translate(9.41 8.41) rotate(-45)" />
            </svg>
          ) : <span className="fs-stepper__dot" />}
        </span>
        <span className="fs-stepper__line fs-stepper__line--after" />
      </span>
      {label != null && label !== false ? <span className="fs-stepper__label">{label}</span> : null}
    </li>
  );
}

/** Shows where the user is in a short, linear sequence (legacy palette). */
export function Stepper({ steps, current = 0, className, children, ...rest }) {
  const labels = typeof steps === 'number' ? null : steps || [];
  const count = labels ? labels.length : Math.max(0, Math.floor(steps));
  let items = children;
  if (items == null) {
    items = [];
    for (let i = 0; i < count; i++) {
      items.push(<StepperStep key={i} state={i < current ? 'done' : i === current ? 'active' : 'default'} position={i === 0 ? 'start' : i === count - 1 ? 'end' : 'middle'} className={count === 1 ? 'fs-stepper__step--end' : undefined} label={labels ? labels[i] : null} />);
    }
  }
  return <ol {...rest} className={cx('fs-stepper', className)}>{items}</ol>;
}
