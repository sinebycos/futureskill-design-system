import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import {
  AcademicCapIcon, ArrowsRightLeftIcon, BookOpenIcon, EyeIcon, ForwardIcon, PresentationChartLineIcon, TrophyIcon, UsersIcon,
} from '@heroicons/react/24/outline';
import './OjtMethodBadge.css';

export type OjtMethod =
  | 'apprenticeship' | 'orientation' | 'shadowing' | 'mentoring' | 'coaching' | 'job-rotation' | 'cross-training' | 'simulated-training';

export interface OjtMethodBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** The on-the-job training method. Sets the colours, the icon and the default label. Default 'apprenticeship'. */
  method?: OjtMethod;
  /** Copied to data-state. The badge is static and has no hover, press or disabled state in Figma. */
  state?: string;
  /** Replaces the label. Omit it to show the method's English name as in Figma ("Job Rotation"). */
  children?: ReactNode;
}

const OJT_METHOD_BADGE_METHODS: Record<OjtMethod, [string, typeof TrophyIcon]> = {
  'apprenticeship': ['Apprenticeship', TrophyIcon],
  'orientation': ['Orientation', PresentationChartLineIcon],
  'shadowing': ['Shadowing', EyeIcon],
  'mentoring': ['Mentoring', AcademicCapIcon],
  'coaching': ['Coaching', BookOpenIcon],
  'job-rotation': ['Job Rotation', ArrowsRightLeftIcon],
  'cross-training': ['Cross-Training', UsersIcon],
  'simulated-training': ['Simulated Training', ForwardIcon],
};

export const OjtMethodBadge = forwardRef<HTMLSpanElement, OjtMethodBadgeProps>(function OjtMethodBadge(
  { method: methodProp, state, className, children, ...rest },
  ref,
) {
  const method: OjtMethod = methodProp && Object.prototype.hasOwnProperty.call(OJT_METHOD_BADGE_METHODS, methodProp) ? methodProp : 'apprenticeship';
  const [label, MethodIcon] = OJT_METHOD_BADGE_METHODS[method];
  return (
    <span
      {...rest}
      ref={ref}
      className={cx('fs-ojt-method-badge', `fs-ojt-method-badge--${method}`, className)}
      data-state={state || undefined}
    >
      <MethodIcon className="fs-icon" width={16} height={16} aria-hidden />
      <span className="fs-ojt-method-badge__label">{children == null ? label : children}</span>
    </span>
  );
});
