import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

/** A radio card for picking a test: radio, document tile, test name and a line of facts. */
export function TestSelectionCard({ title, meta, icon, isNew, newLabel, openEnd, openEndLabel, value, selected: selectedProp, defaultSelected, onSelect, state, className, children, onClick, disabled: disabledProp, ...rest }) {
  const [own, setOwn] = React.useState(!!defaultSelected);
  const controlled = selectedProp !== undefined;
  const selected = (controlled ? !!selectedProp : own) || state === 'selected';
  const disabled = !!disabledProp || state === 'disabled';
  const iconNode = icon === undefined ? <Icon name="document-text" size={20} /> : icon;
  const facts = [].concat(meta ?? []);
  const sep = (key) => <span key={key} aria-hidden>•</span>;
  const bits = [];
  facts.forEach((fact, i) => { if (i) bits.push(sep('s' + i)); bits.push(<span key={'m' + i}>{fact}</span>); });
  if (openEnd) { if (bits.length) bits.push(sep('so')); bits.push(<span key="o" className="fs-test-selection-card__open-end">{openEndLabel || 'มีข้อสอบข้อเขียน'}</span>); }
  return (
    <button type="button" role="radio" {...rest} value={value} className={cx('fs-test-selection-card', selected && 'fs-test-selection-card--selected', className)} data-state={state} aria-checked={selected} disabled={disabled || undefined}
      onClick={(e) => { if (onClick) onClick(e); if (!controlled) setOwn(true); if (onSelect) onSelect(value, e); }}>
      <span className="fs-test-selection-card__radio">{selected ? <span className="fs-test-selection-card__dot" /> : null}</span>
      <span className="fs-test-selection-card__icon">{iconNode}</span>
      <span className="fs-test-selection-card__body">
        <span className="fs-test-selection-card__title">{title === undefined ? children : title}</span>
        {bits.length ? <span className="fs-test-selection-card__meta">{bits}</span> : null}
      </span>
      {isNew ? <span className="fs-test-selection-card__badge"><Icon name="star" size={14} />{newLabel || 'ใหม่'}</span> : null}
    </button>
  );
}
