import * as React from 'react';

/** Legacy single-line field with prefix, suffix and addon cells. Prefer TextInput in new work. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /** 'large' 40, 'medium' 32, 'small' 24. */
  size?: 'large' | 'medium' | 'small';
  prefix?: React.ReactNode;
  prefixIcon?: React.ReactNode;
  suffix?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonBeforeIcon?: React.ReactNode;
  addonAfter?: React.ReactNode;
  addonAfterIcon?: React.ReactNode;
  /** Stretch instead of 222px. */
  fullWidth?: boolean;
  state?: 'focused' | 'disabled';
  htmlSize?: number;
  inputRef?: React.Ref<HTMLInputElement>;
}
export function Input(props: InputProps): JSX.Element;
