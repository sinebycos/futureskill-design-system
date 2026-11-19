import * as React from 'react';

export type OjtMethod = 'apprenticeship' | 'orientation' | 'shadowing' | 'mentoring' | 'coaching' | 'job-rotation' | 'cross-training' | 'simulated-training';
/** A coloured pill naming one OJT method (legacy palette). */
export interface OjtMethodBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Sets colours, icon and default English label. Default 'apprenticeship'. */
  method?: OjtMethod;
  state?: string;
  /** Replaces the label. */
  children?: React.ReactNode;
}
export function OjtMethodBadge(props: OjtMethodBadgeProps): JSX.Element;
