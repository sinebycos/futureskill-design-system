import { forwardRef, useCallback, useState, type InputHTMLAttributes, type MouseEvent, type Ref } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { cx } from '../../utils/cx';
import './PasswordInput.css';

export type PasswordInputSize = 'large' | 'medium' | 'small';
export type PasswordInputState = 'focused' | 'disabled';

export interface PasswordInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Default 'medium' (32px). 'large' 40px, 'small' 24px. */
  size?: PasswordInputSize;
  /** Controlled: true shows the password as plain text (Figma "Visible"). Use with `onVisibleChange`. */
  visible?: boolean;
  /** Initial visibility when uncontrolled. Default false. */
  defaultVisible?: boolean;
  /** Called with the next visibility when the eye is pressed. */
  onVisibleChange?: (visible: boolean) => void;
  /** Accessible name of the eye while the password is hidden. Default "Show password". */
  showLabel?: string;
  /** Accessible name of the eye while the password is shown. Default "Hide password". */
  hideLabel?: string;
  /** Stretch to the container width instead of the 264px drawn in Figma. */
  fullWidth?: boolean;
  /** Pins a visual state for documentation. Real focus and `disabled` work without it. */
  state?: PasswordInputState;
  /** The native `size` attribute of the input (the `size` prop is the visual size). */
  htmlSize?: number;
  /** Ref to the native input element. Same target as `ref`. */
  inputRef?: Ref<HTMLInputElement>;
  /** Class and style go on the outer wrapper; every other attribute goes on the input. */
  className?: string;
}

function assignRef<T>(ref: Ref<T> | undefined, node: T | null) {
  if (typeof ref === 'function') ref(node);
  else if (ref) (ref as { current: T | null }).current = node;
}

/** Clicking the padding of the field focuses the input. */
function focusInput(e: MouseEvent<HTMLDivElement>) {
  if ((e.target as Element).closest('input, button, a')) return;
  const input = e.currentTarget.querySelector('input');
  if (input && !input.disabled) input.focus();
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(function PasswordInput(
  {
    size = 'medium',
    visible: visibleProp,
    defaultVisible,
    onVisibleChange,
    showLabel,
    hideLabel,
    fullWidth,
    state,
    htmlSize,
    inputRef,
    className,
    style,
    children: _children,
    ...rest
  },
  ref,
) {
  const disabled = !!rest.disabled || state === 'disabled';
  const controlled = visibleProp !== undefined;
  const [own, setOwn] = useState(!!defaultVisible);
  const visible = controlled ? !!visibleProp : own;
  const toggle = () => {
    if (!controlled) setOwn(!visible);
    onVisibleChange?.(!visible);
  };
  const setRef = useCallback(
    (el: HTMLInputElement | null) => {
      assignRef(ref, el);
      assignRef(inputRef, el);
    },
    [ref, inputRef],
  );
  const Eye = visible ? EyeIcon : EyeSlashIcon;
  const eyePx = size === 'large' ? 16 : 14;

  return (
    <div
      className={cx('fs-password-input', `fs-password-input--${size}`, visible && 'fs-password-input--visible', disabled && 'fs-password-input--disabled', fullWidth && 'fs-password-input--full-width', className)}
      style={style}
      data-state={state || undefined}
      onClick={focusInput}
    >
      <input
        {...rest}
        type={visible ? 'text' : 'password'}
        ref={setRef}
        className="fs-password-input__control"
        size={htmlSize}
        disabled={disabled || undefined}
      />
      <button
        type="button"
        className="fs-password-input__toggle"
        aria-pressed={visible}
        disabled={disabled || undefined}
        onClick={toggle}
        aria-label={visible ? hideLabel || 'Hide password' : showLabel || 'Show password'}
      >
        <Eye className="fs-icon" width={eyePx} height={eyePx} strokeWidth={2} aria-hidden />
      </button>
    </div>
  );
});
