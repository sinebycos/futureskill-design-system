import type { ReactNode } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Input, type InputSize } from '../../src/components/Input';

export const meta = { group: 'Forms (legacy)', order: 1 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const states = (size: InputSize) => [
  <Input key="a" size={size} placeholder="example" />,
  <Input key="b" size={size} defaultValue="HTML" state="focused" />,
  <Input key="c" size={size} defaultValue="HTML" disabled />,
];

export default function InputPreview() {
  return (
    <div className="fs-preview">
      <Row label="Large 40">{states('large')}</Row>
      <Row label="Medium 32">{states('medium')}</Row>
      <Row label="Small 24">{states('small')}</Row>
      <Row label="Filled">
        <Input size="large" defaultValue="HTML" /><Input defaultValue="HTML" /><Input size="small" defaultValue="HTML" />
      </Row>
      <Row label="Prefix / suffix">
        <Input prefixIcon={<Cog6ToothIcon />} placeholder="example" />
        <Input suffix=".com" defaultValue="HTML" />
        <Input prefixIcon={<Cog6ToothIcon />} suffixIcon={<Cog6ToothIcon />} defaultValue="HTML" />
      </Row>
      <Row label="Addons">
        <Input addonBefore="http://" placeholder="example" />
        <Input addonAfterIcon={<Cog6ToothIcon />} defaultValue="HTML" />
        <Input size="large" addonBefore="https://" addonAfterIcon={<Cog6ToothIcon />} placeholder="example" />
      </Row>
    </div>
  );
}
