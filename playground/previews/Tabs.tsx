import type { ReactNode } from 'react';
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import { Tabs, TabsItem, type TabsItemData, type TabsItemState } from '../../src/components/Tabs';

export const meta = { group: 'Navigation', order: 1 };

const Block = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><span className="fs-preview-label">{label}</span>{children}</div>
);
const eight = (extra?: Partial<TabsItemData>): TabsItemData[] => [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ id: String(n), label: 'Label', ...extra }));
const states: Array<[TabsItemState | undefined, string]> = [[undefined, 'Default'], ['hover', 'Hover'], ['press', 'Press'], ['focus', 'Focus'], ['disabled', 'Disabled']];
const StateRow = ({ selected }: { selected: boolean }) => (
  <div className="fs-preview-row" role="tablist" style={{ padding: '4px 0' }}>
    {states.map(([state, label]) => (
      <TabsItem key={label} label={label} icon={<ArrowsRightLeftIcon />} selected={selected} state={state} tabIndex={-1} />
    ))}
  </div>
);

export default function TabsPreview() {
  return (
    <div className="fs-preview">
      <Block label="Type = Text"><Tabs items={eight()} aria-label="Text tabs" /></Block>
      <Block label="Type = Icons"><Tabs items={eight({ icon: <ArrowsRightLeftIcon /> })} aria-label="Icon tabs" /></Block>
      <Block label="Badge, and a disabled tab">
        <Tabs
          defaultValue="2"
          aria-label="Tabs with badges"
          items={[
            { id: '1', label: 'Label', badge: '8' },
            { id: '2', label: 'Label', badge: '8' },
            { id: '3', label: 'Label', icon: <ArrowsRightLeftIcon />, badge: '8' },
            { id: '4', label: 'Label', icon: <ArrowsRightLeftIcon /> },
            { id: '5', label: 'Label', icon: <ArrowsRightLeftIcon />, disabled: true },
          ]}
        />
      </Block>
      <Block label="Unselected: Default, Hover, Press, Focus, Disabled"><StateRow selected={false} /></Block>
      <Block label="Selected: Default, Hover, Press, Focus, Disabled"><StateRow selected /></Block>
    </div>
  );
}
