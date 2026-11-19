import * as React from 'react';

export type BadgeTone = 'error' | 'warning' | 'success' | 'information' | 'neutral' | 'brand';
/** A small pill labelling status. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Default 'neutral'. */
  tone?: BadgeTone;
  /** 'medium' 32px; 'small' 24px. */
  size?: 'small' | 'medium';
  /** true/omitted = tone icon; false = none; node = custom. */
  icon?: boolean | React.ReactNode;
  /** 12px status dot. */
  dot?: boolean | 'online' | 'busy' | 'away' | 'offline' | 'notification';
  state?: string;
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
