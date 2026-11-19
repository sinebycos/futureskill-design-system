import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

/** A selectable row with a title and helper line ("Outside learning"). */
export function OutsideLearningCard({ title, description, value, selected: selectedProp, defaultSelected, onSelect, state, className, children, onClick, ...rest }) {
  const [own, setOwn] = React.useState(!!defaultSelected);
  const controlled = selectedProp !== undefined;
  const selected = (controlled ? !!selectedProp : own) || state === 'selected';
  return (
    <button type="button" {...rest} value={value} className={cx('fs-outside-learning-card', selected && 'fs-outside-learning-card--selected', className)} data-state={state} aria-pressed={selected}
      onClick={(e) => { if (onClick) onClick(e); if (!controlled) setOwn(true); if (onSelect) onSelect(value, e); }}>
      <span className="fs-outside-learning-card__body">
        <span className="fs-outside-learning-card__title">{title === undefined ? children : title}</span>
        {description ? <span className="fs-outside-learning-card__description">{description}</span> : null}
      </span>
      {selected ? <span className="fs-outside-learning-card__check"><Icon name="check-circle" size={16} /></span> : null}
    </button>
  );
}
