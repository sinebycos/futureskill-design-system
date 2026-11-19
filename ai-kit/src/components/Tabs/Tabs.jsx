import React from 'react';
import { cx } from '../../utils/cx.js';

/** A single tab. Tabs renders these for you. */
export function TabsItem({ label, icon, badge, selected, state, className, children, ...rest }) {
  return (
    <button type="button" role="tab" {...rest} className={cx('fs-tabs__item', selected && 'fs-tabs__item--selected', className)} aria-selected={!!selected} data-state={state || undefined} disabled={rest.disabled || state === 'disabled' || undefined}>
      {icon || null}
      <span className="fs-tabs__label">{label != null ? label : children}</span>
      {badge != null && badge !== false ? <span className="fs-tabs__badge">{badge}</span> : null}
    </button>
  );
}
const tabEnabled = (item) => !item.disabled && item.state !== 'disabled';

/** A horizontal row of tabs that switches between views of the same page. Draws the row only. */
export function Tabs({ items: itemsProp, value: valueProp, defaultValue, onChange, variant: variantProp, className, children: _c, onKeyDown: onKeyDownProp, ...rest }) {
  const items = itemsProp || [];
  const first = items.filter(tabEnabled)[0];
  const [own, setOwn] = React.useState(defaultValue !== undefined ? defaultValue : first ? first.id : undefined);
  const value = valueProp !== undefined ? valueProp : own;
  const variant = variantProp || (items.some((i) => i.icon) ? 'icons' : 'text');
  const stop = items.some((i) => i.id === value && tabEnabled(i)) ? value : first ? first.id : undefined;
  const select = (id) => { if (valueProp === undefined) setOwn(id); if (onChange && id !== value) onChange(id); };
  const onKeyDown = (e) => {
    if (onKeyDownProp) onKeyDownProp(e);
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step && e.key !== 'Home' && e.key !== 'End') return;
    const tabs = Array.from(e.currentTarget.querySelectorAll('[role="tab"]:not(:disabled)'));
    if (!tabs.length) return;
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (tabs.indexOf(e.target) + step + tabs.length) % tabs.length;
    e.preventDefault(); tabs[next].focus(); tabs[next].click();
  };
  return (
    <div role="tablist" {...rest} className={cx('fs-tabs', `fs-tabs--${variant}`, className)} onKeyDown={onKeyDown}>
      {items.map((item) => (
        <TabsItem key={item.id} aria-controls={item.controls} label={item.label} icon={variant === 'icons' ? item.icon : null} badge={item.badge} selected={item.id === value} disabled={item.disabled} state={item.state} tabIndex={item.id === stop ? 0 : -1} onClick={() => select(item.id)} />
      ))}
    </div>
  );
}
