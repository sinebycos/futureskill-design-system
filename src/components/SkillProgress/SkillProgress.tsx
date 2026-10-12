import { forwardRef, type CSSProperties, type HTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './SkillProgress.css';

export interface SkillProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Percentage filled, 0 to 100. Out-of-range numbers are clamped. Default 0. */
  value?: number;
  /** Copied to data-state. SkillProgress is read-only and has no hover, press or disabled state in Figma. */
  state?: string;
}

/** A plain 10px bar that shows a percentage as a purple fill on a pale track. */
export const SkillProgress = forwardRef<HTMLDivElement, SkillProgressProps>(function SkillProgress(
  { value: valueProp, state, className, style, children: _children, ...rest },
  ref,
) {
  const value = Math.min(100, Math.max(0, Number(valueProp) || 0));
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      {...rest}
      ref={ref}
      className={cx('fs-skill-progress', className)}
      data-state={state || undefined}
      style={{ '--fs-skill-progress-value': value, ...style } as CSSProperties}
    >
      {value > 0 ? <span className="fs-skill-progress__fill" /> : null}
    </div>
  );
});
