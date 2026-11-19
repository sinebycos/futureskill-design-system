import * as React from 'react';

/** Legacy multi-line field with optional character count. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'large' | 'medium' | 'small';
  /** "97 / 100" when maxLength is set. */
  showCount?: boolean;
  /** Stretch instead of 395px. */
  fullWidth?: boolean;
  state?: 'hovered' | 'focused' | 'disabled';
  inputRef?: React.Ref<HTMLTextAreaElement>;
}
export function Textarea(props: TextareaProps): JSX.Element;
