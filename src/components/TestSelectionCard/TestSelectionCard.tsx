import { forwardRef, useState, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { DocumentTextIcon, StarIcon } from '@heroicons/react/24/outline';
import './TestSelectionCard.css';

export interface TestSelectionCardProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'type' | 'onSelect' | 'value'> {
  /** The test name, 14/22. Children do the same. */
  title?: ReactNode;
  /** Facts under the title, 12/18 in text-weak, joined with "•": e.g. ['20 คำถาม', 'คะแนนผ่าน 80%', 'ทำแล้ว 81 ครั้ง']. */
  meta?: ReactNode[];
  /** Figma "open-end": adds "มีข้อสอบข้อเขียน" in text-warning at the end of the meta line. */
  openEnd?: boolean;
  /** Replaces the open-end text. */
  openEndLabel?: ReactNode;
  /** Figma "New": shows the "ใหม่" badge on the top-right corner. */
  isNew?: boolean;
  /** Replaces the badge text. Default "ใหม่". */
  newLabel?: ReactNode;
  /** Replaces the document icon in the 36px tile: any icon node, sized to 20px automatically, e.g. `<BeakerIcon />`. `null` leaves the tile empty. */
  icon?: ReactNode;
  /** The card's value: passed to `onSelect` and set as the button's `value` attribute. */
  value?: string;
  /** Figma "True": filled radio, brand-tinted card, stroke-selected border. Controlled. */
  selected?: boolean;
  /** Starting value when you do not control `selected`. A click then selects the card. */
  defaultSelected?: boolean;
  /** Figma "Disabled": the whole card at 50% opacity, not clickable. */
  disabled?: boolean;
  /** Called on click with the card's `value` and the event. Not called while disabled. */
  onSelect?: (value: string | undefined, event: MouseEvent<HTMLButtonElement>) => void;
  /** Pins a visual state for documentation. */
  state?: 'selected' | 'disabled';
}

export const TestSelectionCard = forwardRef<HTMLButtonElement, TestSelectionCardProps>(function TestSelectionCard(
  { title, meta, icon, isNew, newLabel, openEnd, openEndLabel, value, selected: selectedProp, defaultSelected, onSelect, state, className, children, onClick, disabled: disabledProp, ...rest },
  ref,
) {
  const [own, setOwn] = useState(!!defaultSelected);
  const controlled = selectedProp !== undefined;
  const selected = (controlled ? !!selectedProp : own) || state === 'selected';
  const disabled = !!disabledProp || state === 'disabled';
  const iconNode = icon === undefined ? <DocumentTextIcon className="fs-icon" width={20} height={20} aria-hidden /> : icon;
  const facts = ([] as ReactNode[]).concat(meta ?? []);
  const sep = (key: string) => <span key={key} aria-hidden>•</span>;
  const bits: ReactNode[] = [];
  facts.forEach((fact, i) => {
    if (i) bits.push(sep(`s${i}`));
    bits.push(<span key={`m${i}`}>{fact}</span>);
  });
  if (openEnd) {
    if (bits.length) bits.push(sep('so'));
    bits.push(<span key="o" className="fs-test-selection-card__open-end">{openEndLabel || 'มีข้อสอบข้อเขียน'}</span>);
  }
  return (
    <button
      type="button"
      role="radio"
      {...rest}
      ref={ref}
      value={value}
      className={cx('fs-test-selection-card', selected && 'fs-test-selection-card--selected', className)}
      data-state={state}
      aria-checked={selected}
      disabled={disabled || undefined}
      onClick={(e) => {
        onClick?.(e);
        if (!controlled) setOwn(true);
        onSelect?.(value, e);
      }}
    >
      <span className="fs-test-selection-card__radio">{selected ? <span className="fs-test-selection-card__dot" /> : null}</span>
      <span className="fs-test-selection-card__icon">{iconNode}</span>
      <span className="fs-test-selection-card__body">
        <span className="fs-test-selection-card__title">{title === undefined ? children : title}</span>
        {bits.length ? <span className="fs-test-selection-card__meta">{bits}</span> : null}
      </span>
      {isNew ? (
        <span className="fs-test-selection-card__badge">
          <StarIcon className="fs-icon" width={14} height={14} aria-hidden />
          {newLabel || 'ใหม่'}
        </span>
      ) : null}
    </button>
  );
});
