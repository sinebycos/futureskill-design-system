import type { ReactNode } from 'react';
import { CalendarDaysIcon, ChartBarIcon, ListBulletIcon, MapIcon, PhotoIcon, Squares2X2Icon, TableCellsIcon } from '@heroicons/react/24/outline';
import { SegmentedControl, type SegmentedControlOption } from '../../src/components/SegmentedControl';

export const meta = { group: 'Forms', order: 5 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
// the copy in the Figma variants: "Tab", then "Label 2" … "Label 7"
const tabs = (n: number): SegmentedControlOption[] =>
  Array.from({ length: n }, (_, k) => ({ value: k + 1, label: k === 0 ? 'Tab' : `Label ${k + 1}` }));
const glyphs = [Squares2X2Icon, ListBulletIcon, TableCellsIcon, CalendarDaysIcon, ChartBarIcon, MapIcon, PhotoIcon];
const icons = (n: number): SegmentedControlOption[] =>
  tabs(n).map((o, i) => {
    const Glyph = glyphs[i];
    return { value: o.value, label: o.label, icon: <Glyph /> };
  });
const counted: SegmentedControlOption[] = [{ value: 1, label: 'Tab', counter: '20' }, { value: 2, label: 'Tab', counter: '20' }, { value: 3, label: 'Tab', counter: '20' }];
const w = (px: number) => ({ width: px });

export default function SegmentedControlPreview() {
  return (
    <div className="fs-preview">
      <Row label="Default 48">
        <SegmentedControl options={tabs(2)} style={w(360)} aria-label="2 tabs" />
        <SegmentedControl options={tabs(3)} style={w(360)} aria-label="3 tabs" />
      </Row>
      <Row label="4 tabs">
        <SegmentedControl options={tabs(4)} style={w(360)} aria-label="4 tabs" />
        <SegmentedControl options={tabs(4)} defaultValue={3} style={w(360)} aria-label="4 tabs, third selected" />
      </Row>
      <Row label="7 tabs"><SegmentedControl options={tabs(7)} style={w(627)} aria-label="7 tabs" /></Row>
      <Row label="Small 38"><SegmentedControl size="small" options={tabs(4)} style={w(360)} aria-label="Small, 4 tabs" /></Row>
      <Row label="Small, 5 tabs"><SegmentedControl size="small" options={tabs(5)} style={w(449)} aria-label="Small, 5 tabs" /></Row>
      <Row label="Counter (legacy)"><SegmentedControl options={counted} style={w(360)} aria-label="With counters" /></Row>
      <Row label="Icon only (legacy)">
        <SegmentedControl iconOnly options={icons(2)} style={w(360)} aria-label="Icons, 2 tabs" />
        <SegmentedControl iconOnly options={icons(3)} style={w(360)} aria-label="Icons, 3 tabs" />
      </Row>
      <Row label="Icon only, 7"><SegmentedControl iconOnly options={icons(7)} style={w(627)} aria-label="Icons, 7 tabs" /></Row>
      <Row label="Focus"><SegmentedControl state="focus" options={tabs(3)} style={w(360)} aria-label="Focus ring" /></Row>
    </div>
  );
}
