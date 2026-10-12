import type { ReactNode } from 'react';
import { SectionTypeDescription } from '../../src/components/SectionTypeDescription';

export const meta = { group: 'Learning', order: 50 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);

export default function SectionTypeDescriptionPreview() {
  return (
    <div className="fs-preview">
      <Row label="General"><SectionTypeDescription variant="general" /></Row>
      <Row label="Survey"><SectionTypeDescription variant="survey" /></Row>
    </div>
  );
}
