import React from 'react';
import { cx } from '../../utils/cx.js';
import { Button } from '../Button/Button.jsx';

/** A coloured status phrase inside a NotiItem message. */
export function NotiItemHighlight({ tone = 'yellow', className, children, ...rest }) {
  return <span {...rest} className={cx('fs-noti-item__highlight', `fs-noti-item__highlight--${tone}`, className)}>{children}</span>;
}

/** One row of the notification list: thumbnail, bold title, message, time, optional dot/quote/meta/button (legacy palette). */
export function NotiItem({ image: imageProp, imageAlt, media = 'cover', tone = 'default', title, message: messageProp, quote, meta, time, unread, unreadLabel, action: actionProp, onAction, titleLines, messageLines, href, state, className, children, ...rest }) {
  const image = typeof imageProp === 'string' ? <img className="fs-noti-item__img" src={imageProp} alt={imageAlt || ''} /> : imageProp;
  const action = typeof actionProp === 'string' ? <Button size="small" onClick={onAction}>{actionProp}</Button> : actionProp;
  const message = messageProp === undefined ? children : messageProp;
  const content = (
    <>
      {image ? <span className={cx('fs-noti-item__thumb', `fs-noti-item__thumb--${media}`)}>{image}</span> : null}
      <span className="fs-noti-item__main">
        <span className="fs-noti-item__body">
          {title ? <span className={cx('fs-noti-item__title', titleLines === 1 && 'fs-noti-item__title--single')} style={titleLines !== undefined && titleLines > 1 ? { WebkitLineClamp: titleLines } : undefined}>{title}</span> : null}
          {message ? <span className={cx('fs-noti-item__message', messageLines ? 'fs-noti-item__message--clamp' : false)} style={messageLines ? { WebkitLineClamp: messageLines } : undefined}>{message}</span> : null}
          {quote ? <span className="fs-noti-item__quote">{quote}</span> : null}
          {meta ? <span className="fs-noti-item__meta">{meta}</span> : null}
          {action ? <span className="fs-noti-item__action">{action}</span> : null}
          {time ? <span className="fs-noti-item__time">{time}</span> : null}
        </span>
        {unread ? (unreadLabel ? <span className="fs-noti-item__dot" role="img" aria-label={unreadLabel} /> : <span className="fs-noti-item__dot" aria-hidden="true" />) : null}
      </span>
    </>
  );
  const rootClass = cx('fs-noti-item', `fs-noti-item--${tone}`, (href || rest.onClick) && 'fs-noti-item--interactive', className);
  return href ? <a {...rest} href={href} className={rootClass} data-state={state || undefined}>{content}</a> : <div {...rest} className={rootClass} data-state={state || undefined}>{content}</div>;
}
