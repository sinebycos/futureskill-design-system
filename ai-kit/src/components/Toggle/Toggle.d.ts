import * as React from 'react';

/** A switch between on and off that takes effect immediately (legacy palette, Figma "Switch"). */
export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  /** Default 'medium' (44x22). 'small' 28x16. */
  size?: 'small' | 'medium';
  /** Short text in the track while checked, e.g. "ON". */
  checkedText?: React.ReactNode;
  uncheckedText?: React.ReactNode;
  /** 12px icon in the track while checked. */
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  /** Spinner in the nob; blocks input. */
  loading?: boolean;
  disabled?: boolean;
  state?: 'press' | 'focus' | 'disabled';
}
export function Toggle(props: ToggleProps): JSX.Element;
