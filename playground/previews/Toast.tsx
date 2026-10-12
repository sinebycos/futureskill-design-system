import type { CSSProperties } from 'react';
import { Toast, type ToastTheme, type ToastVariant } from '../../src/components/Toast';

export const meta = { group: 'Feedback', order: 2 };

const copy = 'Wow so easy';
const types: ToastVariant[] = ['success', 'error', 'warning', 'info'];
// Figma shows the set on its dark canvas. A fixed mid-dark ground keeps the white, #121212 and coloured toasts all visible in both page themes.
const stage: CSSProperties = { display: 'grid', gridTemplateColumns: '112px 313px 313px', gap: 'var(--space-16)', alignItems: 'center', justifyContent: 'start', padding: 'var(--space-16)', borderRadius: 'var(--radius-8)', background: 'var(--analogous-800)' };

const Label = ({ text, rows }: { text: string; rows?: number }) => (
  <span className="fs-preview-label" style={{ color: 'var(--basic-base-dark-700)', gridRow: rows ? 'span ' + rows : undefined }}>{text}</span>
);
const Group = ({ theme, name }: { theme: ToastTheme; name: string }) => (
  <>
    <Label text={name} rows={2} />
    {types.map((t) => <Toast key={theme + t} variant={t} theme={theme} progress>{copy}</Toast>)}
  </>
);

export default function ToastPreview() {
  return (
    <div className="fs-preview">
      <div style={stage}>
        <Group theme="light" name="Light" />
        <Group theme="dark" name="Dark" />
        <Group theme="colored" name="Colored" />
        <Label text="Progress: No" />
        <Toast variant="success" theme="light">{copy}</Toast>
        <Toast variant="error" theme="colored">{copy}</Toast>
        <Label text="progress={25} / {100}" />
        <Toast variant="info" theme="dark" progress={25}>{copy}</Toast>
        <Toast variant="warning" theme="light" progress={100}>{copy}</Toast>
      </div>
    </div>
  );
}
