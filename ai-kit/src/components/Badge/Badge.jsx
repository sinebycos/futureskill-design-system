import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

const BADGE_ICONS = { error: 'x-circle', warning: 'exclamation-triangle', success: 'check-circle', information: 'information-circle', neutral: 'arrows-right-left', brand: 'arrows-right-left' };

/** A small pill labelling status: error, warning, success, information, neutral or brand. */
export function Badge({ tone = 'neutral', size = 'medium', icon, dot: dotProp, state, className, children, ...rest }) {
  let iconNode;
  if (icon === undefined || icon === true) iconNode = BADGE_ICONS[tone] ? <Icon name={BADGE_ICONS[tone]} size={size === 'small' ? 16 : 20} /> : null;
  else iconNode = icon || null;
  const dot = dotProp === true ? 'online' : dotProp;
  return (
    <span {...rest} className={cx('fs-badge', `fs-badge--${tone}`, `fs-badge--${size}`, className)} data-state={state || undefined}>
      {iconNode}
      {dot ? <span className="fs-badge__dot-box"><span className={cx('fs-badge__dot', `fs-badge__dot--${dot}`)} /></span> : null}
      <span className="fs-badge__label">{children}</span>
    </span>
  );
}
