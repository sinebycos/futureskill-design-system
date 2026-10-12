import { forwardRef, type ForwardedRef, type HTMLAttributes, type MouseEventHandler, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { Button } from '../Button';
import './NotiItem.css';

export type NotiItemMedia = 'cover' | 'mark';
export type NotiItemTone = 'default' | 'green' | 'yellow' | 'red';
export type NotiItemHighlightTone = 'yellow' | 'red' | 'green';

export interface NotiItemProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** The 66px thumbnail: an image URL, or any React node that fills the square. Omit it and the text takes the full width. */
  image?: string | ReactNode;
  /** Alt text when `image` is a URL. Default ''. */
  imageAlt?: string;
  /** 'cover' (default) fills the 66px square: course cover, person, organisation logo. 'mark' centres a 32px logo on a primary-neutral-100 tile. */
  media?: NotiItemMedia;
  /** Root fill. 'default' white; 'green', 'yellow', 'red' are the 3, 2 and 1 months-left reminders in Figma. */
  tone?: NotiItemTone;
  /** Bold first line, 14/19. Cut after `titleLines` lines. */
  title?: ReactNode;
  /** Body text, 12/18. `children` is used when `message` is not set. */
  message?: ReactNode;
  /** Lighter 12/18 excerpt under the message (a Q&A post or reply). Always cut at 2 lines. */
  quote?: ReactNode;
  /** A darker 12/18 line set 12px below the message, e.g. "วันครบกำหนด : 12/09/2025". */
  meta?: ReactNode;
  /** Relative time in brand purple, 14/22, e.g. "27 วันที่ผ่านมา". */
  time?: ReactNode;
  /** Shows the 12px red dot at the top right. */
  unread?: boolean;
  /** Accessible name for the dot. Without it the dot is hidden from assistive technology. */
  unreadLabel?: string;
  /** A label for the small primary Button above the time, or your own node. */
  action?: string | ReactNode;
  /** Click handler of the button when `action` is a string. */
  onAction?: MouseEventHandler<HTMLButtonElement>;
  /** Lines before the title is cut with an ellipsis. Default 2; Figma also uses 1. */
  titleLines?: number;
  /** Lines before the message is cut. Default: not cut. Figma uses 2 or 3 on some events. */
  messageLines?: number;
  /** Renders the item as a link. Do not combine with `action`. */
  href?: string;
  /** Copied to data-state. Figma has no hover, pressed or read states for this component. */
  state?: string;
}

export interface NotiItemHighlightProps extends HTMLAttributes<HTMLSpanElement> {
  /** Colour of a status phrase inside `message`: 'yellow' waiting (yellow-700), 'red' rejected (red-700), 'green' approved (green-700). Default 'yellow'. */
  tone?: NotiItemHighlightTone;
}

/** A coloured status phrase inside a NotiItem message. */
export const NotiItemHighlight = forwardRef<HTMLSpanElement, NotiItemHighlightProps>(function NotiItemHighlight(
  { tone = 'yellow', className, children, ...rest },
  ref,
) {
  return (
    <span {...rest} ref={ref} className={cx('fs-noti-item__highlight', `fs-noti-item__highlight--${tone}`, className)}>
      {children}
    </span>
  );
});

/** One row of the notification list. Renders an `<a>` when `href` is set, a `<div>` otherwise; the ref goes to that root. */
export const NotiItem = forwardRef<HTMLElement, NotiItemProps>(function NotiItem(
  {
    image: imageProp, imageAlt, media = 'cover', tone = 'default', title, message: messageProp, quote, meta, time,
    unread, unreadLabel, action: actionProp, onAction, titleLines, messageLines, href, state, className, children, ...rest
  },
  ref,
) {
  const image = typeof imageProp === 'string' ? <img className="fs-noti-item__img" src={imageProp} alt={imageAlt || ''} /> : imageProp;
  // a string action becomes the Figma button: Button, primary, brand, small
  const action = typeof actionProp === 'string' ? <Button size="small" onClick={onAction}>{actionProp}</Button> : actionProp;
  const message = messageProp === undefined ? children : messageProp;

  const content = (
    <>
      {image ? <span className={cx('fs-noti-item__thumb', `fs-noti-item__thumb--${media}`)}>{image}</span> : null}
      <span className="fs-noti-item__main">
        <span className="fs-noti-item__body">
          {title ? (
            <span
              className={cx('fs-noti-item__title', titleLines === 1 && 'fs-noti-item__title--single')}
              style={titleLines !== undefined && titleLines > 1 ? { WebkitLineClamp: titleLines } : undefined}
            >
              {title}
            </span>
          ) : null}
          {message ? (
            <span
              className={cx('fs-noti-item__message', messageLines ? 'fs-noti-item__message--clamp' : false)}
              style={messageLines ? { WebkitLineClamp: messageLines } : undefined}
            >
              {message}
            </span>
          ) : null}
          {quote ? <span className="fs-noti-item__quote">{quote}</span> : null}
          {meta ? <span className="fs-noti-item__meta">{meta}</span> : null}
          {action ? <span className="fs-noti-item__action">{action}</span> : null}
          {time ? <span className="fs-noti-item__time">{time}</span> : null}
        </span>
        {unread ? (
          unreadLabel
            ? <span className="fs-noti-item__dot" role="img" aria-label={unreadLabel} />
            : <span className="fs-noti-item__dot" aria-hidden="true" />
        ) : null}
      </span>
    </>
  );

  const rootClass = cx('fs-noti-item', `fs-noti-item--${tone}`, (href || rest.onClick) && 'fs-noti-item--interactive', className);
  return href ? (
    <a {...rest} ref={ref as ForwardedRef<HTMLAnchorElement>} href={href} className={rootClass} data-state={state || undefined}>
      {content}
    </a>
  ) : (
    <div {...rest} ref={ref as ForwardedRef<HTMLDivElement>} className={rootClass} data-state={state || undefined}>
      {content}
    </div>
  );
});
