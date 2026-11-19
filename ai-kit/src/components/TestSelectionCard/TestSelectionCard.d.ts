import * as React from 'react';

/**
 * A radio card for picking a test.
 * @startingPoint section="Learning" subtitle="Radio cards for picking a test" viewport="700x300"
 */
export interface TestSelectionCardProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'type' | 'onSelect' | 'value'> {
  title?: React.ReactNode;
  /** Facts joined with "•". */
  meta?: React.ReactNode[];
  /** Adds "มีข้อสอบข้อเขียน" in text-warning. */
  openEnd?: boolean;
  openEndLabel?: React.ReactNode;
  /** "ใหม่" badge top-right. */
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
export function TestSelectionCard(props: TestSelectionCardProps): JSX.Element;
