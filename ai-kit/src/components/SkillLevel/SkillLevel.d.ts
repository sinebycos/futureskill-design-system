import * as React from 'react';

export type SkillLevelLevel = 'not-start' | 'novice' | 'emerging' | 'intermediate' | 'above-avg' | 'excellent';
/** Which of six skill levels a learner is at (legacy palette). */
export interface SkillLevelProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  level?: SkillLevelLevel;
  /** 'bars' 16px three-bar indicator; 'band' 132px chart column. */
  variant?: 'bars' | 'band';
  label?: React.ReactNode;
  /** Band only, e.g. "0-24th". */
  range?: React.ReactNode;
  /** Band only. */
  active?: boolean;
  state?: string;
}
export function SkillLevel(props: SkillLevelProps): JSX.Element;
