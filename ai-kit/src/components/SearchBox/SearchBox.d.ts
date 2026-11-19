import * as React from 'react';

/** Legacy search field with an enter control, optional clear and suffix. */
export interface SearchBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'value' | 'defaultValue'> {
  size?: 'large' | 'medium' | 'small';
  /** 'default' grey magnifier cell, 'icon' purple button, 'text' purple labelled button. */
  enter?: 'default' | 'icon' | 'text';
  enterText?: React.ReactNode;
  enterIcon?: React.ReactNode;
  enterLabel?: string;
  suffix?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  allowClear?: boolean;
  clearLabel?: string;
  value?: string;
  defaultValue?: string;
  onSearch?: (value: string, e: React.SyntheticEvent) => void;
  onClear?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Stretch instead of 264px. */
  fullWidth?: boolean;
  state?: 'focused' | 'disabled';
  htmlSize?: number;
  inputRef?: React.Ref<HTMLInputElement>;
}
export function SearchBox(props: SearchBoxProps): JSX.Element;
