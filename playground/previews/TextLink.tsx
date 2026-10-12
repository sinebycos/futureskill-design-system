import type { ReactNode } from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { TextLink, type TextLinkProps } from '../../src/components/TextLink';

export const meta = { group: 'Actions', order: 2 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const states: Array<[string, TextLinkProps['state']]> = [['Default', undefined], ['Hover', 'hover'], ['Press', 'press'], ['Focus', 'focus'], ['Disabled', 'disabled']];
const stateRow = (extra: TextLinkProps) => states.map(([label, state]) => <TextLink key={label} state={state} {...extra}>{label}</TextLink>);
const inv = (text: string) => <span style={{ color: 'var(--text-inverse-weak)' }}>{text}</span>;
const icon = () => <ArrowsRightLeftIcon className="fs-icon" width={20} height={20} aria-hidden />;

export default function TextLinkPreview() {
  return (
    <div className="fs-preview">
      <Row label="Tone">
        <TextLink href="#">Default</TextLink>
        <TextLink tone="neutral-strong">Neutral strong</TextLink>
        <TextLink tone="neutral-weak">Neutral weak</TextLink>
        <TextLink tone="destructive">Destructive</TextLink>
      </Row>
      <Row label="Underline: True">{stateRow({})}</Row>
      <Row label="Underline: False">{stateRow({ underline: false })}</Row>
      <Row label="Size, weight">
        <TextLink>Small Bold</TextLink>
        <TextLink weight="regular">Small Regular</TextLink>
        <TextLink size="tiny">Tiny Bold</TextLink>
        <TextLink size="tiny" weight="regular">Tiny Regular</TextLink>
      </Row>
      <Row label="Icons">
        <TextLink iconLeft={icon()}>Label</TextLink>
        <TextLink iconRight={icon()}>Label</TextLink>
        <TextLink iconLeft={icon()} iconRight={icon()}>Label</TextLink>
        <TextLink size="tiny" weight="regular" iconRight={icon()}>Label</TextLink>
        <TextLink tone="destructive" iconLeft={icon()}>Label</TextLink>
        <TextLink tone="neutral-strong" iconRight={icon()}>Label</TextLink>
      </Row>
      <div className="fs-preview-inverse fs-preview" style={{ padding: 'var(--space-16)' }}>
        <Row label={inv('Inverse strong')}>{stateRow({ tone: 'inverse-strong' })}</Row>
        <Row label={inv('Inverse weak')}>{stateRow({ tone: 'inverse-weak', underline: false })}</Row>
      </div>
    </div>
  );
}
