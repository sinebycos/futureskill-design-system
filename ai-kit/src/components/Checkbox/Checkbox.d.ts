import * as React from 'react';

/** A 16px box, with or without a label, for turning one option on or off. */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  checked?: boolean;
  defaultChecked?: boolean;
  /** Shows the 8px square instead of the check. */
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** The label. Omit for a bare box and pass aria-label. */
  children?: React.ReactNode;
  state?: 'hover' | 'disabled';
}
export interface CheckboxGroupOption { value: string; label: React.ReactNode; disabled?: boolean; }
/** A role="group" list of Checkboxes. */
export interface CheckboxGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  /** 'vertical' (8px apart) or 'horizontal' (16px apart). */
  layout?: 'vertical' | 'horizontal';
  options: Array<string | CheckboxGroupOption>;
  value?: string[];
  defaultValue?: string[];
  onChange?: (value: string[], event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  disabled?: boolean;
}
export function Checkbox(props: CheckboxProps): JSX.Element;
export function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;
