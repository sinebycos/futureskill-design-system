import React from 'react';
import { cx } from '../../utils/cx.js';

const sliderNum = (v, fb) => { const n = Number(v); return v == null || v === '' || isNaN(n) ? fb : n; };

/** Picks a number, or a low–high pair, by dragging a thumb along a track (legacy palette). */
export function Slider({ variant, value: valueProp, defaultValue, onChange, min: minProp, max: maxProp, step, name, disabled: disabledProp, thumbLabels, fullWidth, state, className, style, children: _c, ...rest }) {
  const range = variant === 'range';
  const min = sliderNum(minProp, 0);
  const max = sliderNum(maxProp, 100);
  const controlled = valueProp !== undefined;
  const [own, setOwn] = React.useState(defaultValue !== undefined ? defaultValue : range ? [min, max] : min);
  const [swapped, setSwapped] = React.useState(false);
  const value = controlled ? valueProp : own;
  const pair = range ? [sliderNum(Array.isArray(value) ? value[0] : undefined, min), sliderNum(Array.isArray(value) ? value[1] : undefined, max)] : [min, sliderNum(value, min)];
  const held = range && swapped ? [pair[1], pair[0]] : pair;
  const frac = (v) => (max > min ? Math.min(1, Math.max(0, (v - min) / (max - min))) : 0);
  const disabled = !!disabledProp || state === 'disabled';
  const change = (i) => (e) => {
    const v = Number(e.target.value);
    let next = v;
    if (range) {
      const now = [held[0], held[1]]; now[i] = v;
      if (now[0] !== now[1]) setSwapped(now[0] > now[1]);
      next = [Math.min(now[0], now[1]), Math.max(now[0], now[1])];
    }
    if (!controlled) setOwn(next);
    if (onChange) onChange(next, e);
  };
  const input = (i, extra) => <input key={i} {...extra} type="range" className="fs-slider__input" min={min} max={max} step={step} name={name} value={held[i]} onChange={change(i)} disabled={disabled || undefined} />;
  const labels = thumbLabels ?? [];
  const rootStyle = { '--fs-slider-lo': frac(pair[0]), '--fs-slider-hi': frac(pair[1]), ...style };
  const groupProps = range ? { ...rest, role: rest.role || 'group' } : null;
  return (
    <div {...groupProps} className={cx('fs-slider', range && 'fs-slider--range', fullWidth && 'fs-slider--full-width', className)} style={rootStyle} data-state={state || undefined}>
      <span className="fs-slider__track"><span className="fs-slider__fill" /></span>
      {range ? [0, 1].map((i) => input(i, { 'aria-label': labels[swapped ? 1 - i : i] })) : input(1, rest)}
    </div>
  );
}
