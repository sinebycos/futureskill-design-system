import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';
import { Button } from '../Button/Button.jsx';

const ALERT_ICONS = { error: 'x-circle', warning: 'exclamation-triangle', success: 'check-circle', information: 'information-circle', neutral: 'cube', brand: 'cube', 'inverse-neutral': 'cube', 'inverse-brand': 'cube' };

/** A full-width banner carrying one short message, with icon, optional action and close. */
export function Alert({ tone = 'neutral', device = 'desktop', icon: iconProp, action: actionProp, onAction, closable, onClose, closeLabel, open: openProp, state, className, children, ...rest }) {
  const inverse = tone.indexOf('inverse') === 0;
  const [shown, setShown] = React.useState(true);
  const open = openProp === undefined ? shown : openProp;
  if (!open) return null;
  let icon = iconProp;
  if (icon === undefined) icon = <Icon name={ALERT_ICONS[tone] || 'cube'} size={24} strokeWidth={2} />;
  let action = actionProp;
  if (typeof action === 'string') action = <Button variant="secondary" tone={inverse ? 'inverse' : 'neutral'} size="small" className="fs-alert__button" onClick={onAction}>{action}</Button>;
  const close = (e) => { if (openProp === undefined) setShown(false); if (onClose) onClose(e); };
  return (
    <div role={tone === 'error' || tone === 'warning' ? 'alert' : 'status'} {...rest} className={cx('fs-alert', `fs-alert--${tone}`, `fs-alert--${device}`, className)} data-state={state || undefined}>
      {icon ? <span className="fs-alert__icon">{icon}</span> : null}
      <div className="fs-alert__body">
        <div className="fs-alert__text">{children}</div>
        {action ? <span className="fs-alert__action">{action}</span> : null}
      </div>
      {closable === false ? null : <button type="button" className="fs-alert__close" aria-label={closeLabel || 'ปิด'} onClick={close}><Icon name="x-mark" size={28} /></button>}
    </div>
  );
}
