import type { ReactNode } from 'react';
import { PasswordInput, type PasswordInputSize } from '../../src/components/PasswordInput';

export const meta = { group: 'Forms (legacy)', order: 2 };

const Block = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span className="fs-preview-label">{label}</span>
    <div className="fs-preview-row">{children}</div>
  </div>
);
const three = (size: PasswordInputSize) => [
  <PasswordInput key="a" size={size} placeholder="input password" />,
  <PasswordInput key="b" size={size} defaultValue="DJCAB-JO" />,
  <PasswordInput key="c" size={size} defaultValue="DJCAB-JODVOR-RIFGE8" defaultVisible state="focused" />,
];

export default function PasswordInputPreview() {
  return (
    <div className="fs-preview">
      <Block label="Large 40: empty / hidden / visible (focused)">{three('large')}</Block>
      <Block label="Medium 32">{three('medium')}</Block>
      <Block label="Small 24">{three('small')}</Block>
      <Block label="Visible without focus / disabled (not drawn in Figma)">
        <PasswordInput defaultValue="DJCAB-JODVOR-RIFGE8" defaultVisible />
        <PasswordInput defaultValue="DJCAB-JO" disabled />
      </Block>
    </div>
  );
}
