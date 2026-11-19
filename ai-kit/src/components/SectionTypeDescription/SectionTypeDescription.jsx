import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

const SECTION_TYPE_DESCRIPTION_PRESETS = {
  general: { icon: 'book-open', title: 'General Section', description: 'ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live' },
  survey: { icon: 'clipboard-document-list', title: 'Survey Section', description: 'ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ' },
};

/** A static outlined box that names a class section type and explains it in one line. */
export function SectionTypeDescription({ variant = 'general', icon, title, description: descriptionProp, className, children, ...rest }) {
  const preset = SECTION_TYPE_DESCRIPTION_PRESETS[variant] || SECTION_TYPE_DESCRIPTION_PRESETS.general;
  const description = descriptionProp === undefined ? (children === undefined ? preset.description : children) : descriptionProp;
  return (
    <div {...rest} className={cx('fs-section-type-description', `fs-section-type-description--${variant}`, className)}>
      <div className="fs-section-type-description__head">
        {icon === undefined ? <Icon name={preset.icon} size={24} /> : icon || null}
        <span className="fs-section-type-description__title">{title === undefined ? preset.title : title}</span>
      </div>
      {description ? <div className="fs-section-type-description__text">{description}</div> : null}
    </div>
  );
}
