import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type CSSProperties,
  type HTMLAttributes,
  type InputHTMLAttributes,
  type MutableRefObject,
  type ReactNode,
} from 'react';
import { cx } from '../../utils/cx';
import './Checkbox.css';

/** The Figma check vector, drawn in a 16px box. */
const CHECKBOX_MARK = 'M4.42 7.6L4.4 7.62L0 3.22L1.43 1.79L4.42 4.77L9.19 0L10.62 1.43L4.44 7.62Z';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Controlled value; pair it with onChange. Leave it out and the checkbox keeps its own state. */
  checked?: boolean;
  /** Starting value when uncontrolled. */
  defaultChecked?: boolean;
  /** Shows the 8px square instead of the check: some, but not all, of the items it stands for are selected. Wins over checked. */
  indeterminate?: boolean;
  /** Greys the box and the label and blocks input. */
  disabled?: boolean;
  /** The native change handler; read event.target.checked. */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** The label, to the right of the box. Leave it out for a bare 16px box (Figma "Label=false") and pass aria-label. */
  children?: ReactNode;
  /** Pins a visual state for documentation. Real hover and disabled work without it. */
  state?: 'hover' | 'disabled';
  /** Added to the root label element. Every other prop (name, value, id, aria-*) goes to the input. */
  className?: string;
  /** Added to the root label element. */
  style?: CSSProperties;
}

/** The ref goes to the native `<input type="checkbox">`. */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { indeterminate: indeterminateProp, state, className, style, children, disabled: disabledProp, ...rest },
  ref,
) {
  const inner = useRef<HTMLInputElement | null>(null);
  const indeterminate = !!indeterminateProp;
  const disabled = !!disabledProp || state === 'disabled';
  const labelled = children != null && children !== false;
  useEffect(() => { if (inner.current) inner.current.indeterminate = indeterminate; });
  const setRef = useCallback((node: HTMLInputElement | null) => {
    inner.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) (ref as MutableRefObject<HTMLInputElement | null>).current = node;
  }, [ref]);

  return (
    <label className={cx('fs-checkbox', labelled && 'fs-checkbox--labelled', disabled && 'fs-checkbox--disabled', className)} style={style} data-state={state}>
      <span className="fs-checkbox__box">
        <input {...rest} ref={setRef} type="checkbox" className="fs-checkbox__input" disabled={disabled || undefined} />
        <svg className="fs-checkbox__mark" viewBox="0 0 16 16" width={16} height={16} aria-hidden>
          <path d={CHECKBOX_MARK} transform="translate(2.69 5)" fill="currentColor" />
        </svg>
      </span>
      {labelled ? <span className="fs-checkbox__label">{children}</span> : null}
    </label>
  );
});

export type CheckboxGroupLayout = 'vertical' | 'horizontal';

export interface CheckboxGroupOption {
  /** Identifies the option in the group's value array, and is the input's value attribute. */
  value: string;
  /** Shown next to the box. */
  label: ReactNode;
  /** Disables this option only. */
  disabled?: boolean;
}

export interface CheckboxGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** Figma "Layout". 'vertical' (default) stacks the options 8px apart; 'horizontal' puts them in a row 16px apart. */
  layout?: CheckboxGroupLayout;
  /** The options, in order. A plain string is used as both value and label. Figma "Items" is the length of this array. */
  options: Array<string | CheckboxGroupOption>;
  /** Controlled list of checked values; pair it with onChange. */
  value?: string[];
  /** Starting list of checked values when uncontrolled. */
  defaultValue?: string[];
  /** Called with the new list of checked values, then the change event. */
  onChange?: (value: string[], event: ChangeEvent<HTMLInputElement>) => void;
  /** The name attribute given to every input in the group. */
  name?: string;
  /** Disables every option. */
  disabled?: boolean;
}

/** A role="group" list of Checkboxes. The ref goes to the root `<div>`. */
export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(function CheckboxGroup(
  { layout = 'vertical', options, value: valueProp, defaultValue, onChange, name, disabled, className, children: _children, ...rest },
  ref,
) {
  const controlled = valueProp !== undefined;
  const [own, setOwn] = useState<string[]>(defaultValue || []);
  const value = controlled ? valueProp : own;
  const toggle = (v: string, e: ChangeEvent<HTMLInputElement>) => {
    const next = value.indexOf(v) < 0 ? value.concat([v]) : value.filter((x) => x !== v);
    if (!controlled) setOwn(next);
    if (onChange) onChange(next, e);
  };

  return (
    <div role="group" {...rest} ref={ref} className={cx('fs-checkbox-group', `fs-checkbox-group--${layout}`, className)}>
      {(options || []).map((o) => {
        const opt: CheckboxGroupOption = typeof o === 'string' ? { value: o, label: o } : o;
        return (
          <Checkbox
            key={opt.value}
            name={name}
            value={opt.value}
            checked={value.indexOf(opt.value) >= 0}
            disabled={disabled || opt.disabled}
            onChange={(e) => toggle(opt.value, e)}
          >
            {opt.label}
          </Checkbox>
        );
      })}
    </div>
  );
});
