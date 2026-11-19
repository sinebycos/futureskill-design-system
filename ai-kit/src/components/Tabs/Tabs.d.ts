import * as React from 'react';

export interface TabsItemData { id: string; label: React.ReactNode; icon?: React.ReactNode; badge?: React.ReactNode; disabled?: boolean; controls?: string; state?: 'hover' | 'press' | 'focus' | 'disabled'; }
/** A horizontal row of tabs switching between views of the same page. */
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  items: TabsItemData[];
  value?: string;
  defaultValue?: string;
  onChange?: (id: string) => void;
  /** 'text' labels only; 'icons' icon before each label. Auto from items. */
  variant?: 'text' | 'icons';
}
/** A single tab, for custom layouts. */
export interface TabsItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  /** Brand label in SemiBold with a 2px underline. */
  selected?: boolean;
  state?: 'hover' | 'press' | 'focus' | 'disabled';
}
export function Tabs(props: TabsProps): JSX.Element;
export function TabsItem(props: TabsItemProps): JSX.Element;
