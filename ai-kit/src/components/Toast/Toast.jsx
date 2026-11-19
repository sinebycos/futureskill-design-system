import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

const TOAST_ICONS = { success: 'check-circle', error: 'exclamation-circle', warning: 'exclamation-triangle', info: 'information-circle' };
const TOAST_THEMES = ['light', 'dark', 'colored'];

/** A small 313px message reporting the result of an action (legacy palette). */
export function Toast({ variant: variantProp, theme: themeProp, message, icon: iconProp, progress, closable, onClose, closeLabel, open: openProp, state, className, children, ...rest }) {
  const variant = variantProp && TOAST_ICONS[variantProp] ? variantProp : 'success';
  const theme = themeProp && TOAST_THEMES.indexOf(themeProp) >= 0 ? themeProp : 'light';
  const [shown, setShown] = React.useState(true);
  const open = openProp === undefined ? shown : openProp;
  if (!open) return null;
  let icon = iconProp;
  if (icon === undefined) icon = <Icon name={TOAST_ICONS[variant]} variant="solid" size={24} />;
  let bar = null;
  if (typeof progress === 'number' && !isNaN(progress)) bar = <span className="fs-toast__progress" aria-hidden style={{ width: Math.max(0, Math.min(100, progress)) + '%' }} />;
  else if (progress) bar = <span className="fs-toast__progress" aria-hidden />;
  const close = (e) => { if (openProp === undefined) setShown(false); if (onClose) onClose(e); };
  return (
    <div role={variant === 'error' || variant === 'warning' ? 'alert' : 'status'} {...rest} className={cx('fs-toast', `fs-toast--${variant}`, `fs-toast--${theme}`, className)} data-state={state || undefined}>
      {icon ? <span className="fs-toast__icon">{icon}</span> : null}
      <div className="fs-toast__message">{message === undefined ? children : message}</div>
      {closable === false ? null : <button type="button" className="fs-toast__close" aria-label={closeLabel || 'ปิด'} onClick={close}><Icon name="x-mark" size={20} strokeWidth={2.4} /></button>}
      {bar}
    </div>
  );
}
