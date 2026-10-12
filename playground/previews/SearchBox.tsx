import type { ReactNode } from 'react';
import { Cog6ToothIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
import { SearchBox, type SearchBoxProps } from '../../src/components/SearchBox';

export const meta = { group: 'Forms (legacy)', order: 3 };

const Block = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span className="fs-preview-label">{label}</span>
    <div className="fs-preview-row">{children}</div>
  </div>
);
const cog = <Cog6ToothIcon className="fs-icon" width={14} height={14} strokeWidth={2} aria-hidden />;
const mic = <MicrophoneIcon className="fs-icon" width={16} height={16} strokeWidth={2} aria-hidden />;
const enters = ['default', 'text', 'icon'] as const;
const three = (extra: Partial<SearchBoxProps>) =>
  enters.map((e) => <SearchBox key={e} enter={e} enterIcon={cog} placeholder="input search text" {...extra} />);

export default function SearchBoxPreview() {
  return (
    <div className="fs-preview">
      <Block label="Enter: default / text / icon">{three({})}</Block>
      <Block label="Filled, allow clear, suffix">{three({ defaultValue: 'search text', allowClear: true, suffixIcon: mic })}</Block>
      <Block label="Large 40">{three({ size: 'large', suffixIcon: mic })}</Block>
      <Block label="Small 24">{three({ size: 'small', defaultValue: 'search text', allowClear: true })}</Block>
      <Block label="Focused / disabled (not drawn in Figma, follow Input)">
        <SearchBox placeholder="input search text" state="focused" />
        <SearchBox defaultValue="search text" disabled />
        <SearchBox enter="text" enterText="Search" placeholder="input search text" />
      </Block>
    </div>
  );
}
