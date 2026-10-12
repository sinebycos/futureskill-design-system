import {
  forwardRef,
  useCallback,
  useRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type Ref,
  type SyntheticEvent,
} from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/16/solid';
import { cx } from '../../utils/cx';
import './SearchBox.css';

export type SearchBoxSize = 'large' | 'medium' | 'small';
export type SearchBoxEnter = 'default' | 'icon' | 'text';
export type SearchBoxState = 'focused' | 'disabled';

export interface SearchBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue'> {
  /** Default 'medium' (32px). 'large' 40px, 'small' 24px. */
  size?: SearchBoxSize;
  /** The control at the right end. 'default' = grey magnifier cell, 'icon' = purple button with a magnifier, 'text' = purple button with a label. */
  enter?: SearchBoxEnter;
  /** Label of the `enter="text"` button. Default "Search". */
  enterText?: ReactNode;
  /** Icon node before the label of the `enter="text"` button, sized to 14px automatically (the design uses stroke 2). Empty by default. */
  enterIcon?: ReactNode;
  /** Accessible name of the icon-only enter control. Default "Search". */
  enterLabel?: string;
  /** Text or a node at the end of the field, after the clear button (Figma "Suffix"). */
  suffix?: ReactNode;
  /** An icon node shown in place of `suffix`, coloured `primary-purple-500` by the slot sized to 16px automatically (the design uses stroke 2). */
  suffixIcon?: ReactNode;
  /** Shows a clear button while the field has a value (Figma "Allow Clear"). */
  allowClear?: boolean;
  /** Accessible name of the clear button. Default "Clear". */
  clearLabel?: string;
  /** Controlled value. Use with `onChange`. */
  value?: string;
  /** Initial value when uncontrolled. */
  defaultValue?: string;
  /** Called with the current text when the user presses Enter or the enter control. */
  onSearch?: (value: string, event: SyntheticEvent) => void;
  /** Called after the clear button empties the field (`onChange` fires first). */
  onClear?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Stretch to the container width instead of the 264px drawn in Figma. */
  fullWidth?: boolean;
  /** Pins a visual state for documentation. Neither state is drawn in Figma; see the README. */
  state?: SearchBoxState;
  /** The native `size` attribute of the input (the `size` prop is the visual size). */
  htmlSize?: number;
  /** Ref to the native input element. Same target as `ref`. */
  inputRef?: Ref<HTMLInputElement>;
  /** Class and style go on the outer wrapper; every other attribute goes on the input. */
  className?: string;
}

/** Magnifier size of the default enter cell, per size. */
export const SEARCH_BOX_GLYPH: Record<SearchBoxSize, number> = { large: 16, medium: 14, small: 12 };

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

export const SearchBox = forwardRef<HTMLInputElement, SearchBoxProps>(function SearchBox(
  {
    size = 'medium',
    enter = 'default',
    enterText,
    enterIcon,
    enterLabel,
    suffix: suffixProp,
    suffixIcon,
    allowClear,
    clearLabel,
    onSearch,
    onClear,
    fullWidth,
    state,
    htmlSize,
    inputRef,
    className,
    style,
    children: _children,
    value: valueProp,
    defaultValue,
    onChange,
    onKeyDown,
    ...rest
  },
  ref,
) {
  const disabled = !!rest.disabled || state === 'disabled';
  const controlled = valueProp !== undefined;
  const [own, setOwn] = useState(defaultValue == null ? '' : String(defaultValue));
  const value = controlled ? valueProp : own;
  const node = useRef<HTMLInputElement | null>(null);
  const setRef = useCallback(
    (el: HTMLInputElement | null) => {
      node.current = el;
      assignRef(ref, el);
      assignRef(inputRef, el);
    },
    [ref, inputRef],
  );

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    if (!controlled) setOwn(e.target.value);
    onChange?.(e);
  };
  const search = (e: SyntheticEvent) => {
    if (onSearch && node.current) onSearch(node.current.value, e);
  };
  const keyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e);
    if (e.key === 'Enter' && !e.defaultPrevented) search(e);
  };
  const clear = (e: MouseEvent<HTMLButtonElement>) => {
    const input = node.current;
    if (!input) return;
    // Set the value the way the browser does, so React's onChange fires for controlled fields too.
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set?.call(input, '');
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.focus();
    onClear?.(e);
  };

  const clearable = !!allowClear && !disabled && String(value).length > 0;
  const suffix = suffixIcon ? suffixIcon : suffixProp;

  return (
    <div
      className={cx('fs-search-box', `fs-search-box--${size}`, `fs-search-box--enter-${enter}`, disabled && 'fs-search-box--disabled', fullWidth && 'fs-search-box--full-width', className)}
      style={style}
      data-state={state || undefined}
    >
      <div className="fs-search-box__field" onClick={focusInput}>
        <input
          type="search"
          {...rest}
          ref={setRef}
          className="fs-search-box__control"
          size={htmlSize}
          value={value}
          onChange={change}
          onKeyDown={keyDown}
          disabled={disabled || undefined}
        />
        {clearable || suffix != null ? (
          <span className="fs-search-box__suffix">
            {clearable ? (
              <button type="button" className="fs-search-box__clear" aria-label={clearLabel || 'Clear'} onClick={clear}>
                <XCircleIcon className="fs-icon" width={12} height={12} aria-hidden />
              </button>
            ) : null}
            {suffix}
          </span>
        ) : null}
      </div>
      <button
        type="button"
        className="fs-search-box__enter"
        aria-label={enter === 'text' ? undefined : enterLabel || 'Search'}
        disabled={disabled || undefined}
        onClick={search}
      >
        {enter === 'text' ? (enterIcon || null) : (
          <MagnifyingGlassIcon className="fs-icon" width={enter === 'icon' ? 14 : SEARCH_BOX_GLYPH[size] || 14} height={enter === 'icon' ? 14 : SEARCH_BOX_GLYPH[size] || 14} strokeWidth={2} aria-hidden />
        )}
        {enter === 'text' ? <span className="fs-search-box__enter-text">{enterText || 'Search'}</span> : null}
      </button>
    </div>
  );
});
