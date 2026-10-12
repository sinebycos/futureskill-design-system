import { forwardRef, type HTMLAttributes, type MouseEvent, type ReactNode, type Ref } from 'react';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/16/solid';
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cx } from '../../utils/cx';
import './NavigationSide.css';

export type NavigationSideVariant = 'desktop' | 'learner' | 'mobile-closed' | 'mobile-open';
export type NavigationSideItemVariant = 'default' | 'header' | 'divider' | 'divider-full' | 'slot' | 'alert' | 'button' | 'search' | 'avatar' | 'expand';

export interface NavigationSideProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma "Type". 'desktop' = 256px full-height sidebar, 'learner' = Figma "Sirebar Learner", a 268px rounded card in a 300px column, 'mobile-closed' = the 72px top bar, 'mobile-open' = the drawer with a scrim. Default 'desktop'. */
  variant?: NavigationSideVariant;
  /** Small caption row with a hairline under it, e.g. "การเรียนของฉัน". */
  title?: ReactNode;
  /** Figma "Top": what sits above the items, e.g. a logo or a search field in a NavigationSideItem variant="search". */
  header?: ReactNode;
  /** Figma "Bottom": pinned to the bottom edge. Footer items, an alert, a button, the avatar row and the expand button go here. */
  footer?: ReactNode;
  /** Figma "Middle": the NavigationSideItem list. Scrolls when it is taller than the sidebar. For 'mobile-closed', extra bar content. */
  children?: ReactNode;
  /** 'mobile-closed' only: the logo node (Figma boolean "Logo"). */
  logo?: ReactNode;
  /** 'mobile-closed' only: the avatar node, 32px in Figma (Figma boolean "Avatar"). */
  avatar?: ReactNode;
  /** 'mobile-closed' only: show the 24px menu button (Figma boolean "Hamburger menu"). Default true. */
  hamburger?: boolean;
  /** 'mobile-closed' only: called when the menu button is pressed. */
  onMenuClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** 'mobile-open' only: called when the close button or the scrim is pressed. */
  onClose?: (event: MouseEvent<HTMLElement>) => void;
  /** aria-label of the menu button. Default 'Menu'. */
  menuLabel?: string;
  /** aria-label of the close button. Default 'Close'. */
  closeLabel?: string;
  /** Written to data-state. The shell has no visual states of its own. */
  state?: string;
}

export interface NavigationSideItemProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** Figma "Type". 'default' = a clickable row; 'header' = group caption; 'divider' / 'divider-full' = hairline with or without side padding; 'slot' (aliases 'alert', 'button', 'search') = a 12/24 padded row holding another component; 'avatar' = the same without padding; 'expand' = the 40px collapse button. Default 'default'. */
  variant?: NavigationSideItemVariant;
  /** Figma Type=Selected: the current page. Brand ground, 4px bar on the left, brand label and icon. Sets aria-current="page". */
  selected?: boolean;
  /** Use the "_Navigation side item Learner" metrics: 56px tall, 4px radius. Applied automatically to rows in the middle of a learner sidebar. */
  learner?: boolean;
  /** Leading icon node, sized to 24px automatically (e.g. `<HomeIcon />`). For 'expand', the 16px glyph inside the button; default is the micro arrow-left-start-on-rectangle. */
  icon?: ReactNode;
  /** Show the trailing 24px chevron for a row that opens a submenu (Figma boolean "Submenu"). */
  submenu?: boolean;
  /** A Badge node after the label (Figma boolean "Badge"). */
  badge?: ReactNode;
  /** A BadgeCount node after the label (Figma boolean "Badge count"). */
  badgeCount?: ReactNode;
  /** 'expand' only: 'end' puts the button on the right, as in the learner sidebar. Default 'start'. */
  align?: 'start' | 'end';
  /** Renders the row as a link. Without it the row is a button. */
  href?: string;
  /** Disables the row's button (the 'default' row, or the button inside 'expand'). */
  disabled?: boolean;
  /** Pins a visual state for documentation. Real hover, press and keyboard focus work without it. */
  state?: 'hover' | 'press' | 'focus';
  /** The label, or for 'slot' and 'avatar' the nested component. An empty 'slot' shows the Figma placeholder. For 'expand', onClick and aria-label go to the button. */
  children?: ReactNode;
}

const SLOT_VARIANTS: NavigationSideItemVariant[] = ['slot', 'alert', 'button', 'search'];
const ITEM = 'fs-navigation-side-item';
const shown = (node: ReactNode) => node != null && node !== false;

export const NavigationSideItem = forwardRef<HTMLElement, NavigationSideItemProps>(function NavigationSideItem(
  { variant = 'default', selected, learner, icon, submenu, badge, badgeCount, align, state, className, children, ...rest },
  ref,
) {
  const divRef = ref as Ref<HTMLDivElement>;
  const rootClass = (mods: string) => cx(ITEM, mods, className);
  const dataState = state || undefined;

  if (variant === 'header') {
    return <div {...rest} ref={divRef} className={rootClass(`${ITEM}--header`)} data-state={dataState}>{children}</div>;
  }
  if (variant === 'divider' || variant === 'divider-full') {
    return (
      <div role="separator" {...rest} ref={divRef} className={rootClass(`${ITEM}--${variant}`)} data-state={dataState}>
        <span className={`${ITEM}__rule`} />
      </div>
    );
  }
  if (variant === 'avatar') {
    return <div {...rest} ref={divRef} className={rootClass(`${ITEM}--avatar`)} data-state={dataState}>{children}</div>;
  }
  if (SLOT_VARIANTS.indexOf(variant) >= 0) {
    return (
      <div {...rest} ref={divRef} className={rootClass(`${ITEM}--slot`)} data-state={dataState}>
        {shown(children) ? children : <div className={`${ITEM}__placeholder`}>Swap with another component</div>}
      </div>
    );
  }
  if (variant === 'expand') {
    // onClick, disabled, title and the button's aria attributes go to the inner button, the rest to the row.
    const { onClick, disabled, title, 'aria-label': ariaLabel, 'aria-expanded': ariaExpanded, 'aria-controls': ariaControls, ...row } = rest;
    return (
      <div {...row} ref={divRef} className={rootClass(cx(`${ITEM}--expand`, align === 'end' && `${ITEM}--end`))} data-state={dataState}>
        <button
          type="button"
          className={`${ITEM}__expand`}
          onClick={onClick}
          disabled={disabled}
          title={title}
          aria-label={ariaLabel}
          aria-expanded={ariaExpanded}
          aria-controls={ariaControls}
        >
          {icon || <ArrowLeftStartOnRectangleIcon className="fs-icon" width={16} height={16} aria-hidden />}
        </button>
      </div>
    );
  }

  const content = (
    <>
      {icon ? <span className={`${ITEM}__icon`}>{icon}</span> : null}
      {shown(children) ? <span className={`${ITEM}__label`}>{children}</span> : null}
      {submenu ? <span className={`${ITEM}__chevron`}><ChevronDownIcon className="fs-icon" width={24} height={24} aria-hidden /></span> : null}
      {shown(badge) ? <span className={`${ITEM}__badge`}>{badge}</span> : null}
      {shown(badgeCount) ? <span className={`${ITEM}__badge`}>{badgeCount}</span> : null}
    </>
  );
  const rowClass = rootClass(cx(`${ITEM}--default`, selected && `${ITEM}--selected`, learner && `${ITEM}--learner`));
  const current = selected ? 'page' : undefined;
  if (rest.href != null) {
    return (
      <a {...rest} ref={ref as Ref<HTMLAnchorElement>} className={rowClass} data-state={dataState} aria-current={current}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" {...rest} ref={ref as Ref<HTMLButtonElement>} className={rowClass} data-state={dataState} aria-current={current}>
      {content}
    </button>
  );
});

export const NavigationSide = forwardRef<HTMLDivElement, NavigationSideProps>(function NavigationSide(
  { variant = 'desktop', title, header, footer, logo, avatar, hamburger, menuLabel, closeLabel, onMenuClick, onClose, state, className, children, ...rest },
  ref,
) {
  const base = 'fs-navigation-side';
  const rootProps = { ...rest, ref, className: cx(base, `${base}--${variant}`, className), 'data-state': state || undefined };

  if (variant === 'mobile-closed') {
    return (
      <div {...rootProps}>
        {hamburger === false ? null : (
          <button type="button" className={`${base}__menu`} aria-label={menuLabel || 'Menu'} onClick={onMenuClick}>
            <Bars3Icon className="fs-icon" width={24} height={24} aria-hidden />
          </button>
        )}
        {logo ? <div className={`${base}__logo`}>{logo}</div> : null}
        {avatar ? <div className={`${base}__avatar`}>{avatar}</div> : null}
        {children}
      </div>
    );
  }

  const open = variant === 'mobile-open';
  const titleRow = shown(title) ? <div className={`${base}__title`}>{title}</div> : null;
  const top = open || header ? (
    <div className={`${base}__top`}>
      {open ? (
        <div className={`${base}__close-row`}>
          <button type="button" className={`${base}__close`} aria-label={closeLabel || 'Close'} onClick={onClose}>
            <XMarkIcon className="fs-icon" width={24} height={24} aria-hidden />
          </button>
        </div>
      ) : null}
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
});
