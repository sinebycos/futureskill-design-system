import type { ReactNode } from 'react';
import { OjtMethodBadge, type OjtMethod } from '../../src/components/OjtMethodBadge';

export const meta = { group: 'Feedback', order: 4 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const badge = (m: OjtMethod) => <OjtMethodBadge key={m} method={m} />;

export default function OjtMethodBadgePreview() {
  return (
    <div className="fs-preview">
      <Row label="Methods">{(['apprenticeship', 'orientation', 'shadowing', 'mentoring'] as const).map(badge)}</Row>
      <Row label="">{(['coaching', 'job-rotation', 'cross-training', 'simulated-training'] as const).map(badge)}</Row>
    </div>
  );
}
