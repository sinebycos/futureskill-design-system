import { useState, type ReactNode } from 'react';
import { SectionTypeItem } from '../../src/components/SectionTypeItem';

export const meta = { group: 'Learning', order: 50 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);

export default function SectionTypeItemPreview() {
  const [picked, pick] = useState<'general' | 'survey' | null>(null);
  return (
    <div className="fs-preview">
      <Row label="Default"><SectionTypeItem variant="general" active={picked === 'general'} onClick={() => pick('general')} /></Row>
      <Row label="Default, survey"><SectionTypeItem variant="survey" active={picked === 'survey'} onClick={() => pick('survey')} /></Row>
      <Row label="Hover"><SectionTypeItem variant="general" state="hover" /></Row>
      <Row label="Active"><SectionTypeItem variant="general" active /></Row>
    </div>
  );
}
