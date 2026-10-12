import type { ReactNode } from 'react';
import { AcademicCapIcon, ArrowRightIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@futureskill/design-system';

export const meta = { group: 'Actions', order: 1 };

const Row = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div className="fs-preview-row"><span className="fs-preview-label">{label}</span>{children}</div>
);
const tones = ['brand', 'neutral', 'destructive'] as const;

export default function ButtonPreview() {
  return (
    <div className="fs-preview">
      <Row label="Primary">
        {tones.map((t) => <Button key={t} tone={t}>ซื้อคอร์สนี้</Button>)}
        <Button state="hover">Hover</Button><Button state="click">Click</Button><Button disabled>Disabled</Button>
      </Row>
      <Row label="Secondary">
        {tones.map((t) => <Button key={t} variant="secondary" tone={t}>ดูรายละเอียดคลาส</Button>)}
        <Button variant="secondary" state="hover">Hover</Button><Button variant="secondary" state="click">Click</Button><Button variant="secondary" disabled>Disabled</Button>
      </Row>
      <Row label="Text">
        {tones.map((t) => <Button key={t} variant="text" tone={t}>ดูใบรับรอง</Button>)}
        <Button variant="text" state="hover">Hover</Button><Button variant="text" state="click">Click</Button><Button variant="text" disabled>Disabled</Button>
      </Row>
      <Row label="Sizes">
        <Button size="large">Large 54</Button><Button>Medium 40</Button><Button size="small">Small 32</Button><Button size="tiny">Tiny (legacy)</Button>
      </Row>
      <Row label="Icons">
        <Button iconLeft={<AcademicCapIcon />}>ดูใบรับรอง</Button>
        <Button variant="secondary" iconRight={<ArrowRightIcon />}>ดูรายละเอียดคลาส</Button>
        <Button iconOnly iconLeft={<ChevronLeftIcon />} aria-label="Back" />
        <Button variant="secondary" iconOnly size="small" iconLeft={<ChevronLeftIcon />} aria-label="Back" />
      </Row>
      <div className="fs-preview-inverse">
        <Row label={<span style={{ color: 'var(--text-inverse-weak)' }}>Inverse</span>}>
          <Button tone="inverse">Primary</Button><Button variant="secondary" tone="inverse">Secondary</Button><Button variant="text" tone="inverse">Text</Button><Button variant="secondary" tone="inverse" disabled>Disabled</Button>
        </Row>
      </div>
    </div>
  );
}
