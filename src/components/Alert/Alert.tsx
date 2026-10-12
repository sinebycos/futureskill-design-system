import { forwardRef, useState, type HTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { CheckCircleIcon, CubeIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '../Button';
import './Alert.css';

export type AlertTone = 'error' | 'warning' | 'success' | 'information' | 'neutral' | 'brand' | 'inverse-neutral' | 'inverse-brand';
export type AlertDevice = 'desktop' | 'mobile';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Figma "Tone". Default 'neutral'. The two inverse tones carry their own dark or brand ground. */
  tone?: AlertTone;
  /** Figma "Device". 'desktop' (default) is one row; 'mobile' stacks the action under the text and pins the close icon top right. */
  device?: AlertDevice;
  /** Leading 24px icon: any React node. Defaults to the tone's icon (cube for neutral, brand and inverse). Pass null or false for none. */
  icon?: ReactNode;
  /** A label string, rendered as a small secondary Button (neutral, or inverse on inverse tones), or your own node. Omit for no action. */
  action?: ReactNode;
  /** Click handler for the button made from a string `action`. */
  onAction?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Shows the close icon. Default true. */
  closable?: boolean;
  /** Called when the close icon is clicked. Uncontrolled alerts also hide themselves. */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** aria-label of the close icon. Default 'ปิด'. */
  closeLabel?: string;
  /** Controlled visibility. When set, the alert only hides when you pass false. */
  open?: boolean;
  /** Written to data-state for documentation. Alert has no hover, press or disabled looks in Figma. */
  state?: string;
  /** The message: one short sentence, 14/22. */
  children?: ReactNode;
}

const ALERT_ICONS: Record<AlertTone, typeof CubeIcon> = {
  error: XCircleIcon, warning: ExclamationTriangleIcon, success: CheckCircleIcon, information: InformationCircleIcon,
  neutral: CubeIcon, brand: CubeIcon, 'inverse-neutral': CubeIcon, 'inverse-brand': CubeIcon,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  { tone = 'neutral', device = 'desktop', icon: iconProp, action: actionProp, onAction, closable, onClose, closeLabel, open: openProp, state, className, children, ...rest },
  ref,
) {
  const inverse = tone.indexOf('inverse') === 0;
  const [shown, setShown] = useState(true);
  const open = openProp === undefined ? shown : openProp;
  if (!open) return null;
  let icon = iconProp;
  if (icon === undefined) {
    const ToneIcon = ALERT_ICONS[tone] ?? CubeIcon;
    // Figma's tone glyphs measure 20px across inside the 24px box; a 2px stroke brings the Heroicons outline to the same extent
    icon = <ToneIcon className="fs-icon" width={24} height={24} strokeWidth={2} aria-hidden />;
  }
  let action = actionProp;
  if (typeof action === 'string') {
    action = (
      <Button variant="secondary" tone={inverse ? 'inverse' : 'neutral'} size="small" className="fs-alert__button" onClick={onAction}>
        {action}
      </Button>
    );
  }
  const close = (e: MouseEvent<HTMLButtonElement>) => {
    if (openProp === undefined) setShown(false);
    if (onClose) onClose(e);
  };
  return (
    <div
      role={tone === 'error' || tone === 'warning' ? 'alert' : 'status'}
      {...rest}
      ref={ref}
      className={cx('fs-alert', `fs-alert--${tone}`, `fs-alert--${device}`, className)}
      data-state={state || undefined}
    >
      {icon ? <span className="fs-alert__icon">{icon}</span> : null}
      <div className="fs-alert__body">
        <div className="fs-alert__text">{children}</div>
        {action ? <span className="fs-alert__action">{action}</span> : null}
      </div>
      {/* Figma's "x" glyph measures 16px inside its 24px box; the Heroicons x-mark is 13.5px at 24, so it is drawn at 28 */}
      {closable === false ? null : (
        <button type="button" className="fs-alert__close" aria-label={closeLabel || 'ปิด'} onClick={close}>
          <XMarkIcon className="fs-icon" width={28} height={28} aria-hidden />
        </button>
      )}
    </div>
  );
});
