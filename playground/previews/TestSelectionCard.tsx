import { useState, type ReactNode } from 'react';
import { TestSelectionCard, type TestSelectionCardProps } from '../../src/components/TestSelectionCard';

export const meta = { group: 'Learning', order: 7 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const copy = { title: 'React Advanced Patterns', meta: ['20 คำถาม', 'คะแนนผ่าน 80%', 'ทำแล้ว 81 ครั้ง'] };

export default function TestSelectionCardPreview() {
  const [picked, pick] = useState<string | undefined>('b');
  const card = (id: string, extra?: Partial<TestSelectionCardProps>) => (
    <TestSelectionCard key={id} value={id} selected={picked === id} onSelect={pick} {...copy} {...extra} />
  );
  return (
    <div className="fs-preview" role="radiogroup" aria-label="แบบทดสอบ">
      <Row label="False">{card('a')}</Row>
      <Row label="True">{card('b')}</Row>
      <Row label="New, open-end">{card('c', { isNew: true, openEnd: true })}</Row>
      <Row label="Disabled">{card('d', { disabled: true })}</Row>
    </div>
  );
}
