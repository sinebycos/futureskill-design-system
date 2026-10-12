import {
  forwardRef,
  useCallback,
  useId,
  type CSSProperties,
  type InputHTMLAttributes,
  type MouseEvent,
  type MutableRefObject,
  type ReactNode,
  type Ref,
} from 'react';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { cx } from '../../utils/cx';
import './TextInput.css';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Text of the <label> above the field. Leave it out only when you pass an aria-label. */
  label?: ReactNode;
  /** Helper line under the label, above the field. 14px, text-weak. */
  hint?: ReactNode;
  /** Shows the "*" mark after the label and sets the input's required attribute. */
  required?: boolean;
  /** Shows "(optional)" after the label. Pass a string to use your own wording. */
  optional?: boolean | string;
  /** Figma "Valid=False": red 2px border and fill-error-weak ground. Implied when `error` is set. Ignored while disabled. */
  invalid?: boolean;
  /** Error message, shown with an icon between the label and the field. Setting it also turns on the invalid styling. */
  error?: ReactNode;
  /** 16px icon at the end of the field: any icon node, sized automatically, e.g. `<EyeSlashIcon />` from `@heroicons/react/16/solid`. */
  icon?: ReactNode;
  /** Stretch to the container's width instead of the 364px drawn in Figma. */
  fullWidth?: boolean;
  /** Pins a visual state for documentation. Real hover, press, focus and disabled work without it. */
  state?: 'hover' | 'press' | 'focus' | 'disabled';
  /** Ref to the <input> element. Same as the forwarded `ref`; kept for compatibility. */
  inputRef?: Ref<HTMLInputElement>;
  /** Goes on the root wrapper, not on the <input>. */
  className?: string;
  /** Goes on the root wrapper, not on the <input>. */
  style?: CSSProperties;
}

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') ref(value);
  else if (ref) (ref as MutableRefObject<T | null>).current = value;
}

/** A click anywhere on the field that is not on a control focuses the input. */
function focusInput(e: MouseEvent<HTMLDivElement>) {
  if ((e.target as Element).closest('input, button, a')) return;
  const input = e.currentTarget.querySelector('input');
  if (input && !input.disabled) input.focus();
}

/** The ref goes to the native `<input>`, as do all props not listed in TextInputProps. */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
  { label, hint, required, optional, invalid: invalidProp, error, icon, fullWidth, state, className, style, inputRef, children: _children, ...rest },
  ref,
) {
  const auto = useId();
  const id = rest.id || 'fs-text-input-' + auto;
  const disabled = !!rest.disabled || state === 'disabled';
  const invalid = !disabled && (!!invalidProp || !!error);
  const hintId = hint ? id + '-hint' : null;
  const errorId = invalid && error ? id + '-error' : null;
  const iconNode = icon || null;
  const setRef = useCallback((node: HTMLInputElement | null) => {
    assignRef(ref, node);
    assignRef(inputRef, node);
  }, [ref, inputRef]);

  return (
    <div
      className={cx('fs-text-input', invalid && 'fs-text-input--invalid', disabled && 'fs-text-input--disabled', iconNode && 'fs-text-input--has-icon', fullWidth && 'fs-text-input--full-width', className)}
      style={style}
      data-state={state}
    >
      {label || hint ? (
        <div className="fs-text-input__text">
          {label ? (
            <label className="fs-text-input__label" htmlFor={id}>
              <span className="fs-text-input__label-text">{label}</span>
              {required ? <span className="fs-text-input__required" aria-hidden>*</span> : null}
              {optional ? <span className="fs-text-input__optional">{optional === true ? '(optional)' : optional}</span> : null}
            </label>
          ) : null}
          {hint ? <span className="fs-text-input__hint" id={hintId ?? undefined}>{hint}</span> : null}
        </div>
      ) : null}
      {errorId ? (
        <div className="fs-text-input__error" id={errorId}>
          <XCircleIcon className="fs-icon" width={24} height={24} strokeWidth={2} aria-hidden />
          <span className="fs-text-input__error-text">{error}</span>
        </div>
      ) : null}
      <div className="fs-text-input__field" onClick={focusInput}>
        <input
          type="text"
          {...rest}
          id={id}
          ref={setRef}
          className="fs-text-input__input"
          disabled={disabled || undefined}
          required={required || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={cx(rest['aria-describedby'], hintId, errorId) || undefined}
        />
        {iconNode ? <span className="fs-text-input__icon">{iconNode}</span> : null}
      </div>
    </div>
  );
});
