import * as React from 'react';

export interface SegmentedControlOption { value: string | number; label: React.ReactNode; icon?: React.ReactNode; counter?: React.ReactNode; }
/** A single track holding 2 to 7 tabs, exactly one active. */
export interface SegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
  options: Array<SegmentedControlOption | string | number>;
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number, option: SegmentedControlOption) => void;
  /** 'default' 48px, 'small' 38px. */
  size?: 'default' | 'small';
  /** 32px icon-only control (legacy iOS colours). */
  iconOnly?: boolean;
  state?: 'focus';
}
export function SegmentedControl(props: SegmentedControlProps): JSX.Element;
