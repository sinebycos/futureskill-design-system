import * as React from 'react';

/** Legacy password field with a show/hide eye. */
export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: 'large' | 'medium' | 'small';
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
  showLabel?: string;
  hideLabel?: string;
  /** Stretch instead of 264px. */
  fullWidth?: boolean;
  state?: 'focused' | 'disabled';
  htmlSize?: number;
  inputRef?: React.Ref<HTMLInputElement>;
}
export function PasswordInput(props: PasswordInputProps): JSX.Element;
