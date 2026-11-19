import React from 'react';
import { cx } from '../../utils/cx.js';
import { Icon } from '../../icon/Icon.jsx';

const SECTION_TYPE_ITEM_PRESETS = {
  general: { icon: 'book-open', title: 'General Section', description: 'ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live' },
  survey: { icon: 'clipboard-document-list', title: 'Survey Section', description: 'ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ' },
};

/** A clickable option for choosing the type of a section in a class. */
export function SectionTypeItem({ variant = 'general', icon, title, description: descriptionProp, active: activeProp, state, className, children, ...rest }) {
  const preset = SECTION_TYPE_ITEM_PRESETS[variant] || SECTION_TYPE_ITEM_PRESETS.general;
  const description = descriptionProp === undefined ? (children === undefined ? preset.description : children) : descriptionProp;
  const active = !!activeProp || state === 'active';
  return (
    <button type="button" {...rest} className={cx('fs-section-type-item', `fs-section-type-item--${variant}`, active && 'fs-section-type-item--active', className)} data-state={state || undefined} aria-pressed={active}>
      <span className="fs-section-type-item__head">
        {icon === undefined ? <Icon name={preset.icon} size={24} /> : icon || null}
        <span className="fs-section-type-item__title">{title === undefined ? preset.title : title}</span>
      </span>
      {description ? <span className="fs-section-type-item__text">{description}</span> : null}
    </button>
  );
}
