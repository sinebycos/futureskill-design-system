import type { ReactNode } from 'react';
import { Badge, type BadgeTone } from '../../src/components/Badge';

export const meta = { group: 'Feedback', order: 3 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const tones: BadgeTone[] = ['error', 'warning', 'success', 'information', 'neutral', 'brand'];
const cap = (t: string) => t.charAt(0).toUpperCase() + t.slice(1);

export default function BadgePreview() {
  return (
    <div className="fs-preview">
      <Row label="Medium 32">{tones.map((t) => <Badge key={t} tone={t}>{cap(t)}</Badge>)}</Row>
      <Row label="Small 24">{tones.map((t) => <Badge key={t} tone={t} size="small">{cap(t)}</Badge>)}</Row>
      <Row label="No icon">
        {tones.map((t) => <Badge key={t} tone={t} icon={false}>Label</Badge>)}
        <Badge tone="neutral" size="small" icon={false}>Label</Badge>
      </Row>
      <Row label="Badge dot">
        <Badge tone="neutral" icon={false} dot>Online</Badge>
        <Badge tone="neutral" icon={false} dot="busy">Busy</Badge>
        <Badge tone="neutral" icon={false} dot="away">Away</Badge>
        <Badge tone="neutral" icon={false} dot="offline">Offline</Badge>
        <Badge tone="neutral" icon={false} dot="notification">Notification</Badge>
        <Badge tone="success" size="small" dot>Label</Badge>
      </Row>
    </div>
  );
}
