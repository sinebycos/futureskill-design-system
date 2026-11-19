import * as React from 'react';

/** A read-only bar with a thumb and a value bubble ("50/100"). */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  /** Default 100. */
  max?: number;
  /** Bubble text; default "value/max". */
  label?: React.ReactNode;
  state?: string;
}
export function ProgressBar(props: ProgressBarProps): JSX.Element;
