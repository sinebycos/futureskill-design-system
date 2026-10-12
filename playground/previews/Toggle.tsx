import type { ReactNode } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';
import { Toggle, type ToggleProps, type ToggleSize } from '../../src/components/Toggle';

export const meta = { group: 'Forms', order: 4 };

const Cell = ({ children }: { children: ReactNode }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-12)', width: 144 }}>{children}</div>
);
const kinds: Array<[string, ToggleProps]> = [
  ['Text: false', {}],
  ['Text: true', { checkedText: 'ON', uncheckedText: 'OFF' }],
  ['Icon: true', { checkedIcon: <CheckIcon className="fs-icon" width={12} height={12} aria-hidden />, uncheckedIcon: <XMarkIcon className="fs-icon" width={12} height={12} aria-hidden /> }],
];
const states: Array<[string, ToggleProps]> = [
  ['Default', {}],
  ['Pressing', { state: 'press' }],
  ['Focusing', { state: 'focus' }],
  ['Loading', { loading: true }],
  ['Disabled', { disabled: true }],
];

const Head = ({ title }: { title: string }) => (
  <div className="fs-preview-row">
    <span className="fs-preview-label" style={{ color: 'var(--text-strong)' }}>{title}</span>
    {states.map(([s]) => <Cell key={s}><span className="fs-preview-label" style={{ minWidth: 0 }}>{s}</span></Cell>)}
  </div>
);
const Rows = ({ size }: { size: ToggleSize }) => (
  <>
    {kinds.map(([kind, kp]) => (
      <div className="fs-preview-row" key={kind}>
        <span className="fs-preview-label">{kind}</span>
        {states.map(([s, sp]) => {
          const name = `${size}, ${kind}, ${s}`;
          return (
            <Cell key={s}>
              <Toggle defaultChecked aria-label={`${name}, checked`} size={size} {...kp} {...sp} />
              <Toggle aria-label={`${name}, unchecked`} size={size} {...kp} {...sp} />
            </Cell>
          );
        })}
      </div>
    ))}
  </>
);

export default function TogglePreview() {
  return (
    <div className="fs-preview">
      <Head title="medium" />
      <Rows size="medium" />
      <Head title="small" />
      <Rows size="small" />
    </div>
  );
}
