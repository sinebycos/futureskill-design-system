import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { ArrowsRightLeftIcon, CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import './Badge.css';

export type BadgeTone = 'error' | 'warning' | 'success' | 'information' | 'neutral' | 'brand';
export type BadgeSize = 'small' | 'medium';
export type BadgeDot = 'online' | 'busy' | 'away' | 'offline' | 'notification';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Colour meaning. Default 'neutral' (the Figma component's own default variant is Error). */
  tone?: BadgeTone;
  /** Default 'medium' (32px high, 16/24 label, 20px icon). 'small' is 24px high, 14/22 label, 16px icon. */
  size?: BadgeSize;
  /** Leading icon. Omitted or true = the tone's default icon; false = no icon; any icon node replaces it; a bare Heroicons component is sized 20px at medium, 16px at small. */
  icon?: boolean | ReactNode;
  /** 12px status dot between the icon and the label. true = 'online'. Default false. */
  dot?: boolean | BadgeDot;
  /** Copied to data-state. Badge is static and has no hover, press or disabled state in Figma. */
  state?: string;
  /** The label: one or two words. */
  children?: ReactNode;
}

const BADGE_ICONS: Record<BadgeTone, typeof XCircleIcon> = {
  error: XCircleIcon, warning: ExclamationTriangleIcon, success: CheckCircleIcon, information: InformationCircleIcon,
  neutral: ArrowsRightLeftIcon, brand: ArrowsRightLeftIcon,
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  { tone = 'neutral', size = 'medium', icon, dot: dotProp, state, className, children, ...rest },
  ref,
) {
  let iconNode: ReactNode;
  if (icon === undefined || icon === true) {
    const ToneIcon = BADGE_ICONS[tone];
    const px = size === 'small' ? 16 : 20;
    iconNode = ToneIcon ? <ToneIcon className="fs-icon" width={px} height={px} aria-hidden /> : null;
  } else {
    iconNode = icon || null;
  }
  const dot = dotProp === true ? 'online' : dotProp;
  return (
    <span
      {...rest}
      ref={ref}
      className={cx('fs-badge', `fs-badge--${tone}`, `fs-badge--${size}`, className)}
      data-state={state || undefined}
    >
      {iconNode}
      {dot ? <span className="fs-badge__dot-box"><span className={cx('fs-badge__dot', `fs-badge__dot--${dot}`)} /></span> : null}
      <span className="fs-badge__label">{children}</span>
    </span>
  );
});
