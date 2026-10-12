import { forwardRef, type ButtonHTMLAttributes, type ComponentType, type ReactNode, type SVGProps } from 'react';
import { BookOpenIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { cx } from '../../utils/cx';
import './SectionTypeItem.css';

export type SectionTypeItemVariant = 'general' | 'survey';

export interface SectionTypeItemProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'title' | 'type'> {
  /** Which section type the item offers: sets the icon, title and description shown in Figma. Default 'general'. */
  variant?: SectionTypeItemVariant;
  /** Figma "Active": the chosen section type. Brand-tinted fill and a 2px stroke-selected border. */
  active?: boolean;
  /** Replaces the preset icon: any 24px React node, e.g. `<CheckCircleIcon />` from `@heroicons/react/24/outline`. */
  icon?: ReactNode;
  /** Replaces the preset title. */
  title?: ReactNode;
  /** Replaces the preset one-line description. Children do the same. */
  description?: ReactNode;
  /** Pins a visual state for documentation. Real hover works without it. */
  state?: 'hover' | 'active';
}

const SECTION_TYPE_ITEM_PRESETS: Record<SectionTypeItemVariant, { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; description: string }> = {
  general: { icon: BookOpenIcon, title: 'General Section', description: 'ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live' },
  survey: { icon: ClipboardDocumentListIcon, title: 'Survey Section', description: 'ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ' },
};

export const SectionTypeItem = forwardRef<HTMLButtonElement, SectionTypeItemProps>(function SectionTypeItem(
  { variant = 'general', icon, title, description: descriptionProp, active: activeProp, state, className, children, ...rest },
  ref,
) {
  const preset = SECTION_TYPE_ITEM_PRESETS[variant] || SECTION_TYPE_ITEM_PRESETS.general;
  const PresetIcon = preset.icon;
  const description = descriptionProp === undefined ? (children === undefined ? preset.description : children) : descriptionProp;
  const active = !!activeProp || state === 'active';
  return (
    <button
      type="button"
      {...rest}
      ref={ref}
      className={cx('fs-section-type-item', `fs-section-type-item--${variant}`, active && 'fs-section-type-item--active', className)}
      data-state={state || undefined}
      aria-pressed={active}
    >
      <span className="fs-section-type-item__head">
        {icon === undefined ? <PresetIcon className="fs-icon" width={24} height={24} aria-hidden /> : icon || null}
        <span className="fs-section-type-item__title">{title === undefined ? preset.title : title}</span>
      </span>
      {description ? <span className="fs-section-type-item__text">{description}</span> : null}
    </button>
  );
});
