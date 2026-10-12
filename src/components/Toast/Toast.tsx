import { forwardRef, useState, type HTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import './Toast.css';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';
export type ToastTheme = 'light' | 'dark' | 'colored';

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Figma "Type". Picks the status colour and the icon. Default 'success'. */
  variant?: ToastVariant;
  /** Figma "Theme". 'light' is a white toast, 'dark' a #121212 toast, 'colored' fills the toast with the status colour. Default 'light'. It is a prop: the toast does not follow the page theme. */
  theme?: ToastTheme;
  /** The message. Same as children; `message` wins when both are given. */
  message?: ReactNode;
  /** The message: one short line, 16/24. */
  children?: ReactNode;
  /** Leading 24px icon: any React node. Defaults to the variant's icon (Heroicons solid). Pass null or false for none. */
  icon?: ReactNode;
  /** The 5px bar along the bottom edge (Figma "Progress"). A number 0-100 is its width in percent of the toast; `true` draws it at the length shown in Figma (188 of 313px); false or omitted = no bar. Default false. */
  progress?: number | boolean;
  /** Shows the close icon. Default true. */
  closable?: boolean;
  /** Called when the close icon is clicked. Uncontrolled toasts also hide themselves. */
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** aria-label of the close icon. Default 'ปิด'. */
  closeLabel?: string;
  /** Controlled visibility. When set, the toast only hides when you pass false. */
  open?: boolean;
  /** Written to data-state for documentation. Toast has no hover, press or disabled looks in Figma. */
  state?: string;
}

const TOAST_ICONS: Record<ToastVariant, typeof CheckCircleIcon> = {
  success: CheckCircleIcon, error: ExclamationCircleIcon, warning: ExclamationTriangleIcon, info: InformationCircleIcon,
};
const TOAST_THEMES: readonly ToastTheme[] = ['light', 'dark', 'colored'];

export const Toast = forwardRef<HTMLDivElement, ToastProps>(function Toast(
  { variant: variantProp, theme: themeProp, message, icon: iconProp, progress, closable, onClose, closeLabel, open: openProp, state, className, children, ...rest },
  ref,
) {
  const variant: ToastVariant = variantProp && Object.prototype.hasOwnProperty.call(TOAST_ICONS, variantProp) ? variantProp : 'success';
  const theme: ToastTheme = themeProp && TOAST_THEMES.indexOf(themeProp) >= 0 ? themeProp : 'light';
  const [shown, setShown] = useState(true);
  const open = openProp === undefined ? shown : openProp;
  if (!open) return null;
  let icon = iconProp;
  if (icon === undefined) {
    const VariantIcon = TOAST_ICONS[variant];
    // Figma's glyphs are 20px solid shapes in a 24px box; the Heroicons solid set at 24 has the same extent (19.5px)
    icon = <VariantIcon className="fs-icon" width={24} height={24} aria-hidden />;
  }
  let bar: ReactNode = null;
  if (typeof progress === 'number' && !isNaN(progress)) bar = <span className="fs-toast__progress" aria-hidden style={{ width: Math.max(0, Math.min(100, progress)) + '%' }} />;
  else if (progress) bar = <span className="fs-toast__progress" aria-hidden />;
  const close = (e: MouseEvent<HTMLButtonElement>) => {
    if (openProp === undefined) setShown(false);
    if (onClose) onClose(e);
  };
  return (
    <div
      role={variant === 'error' || variant === 'warning' ? 'alert' : 'status'}
      {...rest}
      ref={ref}
      className={cx('fs-toast', `fs-toast--${variant}`, `fs-toast--${theme}`, className)}
      data-state={state || undefined}
    >
      {icon ? <span className="fs-toast__icon">{icon}</span> : null}
      <div className="fs-toast__message">{message === undefined ? children : message}</div>
      {/* Figma's close glyph is a 10px cross with a 2px stroke in a 16px box. The outline x-mark's lines span 12 of 24 units, so it is drawn at 20 (10px lines) with strokeWidth 2.4 (2px), centred in the 16px button */}
      {closable === false ? null : (
        <button type="button" className="fs-toast__close" aria-label={closeLabel || 'ปิด'} onClick={close}>
          <XMarkIcon className="fs-icon" width={20} height={20} strokeWidth={2.4} aria-hidden />
        </button>
      )}
      {bar}
    </div>
  );
});
