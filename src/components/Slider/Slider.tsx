import { forwardRef, useState, type ChangeEvent, type CSSProperties, type HTMLAttributes, type InputHTMLAttributes, type Ref } from 'react';
import { cx } from '../../utils/cx';
import './Slider.css';

export type SliderVariant = 'default' | 'range';
/** A number for 'default', a [low, high] pair for 'range'. */
export type SliderValue = number | [number, number];

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'> {
  /** Figma "Property 1". 'default' has one thumb and a number value; 'range' has two thumbs and a [low, high] value. Default 'default'. */
  variant?: SliderVariant;
  /** Controlled value; pair it with onChange. A number, or [low, high] when variant is 'range'. Leave it out and the slider keeps its own state. */
  value?: SliderValue;
  /** Starting value when uncontrolled. Default: min, or [min, max] for 'range'. */
  defaultValue?: SliderValue;
  /** Called while the thumb moves with the new value (a number, or a sorted [low, high]) and the native change event. */
  onChange?: (value: SliderValue, event: ChangeEvent<HTMLInputElement>) => void;
  /** Lowest value. Default 0. */
  min?: number;
  /** Highest value. Default 100. */
  max?: number;
  /** Distance between allowed values. Default 1 (the browser default). */
  step?: number;
  /** Form field name. With 'range' both inputs carry it, so the form submits two values. */
  name?: string;
  /** Blocks input. Figma has no disabled look, so only the cursor changes. */
  disabled?: boolean;
  /** 'range' only: accessible names for the low and the high thumb, in that order. */
  thumbLabels?: [string, string];
  /** Stretches the slider to its container. Without it the slider is 256px wide, as in Figma. */
  fullWidth?: boolean;
  /** Pins a visual state for documentation. Real keyboard focus and disabled work without it. */
  state?: 'focus' | 'disabled';
  /** Added to the root element, as is style. With 'default' every other prop (id, aria-label, onFocus…) goes to the range input; with 'range' it goes to the root group. */
  className?: string;
}

const toNumber = (v: unknown, fallback: number): number => {
  const n = Number(v);
  return v == null || v === '' || isNaN(n) ? fallback : n;
};

/**
 * One value or a low–high pair on a track. The ref points at the range input with variant 'default',
 * and at the root group with 'range' (the element that receives the other props).
 */
export const Slider = forwardRef<HTMLInputElement | HTMLDivElement, SliderProps>(function Slider(
  { variant, value: valueProp, defaultValue, onChange, min: minProp, max: maxProp, step, name, disabled: disabledProp, thumbLabels, fullWidth, state, className, style, children: _children, ...rest },
  ref,
) {
  const range = variant === 'range';
  const min = toNumber(minProp, 0);
  const max = toNumber(maxProp, 100);
  const controlled = valueProp !== undefined;
  const [own, setOwn] = useState<SliderValue>(defaultValue !== undefined ? defaultValue : range ? [min, max] : min);
  // range only: true while the first input holds the upper value (the thumbs may cross; the value stays sorted)
  const [swapped, setSwapped] = useState(false);
  const value = controlled ? valueProp : own;
  const pair: [number, number] = range
    ? [toNumber(Array.isArray(value) ? value[0] : undefined, min), toNumber(Array.isArray(value) ? value[1] : undefined, max)]
    : [min, toNumber(value, min)];
  const held: [number, number] = range && swapped ? [pair[1], pair[0]] : pair;
  const frac = (v: number) => (max > min ? Math.min(1, Math.max(0, (v - min) / (max - min))) : 0);
  const disabled = !!disabledProp || state === 'disabled';

  const change = (i: 0 | 1) => (e: ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    let next: SliderValue = v;
    if (range) {
      const now: [number, number] = [held[0], held[1]];
      now[i] = v;
      if (now[0] !== now[1]) setSwapped(now[0] > now[1]);
      next = [Math.min(now[0], now[1]), Math.max(now[0], now[1])];
    }
    if (!controlled) setOwn(next);
    if (onChange) onChange(next, e);
  };

  const input = (i: 0 | 1, extra: InputHTMLAttributes<HTMLInputElement>, inputRef?: Ref<HTMLInputElement>) => (
    <input
      key={i}
      {...extra}
      ref={inputRef}
      type="range"
      className="fs-slider__input"
      min={min}
      max={max}
      step={step}
      name={name}
      value={held[i]}
      onChange={change(i)}
      disabled={disabled || undefined}
    />
  );

  const labels = thumbLabels ?? [];
  const rootStyle = { '--fs-slider-lo': frac(pair[0]), '--fs-slider-hi': frac(pair[1]), ...style } as CSSProperties;
  const groupProps: HTMLAttributes<HTMLDivElement> | null = range ? { ...(rest as HTMLAttributes<HTMLDivElement>), role: rest.role || 'group' } : null;

  return (
    <div
      {...groupProps}
      ref={range ? (ref as Ref<HTMLDivElement>) : undefined}
      className={cx('fs-slider', range && 'fs-slider--range', fullWidth && 'fs-slider--full-width', className)}
      style={rootStyle}
      data-state={state || undefined}
    >
      <span className="fs-slider__track"><span className="fs-slider__fill" /></span>
      {range
        ? ([0, 1] as const).map((i) => input(i, { 'aria-label': labels[swapped ? 1 - i : i] }))
        : input(1, rest, ref as Ref<HTMLInputElement>)}
    </div>
  );
});
