import * as React from 'react';

/** A clickable option for choosing a class section type. */
export interface SectionTypeItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'type'> {
  /** Preset icon, title and description. */
  variant?: 'general' | 'survey';
  /** Brand-tinted fill and 2px stroke-selected border. */
  active?: boolean;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  state?: 'hover' | 'active';
}
export function SectionTypeItem(props: SectionTypeItemProps): JSX.Element;
