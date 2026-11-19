import * as React from 'react';

/** A plain 10px percentage bar (legacy palette). */
export interface SkillProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0–100. */
  value?: number;
  state?: string;
}
export function SkillProgress(props: SkillProgressProps): JSX.Element;
