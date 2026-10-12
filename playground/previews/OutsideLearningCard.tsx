import { useState, type ReactNode } from 'react';
import { OutsideLearningCard } from '../../src/components/OutsideLearningCard';

export const meta = { group: 'Learning', order: 1 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const copy = { title: 'การพัฒนาทักษะการสื่อสาร', description: 'หากเป็นหลักสูตรใหม่หรือมีเนื้อหาต่างจากเดิม ให้สร้างคลาสใหม่' };

export default function OutsideLearningCardPreview() {
  const [picked, pick] = useState<string | undefined>('b');
  const card = (id: string) => <OutsideLearningCard key={id} value={id} selected={picked === id} onSelect={pick} {...copy} />;
  return (
    <div className="fs-preview">
      <Row label="False">{card('a')}</Row>
      <Row label="True">{card('b')}</Row>
    </div>
  );
}
