import * as React from 'react';

export type NavigationSideVariant = 'desktop' | 'learner' | 'mobile-closed' | 'mobile-open';
export type NavigationSideItemVariant = 'default' | 'header' | 'divider' | 'divider-full' | 'slot' | 'alert' | 'button' | 'search' | 'avatar' | 'expand';
/**
 * The app's side navigation: desktop 256px sidebar, learner card, mobile top bar or mobile drawer.
 * @startingPoint section="Navigation" subtitle="Desktop and learner sidebars with items" viewport="700x400"
 */
export interface NavigationSideProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: NavigationSideVariant;
  /** Small caption row with a hairline, e.g. "การเรียนของฉัน". */
  title?: React.ReactNode;
  /** Above the items: logo or search. */
  header?: React.ReactNode;
  /** Pinned to the bottom. */
  footer?: React.ReactNode;
  /** The NavigationSideItem list. */
  children?: React.ReactNode;
  /** mobile-closed only. */
  logo?: React.ReactNode;
  avatar?: React.ReactNode;
  hamburger?: boolean;
  onMenuClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** mobile-open only. */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  menuLabel?: string;
  closeLabel?: string;
  state?: string;
}
/** One row of NavigationSide. */
export interface NavigationSideItemProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  variant?: NavigationSideItemVariant;
  /** Current page: brand ground, 4px left bar. */
  selected?: boolean;
  /** 56px tall, 4px radius learner metrics. */
  learner?: boolean;
  /** Leading 24px icon. */
  icon?: React.ReactNode;
  /** Trailing chevron. */
  submenu?: boolean;
  badge?: React.ReactNode;
  badgeCount?: React.ReactNode;
  /** 'expand' only. */
  align?: 'start' | 'end';
  href?: string;
  disabled?: boolean;
  state?: 'hover' | 'press' | 'focus';
  children?: React.ReactNode;
}
export function NavigationSide(props: NavigationSideProps): JSX.Element;
export function NavigationSideItem(props: NavigationSideItemProps): JSX.Element;
