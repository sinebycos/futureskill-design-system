import type { ReactNode } from 'react';
import { Textarea } from '../../src/components/Textarea';

export const meta = { group: 'Forms (legacy)', order: 4 };

const copy = 'A design system for enterprise-level products. Create an efficient and enjoyable work experience.';
const hint = 'Autosize height based on content lines';
const Block = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span className="fs-preview-label">{label}</span>
    <div className="fs-preview-row" style={{ alignItems: 'flex-start' }}>{children}</div>
  </div>
);

export default function TextareaPreview() {
  return (
    <div className="fs-preview">
      <Block label="Medium: empty / filled with count">
        <Textarea placeholder={hint} />
        <Textarea defaultValue={copy} showCount maxLength={100} />
      </Block>
      <Block label="Hovered / focused">
        <Textarea placeholder={hint} state="hovered" />
        <Textarea defaultValue={copy} state="focused" />
      </Block>
      <Block label="Disabled">
        <Textarea placeholder={hint} showCount maxLength={100} disabled />
        <Textarea defaultValue={copy} showCount maxLength={100} disabled />
      </Block>
      <Block label="Large / small">
        <Textarea size="large" rows={3} defaultValue={copy} showCount maxLength={100} />
        <Textarea size="small" defaultValue={copy} showCount maxLength={100} />
      </Block>
    </div>
  );
}
