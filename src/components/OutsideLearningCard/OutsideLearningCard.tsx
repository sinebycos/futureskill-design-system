import { forwardRef, useState, type ButtonHTMLAttributes, type MouseEvent, type ReactNode } from 'react';
import { cx } from '../../utils/cx';
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import './OutsideLearningCard.css';

export interface OutsideLearningCardProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'type' | 'onSelect' | 'value'> {
  /** First line, 14/22. Children do the same. */
  title?: ReactNode;
  /** Second line, 12/18 in text-weak. */
  description?: ReactNode;
  /** The card's value: passed to `onSelect` and set as the button's `value` attribute. */
  value?: string;
  /** Figma "True": brand-tinted fill, stroke-selected border, shadow and a check on the right. Controlled. */
  selected?: boolean;
  /** Starting value when you do not control `selected`. A click then selects the card. */
  defaultSelected?: boolean;
  /** Called on click with the card's `value` and the event. */
  onSelect?: (value: string | undefined, event: MouseEvent<HTMLButtonElement>) => void;
  /** Pins the selected look for documentation. */
  state?: 'selected';
}

export const OutsideLearningCard = forwardRef<HTMLButtonElement, OutsideLearningCardProps>(function OutsideLearningCard(
  { title, description, value, selected: selectedProp, defaultSelected, onSelect, state, className, children, onClick, ...rest },
  ref,
) {
  const [own, setOwn] = useState(!!defaultSelected);
  const controlled = selectedProp !== undefined;
  const selected = (controlled ? !!selectedProp : own) || state === 'selected';
  return (
    <button
      type="button"
      {...rest}
      ref={ref}
      value={value}
      className={cx('fs-outside-learning-card', selected && 'fs-outside-learning-card--selected', className)}
      data-state={state}
      aria-pressed={selected}
      onClick={(e) => {
        onClick?.(e);
        if (!controlled) setOwn(true);
        onSelect?.(value, e);
      }}
    >
      <span className="fs-outside-learning-card__body">
        <span className="fs-outside-learning-card__title">{title === undefined ? children : title}</span>
        {description ? <span className="fs-outside-learning-card__description">{description}</span> : null}
      </span>
      {selected ? (
        <span className="fs-outside-learning-card__check">
          <CheckCircleIcon className="fs-icon" width={16} height={16} aria-hidden />
        </span>
      ) : null}
    </button>
  );
});
