import type { ReactNode } from 'react';
import { Icon } from '@futureskill/design-system/icon';
import './Icon.css';

export const meta = { group: 'Foundations', order: 1 };

const names = ['academic-cap', 'book-open', 'play-circle', 'clipboard-document-list', 'trophy', 'chart-bar', 'calendar-days', 'clock', 'user', 'users', 'bell', 'magnifying-glass'];
const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);

export default function IconPreview() {
  return (
    <div className="fs-preview">
      <div className="ic-grid">
        {names.map((n) => <div className="ic-cell" key={n}><Icon name={n} />{n}</div>)}
      </div>
      <Row label="Variants">
        <Icon name="check-circle" /><Icon name="check-circle" variant="solid" /><Icon name="check-circle" variant="mini" /><Icon name="check-circle" variant="micro" />
        <span className="fs-preview-label">outline 24 · solid 24 · mini 20 · micro 16</span>
      </Row>
      <Row label="Ink">
        {['icon-neutral', 'icon-brand', 'icon-secondary-brand', 'icon-success', 'icon-warning', 'icon-error', 'icon-disabled'].map((t) => <Icon key={t} name="star" color={`var(--${t})`} />)}
      </Row>
      <Row label="Size">
        {[16, 20, 24, 32, 48].map((s) => <Icon key={s} name="academic-cap" size={s} />)}
      </Row>
    </div>
  );
}
