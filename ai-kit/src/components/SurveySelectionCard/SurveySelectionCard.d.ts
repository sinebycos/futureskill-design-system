import * as React from 'react';

/** A radio card for picking a survey. */
export interface SurveySelectionCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'type' | 'onSelect' | 'value'> {
  title?: React.ReactNode;
  meta?: React.ReactNode[];
  isNew?: boolean;
  newLabel?: React.ReactNode;
  icon?: React.ReactNode;
  value?: string;
  selected?: boolean;
  defaultSelected?: boolean;
  disabled?: boolean;
  onSelect?: (value: string | undefined, e: React.MouseEvent<HTMLButtonElement>) => void;
  state?: 'selected' | 'disabled';
}
export function SurveySelectionCard(props: SurveySelectionCardProps): JSX.Element;
