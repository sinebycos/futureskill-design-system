import { useState, type ReactNode } from 'react';
import { SurveySelectionCard, type SurveySelectionCardProps } from '../../src/components/SurveySelectionCard';

export const meta = { group: 'Learning', order: 6 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const copy = { title: 'Career Development Survey', meta: ['20 คำถาม', 'ทำแล้ว 81 ครั้ง'] };

export default function SurveySelectionCardPreview() {
  const [picked, pick] = useState<string | undefined>('b');
  const card = (id: string, extra?: Partial<SurveySelectionCardProps>) => (
    <SurveySelectionCard key={id} value={id} selected={picked === id} onSelect={pick} {...copy} {...extra} />
  );
  return (
    <div className="fs-preview" role="radiogroup" aria-label="แบบสอบถาม">
      <Row label="False">{card('a')}</Row>
      <Row label="True">{card('b')}</Row>
      <Row label="New">{card('c', { isNew: true })}</Row>
      <Row label="Disabled">{card('d', { disabled: true })}</Row>
    </div>
  );
}
