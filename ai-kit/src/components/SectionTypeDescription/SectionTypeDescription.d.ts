import * as React from 'react';

/** A static outlined box naming and explaining a section type. */
export interface SectionTypeDescriptionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: 'general' | 'survey';
  icon?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
}
export function SectionTypeDescription(props: SectionTypeDescriptionProps): JSX.Element;
