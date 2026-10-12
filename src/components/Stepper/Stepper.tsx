import { forwardRef, type LiHTMLAttributes, type OlHTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './Stepper.css';

export type StepperStepState = 'default' | 'active' | 'done';
export type StepperStepPosition = 'start' | 'middle' | 'end';

export interface StepperProps extends OlHTMLAttributes<HTMLOListElement> {
  /** Figma "Amount". An array gives one label per step; a number draws that many steps with no labels. Figma has 3, 4 and 5. */
  steps?: number | ReactNode[];
  /** Figma "Complete steps": how many steps are done. The step at this 0-based index is Active, the ones before it are Done. Default 0; pass the step count for "All Done". */
  current?: number;
  /** Instead of steps and current: StepperStep elements, when you need to set each step's state and position yourself. */
  children?: ReactNode;
}

export interface StepperStepProps extends LiHTMLAttributes<HTMLLIElement> {
  /** Figma "State". Default 'default' (not reached), 'active' (the current step), 'done' (completed, shows the check). */
  state?: StepperStepState;
  /** Figma "Position". 'start' has no line before the indicator, 'end' has none after it. Default 'middle'. */
  position?: StepperStepPosition;
  /** The text under the indicator. Children work too. */
  label?: ReactNode;
}

export const StepperStep = forwardRef<HTMLLIElement, StepperStepProps>(function StepperStep(
  { state = 'default', position = 'middle', label: labelProp, className, children, ...rest },
  ref,
) {
  const label = labelProp != null ? labelProp : children;
  return (
    <li
      aria-current={state === 'active' ? 'step' : undefined}
      {...rest}
      ref={ref}
      className={cx('fs-stepper__step', `fs-stepper__step--${state}`, `fs-stepper__step--${position}`, className)}
      data-state={state}
    >
      <span className="fs-stepper__row" aria-hidden>
        <span className="fs-stepper__line fs-stepper__line--before" />
        <span className="fs-stepper__indicator">
          {state === 'done' ? (
            // the Figma mark: a 6x2 and a 10x2 bar (1px corners) joined at 45 degrees inside the 16px disc
            <svg className="fs-stepper__check" viewBox="0 0 16 16" width={16} height={16}>
              <rect x={-3} y={-1} width={6} height={2} rx={1} fill="currentColor" transform="translate(5.17 9.83) rotate(45)" />
              <rect x={-5} y={-1} width={10} height={2} rx={1} fill="currentColor" transform="translate(9.41 8.41) rotate(-45)" />
            </svg>
          ) : (
            <span className="fs-stepper__dot" />
          )}
        </span>
        <span className="fs-stepper__line fs-stepper__line--after" />
      </span>
      {label != null && label !== false ? <span className="fs-stepper__label">{label}</span> : null}
    </li>
  );
});

export const Stepper = forwardRef<HTMLOListElement, StepperProps>(function Stepper(
  { steps, current = 0, className, children, ...rest },
  ref,
) {
  const labels = typeof steps === 'number' ? null : steps || [];
  const count = labels ? labels.length : Math.max(0, Math.floor(steps as number));
  let items: ReactNode = children;
  if (items == null) {
    const generated: ReactNode[] = [];
    for (let i = 0; i < count; i++) {
      generated.push(
        <StepperStep
          key={i}
          state={i < current ? 'done' : i === current ? 'active' : 'default'}
          position={i === 0 ? 'start' : i === count - 1 ? 'end' : 'middle'}
          className={count === 1 ? 'fs-stepper__step--end' : undefined}
          label={labels ? labels[i] : null}
        />,
      );
    }
    items = generated;
  }
  return <ol {...rest} ref={ref} className={cx('fs-stepper', className)}>{items}</ol>;
});
