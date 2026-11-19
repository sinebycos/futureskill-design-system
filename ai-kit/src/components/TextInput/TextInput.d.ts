import * as React from 'react';

/** A single-line text field with label, hint and error built in. */
export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  /** Helper line under the label. */
  hint?: React.ReactNode;
  required?: boolean;
  /** Shows "(optional)", or your own wording. */
  optional?: boolean | string;
  /** Red 2px border and fill-error-weak ground. Implied by error. */
  invalid?: boolean;
  /** Error message with icon, between label and field. */
  error?: React.ReactNode;
  /** 16px icon at the end of the field. */
  icon?: React.ReactNode;
  /** Stretch instead of 364px. */
  fullWidth?: boolean;
  state?: 'hover' | 'press' | 'focus' | 'disabled';
  inputRef?: React.Ref<HTMLInputElement>;
}
export function TextInput(props: TextInputProps): JSX.Element;
