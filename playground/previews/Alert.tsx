import { Alert, type AlertTone } from '../../src/components/Alert';

export const meta = { group: 'Feedback', order: 1 };

const copy = 'Lorem ipsum dolor sit amet consec tetur adipiscing elit';
const tones: AlertTone[] = ['error', 'warning', 'success', 'information', 'neutral', 'brand', 'inverse-neutral', 'inverse-brand'];
const mobileTones: AlertTone[] = ['error', 'information', 'inverse-neutral', 'inverse-brand'];

export default function AlertPreview() {
  return (
    <div className="fs-preview">
      <span className="fs-preview-label">Desktop: error, warning, success, information, neutral, brand, inverse neutral, inverse brand</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {tones.map((t) => <Alert key={t} tone={t} action="Label">{copy}</Alert>)}
      </div>
      <span className="fs-preview-label">Mobile: error, information, inverse neutral, inverse brand</span>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)' }}>
        {mobileTones.map((t) => <Alert key={t} tone={t} device="mobile" action="Label">{copy}</Alert>)}
      </div>
    </div>
  );
}
