import * as React from 'react';

/** Shows where the user is in a short linear sequence (legacy palette). */
export interface StepperProps extends React.OlHTMLAttributes<HTMLOListElement> {
  /** One label per step, or a count with no labels. Figma has 3, 4, 5. */
  steps?: number | React.ReactNode[];
  /** 0-based active step; earlier steps are done. Pass the count for all done. */
  current?: number;
  children?: React.ReactNode;
}
export interface StepperStepProps extends React.LiHTMLAttributes<HTMLLIElement> {
  state?: 'default' | 'active' | 'done';
  position?: 'start' | 'middle' | 'end';
  label?: React.ReactNode;
}
export function Stepper(props: StepperProps): JSX.Element;
export function StepperStep(props: StepperStepProps): JSX.Element;
