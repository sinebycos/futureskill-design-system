import { forwardRef, useCallback, useState, type ChangeEvent, type Ref, type TextareaHTMLAttributes } from 'react';
import { cx } from '../../utils/cx';
import './Textarea.css';

export type TextareaSize = 'large' | 'medium' | 'small';
export type TextareaState = 'hovered' | 'focused' | 'disabled';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Default 'medium' (14/22 text, 5/12 padding). 'large' 16/24 text, 8/16 padding. 'small' 14/22 text, 1/8 padding. */
  size?: TextareaSize;
  /** Shows the character count under the box, as "97 / 100" when `maxLength` is set (Figma "Show Count"). */
  showCount?: boolean;
  /** Stretch to the container width instead of the 395px drawn in Figma. */
  fullWidth?: boolean;
  /** Pins a visual state for documentation. Real hover, focus and `disabled` work without it. */
  state?: TextareaState;
  /** Ref to the native textarea element. Same target as `ref`. */
  inputRef?: Ref<HTMLTextAreaElement>;
  /** Class and style go on the outer wrapper; every other attribute goes on the textarea. */
  className?: string;
}

function assignRef<T>(ref: Ref<T> | undefined, node: T | null) {
  if (typeof ref === 'function') ref(node);
  else if (ref) (ref as { current: T | null }).current = node;
}

function textLength(v: unknown): number {
  return v == null ? 0 : String(v).length;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { size = 'medium', showCount, fullWidth, state, inputRef, className, style, children: _children, onChange, ...rest },
  ref,
) {
  const disabled = !!rest.disabled || state === 'disabled';
  const [own, setOwn] = useState(() => textLength(rest.defaultValue));
  const count = rest.value !== undefined ? textLength(rest.value) : own;
  const change = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOwn(e.target.value.length);
    onChange?.(e);
  };
  const setRef = useCallback(
    (el: HTMLTextAreaElement | null) => {
      assignRef(ref, el);
      assignRef(inputRef, el);
    },
    [ref, inputRef],
  );

  return (
    <div
      className={cx('fs-textarea', `fs-textarea--${size}`, disabled && 'fs-textarea--disabled', fullWidth && 'fs-textarea--full-width', className)}
      style={style}
      data-state={state || undefined}
    >
      <textarea rows={2} {...rest} ref={setRef} className="fs-textarea__control" disabled={disabled || undefined} onChange={change} />
      {showCount ? (
        <span className="fs-textarea__count">{rest.maxLength != null ? `${count} / ${rest.maxLength}` : count}</span>
      ) : null}
    </div>
  );
});
