import { forwardRef, type ChangeEventHandler, type CSSProperties, type InputHTMLAttributes, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import './Toggle.css';

/** The Figma "Loading" quarter arc, drawn in a 36px box. */
const TOGGLE_SPINNER = 'M17.999 19.265C17.3 19.265 16.734 18.699 16.734 18C16.734 15.911 16.326 13.886 15.517 11.977C14.74 10.139 13.614 8.469 12.202 7.059C10.793 5.645 9.123 4.519 7.284 3.744C5.378 2.939 3.353 2.531 1.265 2.531C0.566 2.531 0 1.965 0 1.265C0 0.566 0.566 0 1.265 0C3.694 0 6.053 0.474 8.272 1.416C10.416 2.32 12.339 3.621 13.992 5.273C15.644 6.925 16.941 8.852 17.848 10.993C18.787 13.211 19.262 15.57 19.262 18C19.265 18.699 18.699 19.265 17.999 19.265Z';

export type ToggleSize = 'small' | 'medium';

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Controlled value (Figma "Checked"); pair it with onChange. Leave it out and the switch keeps its own state. */
  checked?: boolean;
  /** Starting value when uncontrolled. */
  defaultChecked?: boolean;
  /** The native change handler; read event.target.checked. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Default 'medium' (44x22px track, 18px nob). 'small' is 28x16px with a 12px nob. */
  size?: ToggleSize;
  /** Figma "Text": short text inside the track while checked, left of the nob. Figma copy: "ON". */
  checkedText?: ReactNode;
  /** Figma "Text": short text inside the track while unchecked, right of the nob. Figma copy: "OFF". */
  uncheckedText?: ReactNode;
  /** Figma "Icon": a 12px icon inside the track while checked, as any icon node sized automatically (e.g. `<CheckIcon />` from `@heroicons/react/16/solid`). Wins over checkedText. */
  checkedIcon?: ReactNode;
  /** Figma "Icon": a 12px icon inside the track while unchecked, as any icon node. Wins over uncheckedText. */
  uncheckedIcon?: ReactNode;
  /** Shows the arc in the nob, drops the switch to 40% and blocks input until it is false again. */
  loading?: boolean;
  /** Drops the switch to 40% and blocks input. */
  disabled?: boolean;
  /** Pins a visual state for documentation: 'press' is Figma "Animation=pressing", 'focus' is "Animation=focusing". Real press, keyboard focus and disabled work without it. */
  state?: 'press' | 'focus' | 'disabled';
  /** Added to the root span, as is style. Every other prop (name, value, id, aria-*) goes to the input. */
  className?: string;
  /** Added to the root span. */
  style?: CSSProperties;
}

function has(v: ReactNode): boolean {
  return v != null && v !== false && v !== '';
}

function Inner({ side, text, icon }: { side: 'on' | 'off'; text: ReactNode; icon: ReactNode }) {
  const isIcon = has(icon);
  const content = isIcon ? icon : has(text) ? text : null;
  return (
    <span className={cx('fs-toggle__inner', `fs-toggle__inner--${side}`, content == null ? 'fs-toggle__inner--empty' : isIcon ? 'fs-toggle__inner--icon' : 'fs-toggle__inner--text')}>
      {content}
    </span>
  );
}

/** A switch: a native `<input type="checkbox" role="switch">` over a drawn track. The ref goes to the input. */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { size: sizeProp, loading: loadingProp, disabled: disabledProp, checkedText, uncheckedText, checkedIcon, uncheckedIcon, state, className, style, children: _children, ...rest },
  ref,
) {
  const size: ToggleSize = sizeProp === 'small' ? 'small' : 'medium';
  const loading = !!loadingProp;
  const disabled = !!disabledProp || loading || state === 'disabled';
  const hasOn = has(checkedText) || has(checkedIcon);
  const hasOff = has(uncheckedText) || has(uncheckedIcon);

  return (
    <span
      className={cx('fs-toggle', `fs-toggle--${size}`, hasOn && 'fs-toggle--has-on', hasOff && 'fs-toggle--has-off', loading && 'fs-toggle--loading', disabled && 'fs-toggle--disabled', className)}
      style={style}
      data-state={state}
    >
      <input {...rest} ref={ref} type="checkbox" role="switch" className="fs-toggle__input" disabled={disabled || undefined} aria-busy={loading || undefined} />
      <span className="fs-toggle__track" aria-hidden>
        <Inner side="on" text={checkedText} icon={checkedIcon} />
        <Inner side="off" text={uncheckedText} icon={uncheckedIcon} />
        <span className="fs-toggle__nob">
          {loading ? (
            <svg className="fs-toggle__spinner" viewBox="0 0 36 36">
              <path d={TOGGLE_SPINNER} transform="translate(16.73 0)" fill="currentColor" />
            </svg>
          ) : null}
        </span>
      </span>
    </span>
  );
});
