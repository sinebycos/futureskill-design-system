import { forwardRef, type CSSProperties, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './ProgressBar.css';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Current value, from 0 to max. Out-of-range numbers are clamped. Default 0. */
  value?: number;
  /** The value that counts as finished. Default 100, as in Figma ("50/100"). */
  max?: number;
  /** Text in the bubble above the thumb. Default is "value/max", e.g. "50/100". */
  label?: ReactNode;
  /** Copied to data-state. ProgressBar is read-only and has no hover, press or disabled state in Figma. */
  state?: string;
}

/** A read-only bar with a thumb at the current point and a bubble stating the value. */
export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(function ProgressBar(
  { value: valueProp, max: maxProp, label: labelProp, state, className, style, children: _children, ...rest },
  ref,
) {
  const max = Number(maxProp) > 0 ? Number(maxProp) : 100;
  const value = Math.min(max, Math.max(0, Number(valueProp) || 0));
  const pct = (value / max) * 100;
  const label = labelProp === undefined || labelProp === null || labelProp === false ? `${value}/${max}` : labelProp;
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-valuetext={typeof label === 'string' ? label : undefined}
      {...rest}
      ref={ref}
      className={cx('fs-progress-bar', pct <= 0 && 'fs-progress-bar--start', pct >= 100 && 'fs-progress-bar--finish', className)}
      data-state={state || undefined}
      style={{ '--fs-progress-bar-value': pct, ...style } as CSSProperties}
    >
      <span className="fs-progress-bar__track" />
      <span className="fs-progress-bar__fill" />
      <span className="fs-progress-bar__thumb" />
      <span className="fs-progress-bar__label">
        {label}
        <span className="fs-progress-bar__arrow" />
      </span>
    </div>
  );
});
