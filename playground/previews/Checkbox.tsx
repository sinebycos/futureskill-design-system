import type { ReactNode } from 'react';
import { Checkbox, CheckboxGroup, type CheckboxProps } from '../../src/components/Checkbox';

export const meta = { group: 'Forms', order: 3 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row" style={{ alignItems: 'flex-start' }}><span className="fs-preview-label">{label}</span>{children}</div>
);
const states: Array<[string, CheckboxProps]> = [
  ['Unchecked', {}],
  ['Checked', { defaultChecked: true }],
  ['Indeterminate', { indeterminate: true }],
  ['Hover', { state: 'hover' }],
  ['Disabled', { disabled: true }],
  ['Disabled checked', { disabled: true, defaultChecked: true }],
];
const items = (n: number) => Array.from({ length: n }, (_, i) => 'item' + (i + 1 < 10 ? '0' : '') + (i + 1));

export default function CheckboxPreview() {
  return (
    <div className="fs-preview">
      <Row label="Checkbox">
        {states.map(([label, p]) => (
          <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'var(--space-12)', width: 112 }}>
            <span className="fs-preview-label">{label}</span>
            <Checkbox {...p}>Label</Checkbox>
            <Checkbox aria-label={label} {...p} />
          </div>
        ))}
      </Row>
      <Row label="Group vertical">
        <CheckboxGroup options={items(3)} defaultValue={['item01']} aria-label="vertical" />
      </Row>
      <Row label="Group horizontal">
        <CheckboxGroup layout="horizontal" options={items(5)} defaultValue={['item01']} aria-label="horizontal" />
      </Row>
    </div>
  );
}
