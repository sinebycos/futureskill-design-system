import { forwardRef, type ComponentType, type HTMLAttributes, type ReactNode, type SVGProps } from 'react';
import { BookOpenIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { cx } from '../../utils/cx';
import './SectionTypeDescription.css';

export type SectionTypeDescriptionVariant = 'general' | 'survey';

export interface SectionTypeDescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Figma "Property 1". Picks the icon, title and description shown in Figma for that section type. Default 'general'. */
  variant?: SectionTypeDescriptionVariant;
  /** Replaces the preset icon: any 24px React node, e.g. `<BookOpenIcon />` from `@heroicons/react/24/outline`. */
  icon?: ReactNode;
  /** Replaces the preset title ("General Section" / "Survey Section"). */
  title?: ReactNode;
  /** Replaces the preset one-line description. Children do the same. */
  description?: ReactNode;
}

const SECTION_TYPE_DESCRIPTION_PRESETS: Record<SectionTypeDescriptionVariant, { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; description: string }> = {
  general: { icon: BookOpenIcon, title: 'General Section', description: 'ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live' },
  survey: { icon: ClipboardDocumentListIcon, title: 'Survey Section', description: 'ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ' },
};

export const SectionTypeDescription = forwardRef<HTMLDivElement, SectionTypeDescriptionProps>(function SectionTypeDescription(
  { variant = 'general', icon, title, description: descriptionProp, className, children, ...rest },
  ref,
) {
  const preset = SECTION_TYPE_DESCRIPTION_PRESETS[variant] || SECTION_TYPE_DESCRIPTION_PRESETS.general;
  const PresetIcon = preset.icon;
  const description = descriptionProp === undefined ? (children === undefined ? preset.description : children) : descriptionProp;
  return (
    <div {...rest} ref={ref} className={cx('fs-section-type-description', `fs-section-type-description--${variant}`, className)}>
      <div className="fs-section-type-description__head">
        {icon === undefined ? <PresetIcon className="fs-icon" width={24} height={24} aria-hidden /> : icon || null}
        <span className="fs-section-type-description__title">{title === undefined ? preset.title : title}</span>
      </div>
      {description ? <div className="fs-section-type-description__text">{description}</div> : null}
    </div>
  );
});
