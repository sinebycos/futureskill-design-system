import type { ReactNode } from 'react';
import { Slider } from '../../src/components/Slider';

export const meta = { group: 'Forms', order: 4 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const thumbs: [string, string] = ['Min value', 'Max value'];

export default function SliderPreview() {
  return (
    <div className="fs-preview">
      <Row label="Default"><Slider defaultValue={29} aria-label="Value" /></Row>
      <Row label="Range"><Slider variant="range" defaultValue={[21, 55]} thumbLabels={thumbs} aria-label="Range" /></Row>
      <Row label="Min / max">
        <Slider defaultValue={0} aria-label="Min" /><Slider defaultValue={100} aria-label="Max" />
      </Row>
      <Row label="Focus">
        <Slider defaultValue={29} state="focus" aria-label="Focus" />
        <Slider variant="range" defaultValue={[21, 55]} state="focus" thumbLabels={thumbs} aria-label="Focus range" />
      </Row>
      <Row label="Full width">
        <div style={{ flex: '1 1 0', minWidth: 0 }}><Slider fullWidth defaultValue={50} aria-label="Full width" /></div>
      </Row>
      <div className="fs-preview-inverse">
        <Row label={<span style={{ color: 'var(--text-inverse-weak)' }}>Inverse ground</span>}>
          <Slider defaultValue={29} aria-label="Value on inverse" />
          <Slider variant="range" defaultValue={[21, 55]} thumbLabels={thumbs} aria-label="Range on inverse" />
        </Row>
      </div>
    </div>
  );
}
