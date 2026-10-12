import type { ReactNode } from 'react';
import { ProgressBar } from '../../src/components/ProgressBar';

export const meta = { group: 'Feedback', order: 5 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const Bar = ({ value, width = 392 }: { value: number; width?: number }) => (
  <div style={{ width }}><ProgressBar value={value} aria-label="Progress" /></div>
);

export default function ProgressBarPreview() {
  return (
    <div className="fs-preview">
      <Row label="Start"><Bar value={0} /></Row>
      <Row label="Progress"><Bar value={50} /></Row>
      <Row label="Finish"><Bar value={100} /></Row>
      <Row label="Other values"><Bar value={25} width={188} /><Bar value={80} width={188} /></Row>
    </div>
  );
}
