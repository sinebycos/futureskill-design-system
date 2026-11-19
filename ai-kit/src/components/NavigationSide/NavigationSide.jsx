import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

const NAV_SLOTS = ['slot', 'alert', 'button', 'search'];
const NAV_ITEM = 'fs-navigation-side-item';
const navShown = (node) => node != null && node !== false;

/** One row of the side navigation: a destination, caption, divider, slot, avatar row or expand button. */
export function NavigationSideItem({ variant = 'default', selected, learner, icon, submenu, badge, badgeCount, align, state, className, children, ...rest }) {
  const rootClass = (mods) => cx(NAV_ITEM, mods, className);
  const ds = state || undefined;
  if (variant === 'header') return <div {...rest} className={rootClass(`${NAV_ITEM}--header`)} data-state={ds}>{children}</div>;
  if (variant === 'divider' || variant === 'divider-full') return <div role="separator" {...rest} className={rootClass(`${NAV_ITEM}--${variant}`)} data-state={ds}><span className={`${NAV_ITEM}__rule`} /></div>;
  if (variant === 'avatar') return <div {...rest} className={rootClass(`${NAV_ITEM}--avatar`)} data-state={ds}>{children}</div>;
  if (NAV_SLOTS.indexOf(variant) >= 0) {
    return <div {...rest} className={rootClass(`${NAV_ITEM}--slot`)} data-state={ds}>{navShown(children) ? children : <div className={`${NAV_ITEM}__placeholder`}>Swap with another component</div>}</div>;
  }
  if (variant === 'expand') {
    const { onClick, disabled, title, 'aria-label': ariaLabel, 'aria-expanded': ariaExpanded, 'aria-controls': ariaControls, ...row } = rest;
    return (
      <div {...row} className={rootClass(cx(`${NAV_ITEM}--expand`, align === 'end' && `${NAV_ITEM}--end`))} data-state={ds}>
        <button type="button" className={`${NAV_ITEM}__expand`} onClick={onClick} disabled={disabled} title={title} aria-label={ariaLabel} aria-expanded={ariaExpanded} aria-controls={ariaControls}>
          {icon || <Icon name="arrow-left-start-on-rectangle" variant="micro" size={16} />}
        </button>
      </div>
    );
  }
  const content = (
    <>
      {icon ? <span className={`${NAV_ITEM}__icon`}>{icon}</span> : null}
      {navShown(children) ? <span className={`${NAV_ITEM}__label`}>{children}</span> : null}
      {submenu ? <span className={`${NAV_ITEM}__chevron`}><Icon name="chevron-down" size={24} /></span> : null}
      {navShown(badge) ? <span className={`${NAV_ITEM}__badge`}>{badge}</span> : null}
      {navShown(badgeCount) ? <span className={`${NAV_ITEM}__badge`}>{badgeCount}</span> : null}
    </>
  );
  const rowClass = rootClass(cx(`${NAV_ITEM}--default`, selected && `${NAV_ITEM}--selected`, learner && `${NAV_ITEM}--learner`));
  const current = selected ? 'page' : undefined;
  if (rest.href != null) return <a {...rest} className={rowClass} data-state={ds} aria-current={current}>{content}</a>;
  return <button type="button" {...rest} className={rowClass} data-state={ds} aria-current={current}>{content}</button>;
}

/** The app's side navigation: desktop sidebar, learner card, mobile top bar or mobile drawer. */
export function NavigationSide({ variant = 'desktop', title, header, footer, logo, avatar, hamburger, menuLabel, closeLabel, onMenuClick, onClose, state, className, children, ...rest }) {
  const base = 'fs-navigation-side';
  const rootProps = { ...rest, className: cx(base, `${base}--${variant}`, className), 'data-state': state || undefined };
  if (variant === 'mobile-closed') {
    return (
      <div {...rootProps}>
        {hamburger === false ? null : <button type="button" className={`${base}__menu`} aria-label={menuLabel || 'Menu'} onClick={onMenuClick}><Icon name="bars-3" size={24} /></button>}
        {logo ? <div className={`${base}__logo`}>{logo}</div> : null}
        {avatar ? <div className={`${base}__avatar`}>{avatar}</div> : null}
        {children}
      </div>
    );
  }
  const open = variant === 'mobile-open';
  const titleRow = navShown(title) ? <div className={`${base}__title`}>{title}</div> : null;
  const top = open || header ? (
    <div className={`${base}__top`}>
      {open ? <div className={`${base}__close-row`}><button type="button" className={`${base}__close`} aria-label={closeLabel || 'Close'} onClick={onClose}><Icon name="x-mark" size={24} /></button></div> : null}
      {header}
    </div>
  ) : null;
  return (
    <div {...rootProps}>
      {open ? <div className={`${base}__overlay`} onClick={onClose} aria-hidden /> : null}
      <nav className={`${base}__panel`}>
        {variant === 'desktop' ? <>{titleRow}{top}</> : <>{top}{titleRow}</>}
        <div className={`${base}__middle`}>{children}</div>
        {footer ? <div className={`${base}__bottom`}>{footer}</div> : null}
      </nav>
    </div>
  );
}
