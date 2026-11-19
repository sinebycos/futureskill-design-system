import * as React from 'react';

/**
 * One row of the notification list (legacy palette).
 * @startingPoint section="Feedback" subtitle="Notification list rows" viewport="700x400"
 */
export interface NotiItemProps extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  /** 66px thumbnail: image URL or node. */
  image?: string | React.ReactNode;
  imageAlt?: string;
  /** 'cover' fills; 'mark' centres a 32px logo on a tile. */
  media?: 'cover' | 'mark';
  /** Root fill: 3/2/1 months-left reminders. */
  tone?: 'default' | 'green' | 'yellow' | 'red';
  /** Bold 14/19 line. */
  title?: React.ReactNode;
  /** 12/18 body. */
  message?: React.ReactNode;
  /** Lighter 2-line excerpt. */
  quote?: React.ReactNode;
  /** Darker line, e.g. "วันครบกำหนด : 12/09/2025". */
  meta?: React.ReactNode;
  /** Relative time in brand purple, e.g. "27 วันที่ผ่านมา". */
  time?: React.ReactNode;
  /** 12px red dot. */
  unread?: boolean;
  unreadLabel?: string;
  /** String becomes a small primary Button. */
  action?: string | React.ReactNode;
  onAction?: React.MouseEventHandler<HTMLButtonElement>;
  titleLines?: number;
  messageLines?: number;
  href?: string;
  state?: string;
}
export interface NotiItemHighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** yellow waiting, red rejected, green approved. */
  tone?: 'yellow' | 'red' | 'green';
}
export function NotiItem(props: NotiItemProps): JSX.Element;
export function NotiItemHighlight(props: NotiItemHighlightProps): JSX.Element;
