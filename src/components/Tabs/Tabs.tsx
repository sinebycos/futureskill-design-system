import { forwardRef, useState, type ButtonHTMLAttributes, type HTMLAttributes, type KeyboardEvent, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './Tabs.css';

export type TabsVariant = 'text' | 'icons';
export type TabsItemState = 'hover' | 'press' | 'focus' | 'disabled';

export interface TabsItemData {
  /** Identifies the tab. This is the value reported by onChange. */
  id: string;
  /** The tab label. */
  label: ReactNode;
  /** Any icon node, drawn at 20px before the label. Shown only when variant is 'icons'. */
  icon?: ReactNode;
  /** Count shown in a pill after the label (Figma "Badge"). */
  badge?: ReactNode;
  /** The tab cannot be selected and is skipped by the arrow keys. */
  disabled?: boolean;
  /** id of the panel this tab controls; becomes aria-controls. */
  controls?: string;
  /** Pins a visual state on this tab for documentation. */
  state?: TabsItemState;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** The tabs, in order. Figma shows up to eight. */
  items: TabsItemData[];
  /** id of the selected tab (controlled). Pair it with onChange. */
  value?: string;
  /** id of the tab selected at first (uncontrolled). Default: the first enabled tab. */
  defaultValue?: string;
  /** Called with the id of the tab the user picked. */
  onChange?: (id: string) => void;
  /** Figma "Type". 'text' = labels only; 'icons' = icon before each label, and the row wraps. Default 'icons' when any item has an icon, otherwise 'text'. */
  variant?: TabsVariant;
}

export interface TabsItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The tab label. Children work too. */
  label?: ReactNode;
  /** Any icon node, drawn at 20px before the label (Figma "Icon"). */
  icon?: ReactNode;
  /** Count shown in a pill after the label (Figma "Badge"). */
  badge?: ReactNode;
  /** Figma "Type=Selected": brand label in SemiBold with a 2px underline. */
  selected?: boolean;
  /** Pins a visual state for documentation. Real hover, press, focus and disabled work without it. */
  state?: TabsItemState;
}

/** A single tab. Use it only when you lay tabs out yourself; Tabs renders these for you. */
export const TabsItem = forwardRef<HTMLButtonElement, TabsItemProps>(function TabsItem(
  { label, icon, badge, selected, state, className, children, ...rest },
  ref,
) {
  return (
    <button
      type="button"
      role="tab"
      {...rest}
      ref={ref}
      className={cx('fs-tabs__item', selected && 'fs-tabs__item--selected', className)}
      aria-selected={!!selected}
      data-state={state || undefined}
      disabled={rest.disabled || state === 'disabled' || undefined}
    >
      {icon || null}
      <span className="fs-tabs__label">{label != null ? label : children}</span>
      {badge != null && badge !== false ? <span className="fs-tabs__badge">{badge}</span> : null}
    </button>
  );
});

const isEnabled = (item: TabsItemData) => !item.disabled && item.state !== 'disabled';

/** A row of tabs (role="tablist"). It draws the row only; render the selected panel yourself. */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  { items: itemsProp, value: valueProp, defaultValue, onChange, variant: variantProp, className, children: _children, onKeyDown: onKeyDownProp, ...rest },
  ref,
) {
  const items = itemsProp || [];
  const first = items.filter(isEnabled)[0];
  const [own, setOwn] = useState<string | undefined>(defaultValue !== undefined ? defaultValue : first ? first.id : undefined);
  const value = valueProp !== undefined ? valueProp : own;
  const variant = variantProp || (items.some((i) => i.icon) ? 'icons' : 'text');
  // one tab stop: the selected tab, or the first enabled one when nothing selectable is selected
  const stop = items.some((i) => i.id === value && isEnabled(i)) ? value : first ? first.id : undefined;

  const select = (id: string) => {
    if (valueProp === undefined) setOwn(id);
    if (onChange && id !== value) onChange(id);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDownProp) onKeyDownProp(e);
    const step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!step && e.key !== 'Home' && e.key !== 'End') return;
    const tabs = Array.from(e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]:not(:disabled)'));
    if (!tabs.length) return;
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (tabs.indexOf(e.target as HTMLElement) + step + tabs.length) % tabs.length;
    e.preventDefault();
    tabs[next].focus();
    tabs[next].click();
  };

  return (
    <div role="tablist" {...rest} ref={ref} className={cx('fs-tabs', `fs-tabs--${variant}`, className)} onKeyDown={onKeyDown}>
      {items.map((item) => (
        <TabsItem
          key={item.id}
          id={rest.id ? `${rest.id}-${item.id}` : undefined}
          aria-controls={item.controls}
          label={item.label}
          icon={variant === 'icons' ? item.icon : null}
          badge={item.badge}
          selected={item.id === value}
          disabled={item.disabled}
          state={item.state}
          tabIndex={item.id === stop ? 0 : -1}
          onClick={() => select(item.id)}
        />
      ))}
    </div>
  );
});
