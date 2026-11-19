import * as React from 'react';

export type AlertTone = 'error' | 'warning' | 'success' | 'information' | 'neutral' | 'brand' | 'inverse-neutral' | 'inverse-brand';
/** A full-width banner with one short message. */
export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Default 'neutral'. */
  tone?: AlertTone;
  /** 'desktop' one row; 'mobile' stacks the action. */
  device?: 'desktop' | 'mobile';
  /** Leading 24px icon; defaults to the tone's. null for none. */
  icon?: React.ReactNode;
  /** A string becomes a small secondary Button. */
  action?: React.ReactNode;
  onAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Default true. */
  closable?: boolean;
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closeLabel?: string;
  open?: boolean;
  state?: string;
  /** One short sentence. */
  children?: React.ReactNode;
}
export function Alert(props: AlertProps): JSX.Element;
