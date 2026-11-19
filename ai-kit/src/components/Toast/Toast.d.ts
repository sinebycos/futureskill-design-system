import * as React from 'react';

/** A small 313px message reporting an action result (legacy palette). */
export interface ToastProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: 'success' | 'error' | 'warning' | 'info';
  /** 'light' white, 'dark' #121212, 'colored' status fill. Does not follow page theme. */
  theme?: 'light' | 'dark' | 'colored';
  message?: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  /** 0–100 width of the 5px bottom bar, or true for Figma's length. */
  progress?: number | boolean;
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeLabel?: string;
  open?: boolean;
  state?: string;
}
export function Toast(props: ToastProps): JSX.Element;
