import {
  cloneElement,
  forwardRef,
  isValidElement,
  useCallback,
  type CSSProperties,
  type InputHTMLAttributes,
  type MouseEvent,
  type MutableRefObject,
  type ReactNode,
  type Ref,
  type SVGProps,
} from 'react';
import { cx } from '../../utils/cx';
import './Input.css';

export type InputSize = 'large' | 'medium' | 'small';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** Default 'medium' (32px). 'large' 40px, 'small' 24px. */
  size?: InputSize;
  /** Text or a node inside the field, before the value (Figma "Prefix"). */
  prefix?: ReactNode;
  /** An icon drawn at 14px (stroke 2) in place of `prefix`, e.g. `<Cog6ToothIcon />` from `@heroicons/react/24/outline`. */
  prefixIcon?: ReactNode;
  /** Text or a node inside the field, after the value (Figma "Suffix"), e.g. ".com". */
  suffix?: ReactNode;
  /** An icon drawn at 14px (stroke 2) in place of `suffix`. */
  suffixIcon?: ReactNode;
  /** Grey cell joined to the left of the field (Figma "Addon Before"), e.g. "http://". */
  addonBefore?: ReactNode;
  /** An icon drawn at 14px (stroke 2) in place of `addonBefore`. */
  addonBeforeIcon?: ReactNode;
  /** Grey cell joined to the right of the field (Figma "Addon After"). */
  addonAfter?: ReactNode;
  /** An icon drawn at 14px (stroke 2) in place of `addonAfter`. */
  addonAfterIcon?: ReactNode;
  /** Stretch to the container width instead of the 222px drawn in Figma. */
  fullWidth?: boolean;
  /** Pins a visual state for documentation. Real focus and `disabled` work without it. */
  state?: 'focused' | 'disabled';
  /** The native `size` attribute of the input (the `size` prop is the visual size). */
  htmlSize?: number;
  /** Ref to the native input element. Same as the forwarded `ref`; kept for compatibility. */
  inputRef?: Ref<HTMLInputElement>;
  /** Class and style go on the outer wrapper; every other attribute goes on the input. */
  className?: string;
  /** Goes on the outer wrapper, not on the input. */
  style?: CSSProperties;
}

function assignRef<T>(ref: Ref<T> | undefined, value: T | null) {
  if (typeof ref === 'function') ref(value);
  else if (ref) (ref as MutableRefObject<T | null>).current = value;
}

/** Draws an icon element at the affix size: 14px, stroke 2, class fs-icon. Props the caller set win. */
function inputIcon(icon: ReactNode): ReactNode {
  if (!isValidElement<SVGProps<SVGSVGElement>>(icon)) return icon || null;
  const p = icon.props;
  return cloneElement(icon, {
    className: cx('fs-icon', p.className),
    width: p.width ?? 14,
    height: p.height ?? 14,
    strokeWidth: p.strokeWidth ?? 2,
    'aria-hidden': p['aria-hidden'] ?? true,
  });
}

/** A click on the field that is not on a control focuses the input. */
function focusInput(e: MouseEvent<HTMLDivElement>) {
  if ((e.target as Element).closest('input, button, a')) return;
  const input = e.currentTarget.querySelector('input');
  if (input && !input.disabled) input.focus();
}

function slot(kind: string, content: ReactNode, icon: ReactNode) {
  if (content == null && !icon) return null;
  return <span className={kind}>{icon ? inputIcon(icon) : content}</span>;
}

/** The ref goes to the native `<input>`, as do all props not listed in InputProps. */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    size = 'medium', htmlSize, prefix, prefixIcon, suffix, suffixIcon, addonBefore, addonBeforeIcon, addonAfter, addonAfterIcon,
    fullWidth, state, className, style, inputRef, children: _children, ...rest
  },
  ref,
) {
  const disabled = !!rest.disabled || state === 'disabled';
  const before = slot('fs-input__addon fs-input__addon--before', addonBefore, addonBeforeIcon);
  const after = slot('fs-input__addon fs-input__addon--after', addonAfter, addonAfterIcon);
  const setRef = useCallback((node: HTMLInputElement | null) => {
    assignRef(ref, node);
    assignRef(inputRef, node);
  }, [ref, inputRef]);
  return (
    <div
      className={cx('fs-input', `fs-input--${size}`, disabled && 'fs-input--disabled', before && 'fs-input--addon-before', after && 'fs-input--addon-after', fullWidth && 'fs-input--full-width', className)}
      style={style}
      data-state={state}
    >
      {before}
      <div className="fs-input__field" onClick={focusInput}>
        {slot('fs-input__affix', prefix, prefixIcon)}
        <input type="text" {...rest} ref={setRef} className="fs-input__control" size={htmlSize} disabled={disabled || undefined} />
        {slot('fs-input__affix', suffix, suffixIcon)}
      </div>
      {after}
    </div>
  );
});
