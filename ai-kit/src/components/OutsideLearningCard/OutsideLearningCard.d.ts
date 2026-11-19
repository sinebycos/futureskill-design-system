import * as React from 'react';

/** A selectable row with title and helper line ("Outside learning"). */
export interface OutsideLearningCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'type' | 'onSelect' | 'value'> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  value?: string;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelect?: (value: string | undefined, e: React.MouseEvent<HTMLButtonElement>) => void;
  state?: 'selected';
}
export function OutsideLearningCard(props: OutsideLearningCardProps): JSX.Element;
