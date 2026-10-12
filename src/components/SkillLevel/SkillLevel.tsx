import { forwardRef, type HTMLAttributes, type ReactNode, type Ref } from 'react';
import { cx } from '../../utils/cx';
import './SkillLevel.css';

export type SkillLevelLevel = 'not-start' | 'novice' | 'emerging' | 'intermediate' | 'above-avg' | 'excellent';
export type SkillLevelVariant = 'bars' | 'band';

export interface SkillLevelProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** The skill level. Default 'not-start'. */
  level?: SkillLevelLevel;
  /** 'bars' is the 16px three-bar indicator. 'band' is the 132px column of the level chart. Default 'bars'. */
  variant?: SkillLevelVariant;
  /** Band: text under the cap. Bars: the accessible name. Default is the level's Figma name ("Novice", "Above Avg"). */
  label?: ReactNode;
  /** Band only: text at the bottom, such as the percentile range "0-24th". No default. */
  range?: ReactNode;
  /** Band only: false removes the cap and the wash and turns the text primary-neutral-800. Default true. */
  active?: boolean;
  /** Copied to data-state. SkillLevel is static and has no hover, press or disabled state in Figma. */
  state?: string;
}

// label = the Figma copy for each level; bars = how many of the three bars take the level colour.
const SKILL_LEVEL_INFO: Record<SkillLevelLevel, { label: string; bars: number }> = {
  'not-start': { label: 'Not start', bars: 3 },
  novice: { label: 'Novice', bars: 1 },
  emerging: { label: 'Emerging', bars: 1 },
  intermediate: { label: 'Intermediate', bars: 2 },
  'above-avg': { label: 'Above Avg', bars: 2 },
  excellent: { label: 'Excellent', bars: 3 },
};

/** The root is a `div` for the band and a `span` for the bars; the ref points at that element. */
export const SkillLevel = forwardRef<HTMLElement, SkillLevelProps>(function SkillLevel(
  { level: levelProp, variant, label: labelProp, range, active, state, className, ...rest },
  ref,
) {
  const level: SkillLevelLevel = levelProp && SKILL_LEVEL_INFO[levelProp] ? levelProp : 'not-start';
  const info = SKILL_LEVEL_INFO[level];
  const band = variant === 'band';
  const label = labelProp !== undefined ? labelProp : info.label;
  const inactive = band && (active === false || level === 'not-start');
  const rootClass = cx('fs-skill-level', `fs-skill-level--${band ? 'band' : 'bars'}`, `fs-skill-level--${level}`, inactive && 'fs-skill-level--inactive', className);

  if (band) {
    return (
      <div {...rest} ref={ref as Ref<HTMLDivElement>} className={rootClass} data-state={state || undefined}>
        <div className="fs-skill-level__head">
          <span className="fs-skill-level__cap" />
          <span className="fs-skill-level__label">{label}</span>
        </div>
        <span className="fs-skill-level__range">{range}</span>
      </div>
    );
  }
  return (
    <span role="img" aria-label={typeof label === 'string' ? label : info.label} {...rest} ref={ref as Ref<HTMLSpanElement>} className={rootClass} data-state={state || undefined}>
      {[1, 2, 3].map((i) => (
        <span key={i} className={cx('fs-skill-level__bar', `fs-skill-level__bar--${i}`, i <= info.bars && 'fs-skill-level__bar--on')} />
      ))}
    </span>
  );
});
