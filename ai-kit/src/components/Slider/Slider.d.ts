import * as React from 'react';

/** Picks a number or a low–high pair by dragging (legacy palette). */
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'defaultValue' | 'onChange' | 'min' | 'max' | 'step'> {
  /** 'default' one thumb; 'range' two thumbs and a [low, high] value. */
  variant?: 'default' | 'range';
  value?: number | [number, number];
  defaultValue?: number | [number, number];
  onChange?: (value: number | [number, number], event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  step?: number;
  name?: string;
  disabled?: boolean;
  thumbLabels?: [string, string];
  /** Stretch instead of 256px. */
  fullWidth?: boolean;
  state?: 'focus' | 'disabled';
}
export function Slider(props: SliderProps): JSX.Element;
