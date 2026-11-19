import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

/** An inline text action with no container. Renders <a> with href, otherwise <button>. */
export function TextLink({ tone = 'default', size = 'small', weight = 'bold', underline, iconLeft, iconRight, state, className, children, href, disabled: disabledProp, htmlType, ...rest }) {
  const disabled = !!disabledProp || state === 'disabled';
  const classes = cx('fs-text-link', `fs-text-link--${tone}`, `fs-text-link--${size}`, `fs-text-link--${weight}`, underline === false && 'fs-text-link--no-underline', className);
  const content = (<>{iconLeft || null}<span className="fs-text-link__label">{children}</span>{iconRight || null}</>);
  if (href != null) {
    const own = disabled ? { 'aria-disabled': 'true', tabIndex: -1, onClick: undefined } : { href };
    return <a {...rest} {...own} className={classes} data-state={state}>{content}</a>;
  }
  return <button {...rest} type={htmlType ?? 'button'} disabled={disabled || undefined} className={classes} data-state={state}>{content}</button>;
}
