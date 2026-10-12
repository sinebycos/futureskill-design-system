import { forwardRef, useState, type HTMLAttributes, type KeyboardEvent, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './SegmentedControl.css';

export type SegmentedControlSize = 'default' | 'small';

export interface SegmentedControlOption {
  /** What onChange reports and what `value` / `defaultValue` match against. Must be unique within the control. */
  value: string | number;
  /** The tab text. With `iconOnly` it is not drawn and becomes the tab's aria-label. */
  label: ReactNode;
  /** Any icon node, drawn at 24px. Drawn only when the control is `iconOnly`. */
  icon?: ReactNode;
  /** A count shown after the label ("20"). Tabs with a counter use Figma's untokenised colours and do not follow the theme. */
  counter?: ReactNode;
}

export interface SegmentedControlProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** The tabs, in order. Figma defines 2 to 7. A plain string or number is shorthand for `{ value, label }`. */
  options: Array<SegmentedControlOption | string | number>;
  /** The selected option's value (controlled). Pair with onChange. */
  value?: string | number;
  /** The option selected at first when uncontrolled. Defaults to the first option. */
  defaultValue?: string | number;
  /** Called with the new value and its option when the user picks a different tab. */
  onChange?: (value: string | number, option: SegmentedControlOption) => void;
  /** Default 'default' (48px, 16px label). 'small' is 38px with a 14px label. Has no effect with `iconOnly`. */
  size?: SegmentedControlSize;
  /** Figma "Icon=True": a 32px control whose tabs show only each option's icon, on the legacy iOS colours. */
  iconOnly?: boolean;
  /** Pins the focus ring on the active tab for documentation. Real keyboard focus works without it. */
  state?: 'focus';
}

const toOption = (o: SegmentedControlOption | string | number): SegmentedControlOption =>
  o !== null && typeof o === 'object' ? o : { value: o, label: String(o) };

export const SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(function SegmentedControl(
  { options: optionsProp, value: valueProp, defaultValue, onChange, size, iconOnly: iconOnlyProp, state, className, children: _children, ...rest },
  ref,
) {
  const options = (optionsProp || []).map(toOption);
  const controlled = valueProp !== undefined;
  const [own, setOwn] = useState<string | number | undefined>(defaultValue !== undefined ? defaultValue : options[0] ? options[0].value : undefined);
  const value = controlled ? valueProp : own;
  const iconOnly = !!iconOnlyProp;
  // one tab stop: the active tab, or the first one when nothing matches
  const stop = options.some((o) => o.value === value) ? value : options[0] ? options[0].value : undefined;

  const select = (o: SegmentedControlOption) => {
    if (o.value === value) return;
    if (!controlled) setOwn(o.value);
    if (onChange) onChange(o.value, o);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const n = options.length;
    const k = e.key;
    const j = k === 'ArrowRight' || k === 'ArrowDown' ? (i + 1) % n : k === 'ArrowLeft' || k === 'ArrowUp' ? (i + n - 1) % n : k === 'Home' ? 0 : k === 'End' ? n - 1 : -1;
    if (j < 0) return;
    e.preventDefault();
    select(options[j]);
    (e.currentTarget.parentNode?.children[j] as HTMLElement | undefined)?.focus();
  };

  return (
    <div
      role="radiogroup"
      {...rest}
      ref={ref}
      className={cx('fs-segmented-control', `fs-segmented-control--${size || 'default'}`, iconOnly && 'fs-segmented-control--icon-only', className)}
      data-state={state || undefined}
    >
      {options.map((o, i) => {
        const active = o.value === value;
        const counter = !iconOnly && o.counter !== undefined && o.counter !== null && o.counter !== false;
        return (
          <button
            key={String(o.value)}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={o.value === stop ? 0 : -1}
            aria-label={iconOnly && typeof o.label === 'string' ? o.label : undefined}
            className={cx('fs-segmented-control__tab', active && 'fs-segmented-control__tab--active', counter && 'fs-segmented-control__tab--counter')}
            onClick={() => select(o)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {iconOnly ? o.icon || null : <span className="fs-segmented-control__label">{o.label}</span>}
            {counter ? <span className="fs-segmented-control__counter">{o.counter}</span> : null}
          </button>
        );
      })}
    </div>
  );
});
