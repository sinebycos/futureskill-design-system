import type { ReactNode } from 'react';
import { EyeSlashIcon } from '@heroicons/react/16/solid';
import { TextInput } from '../../src/components/TextInput';

export const meta = { group: 'Forms', order: 1 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row" style={{ alignItems: 'flex-end' }}>
    <span className="fs-preview-label" style={{ alignSelf: 'center' }}>{label}</span>{children}
  </div>
);

export default function TextInputPreview() {
  return (
    <div className="fs-preview">
      <Row label="Default">
        <TextInput label="Label" required />
        <TextInput label="Label" optional hint="Hint text" placeholder="Placeholder" />
      </Row>
      <Row label="Filled / icon">
        <TextInput label="Label" required defaultValue="Value" />
        <TextInput label="Label" required defaultValue="Value" icon={<EyeSlashIcon className="fs-icon" width={16} height={16} aria-hidden />} />
      </Row>
      <Row label="Hover / press">
        <TextInput label="Label" required state="hover" />
        <TextInput label="Label" required state="press" />
      </Row>
      <Row label="Focus / disabled">
        <TextInput label="Label" required state="focus" />
        <TextInput label="Label" required defaultValue="Value" disabled />
      </Row>
      <Row label="Error">
        <TextInput label="Label" required error="Error message" />
        <TextInput label="Label" required error="Error message" defaultValue="Value" state="focus" />
      </Row>
      <Row label="No label">
        <TextInput placeholder="Placeholder" aria-label="Label" />
        <TextInput placeholder="Placeholder" aria-label="Label" invalid state="hover" />
      </Row>
    </div>
  );
}
