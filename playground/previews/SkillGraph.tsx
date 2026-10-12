import type { CSSProperties, ReactNode } from 'react';
import { SkillGraph, type SkillGraphProps } from '../../src/components/SkillGraph';

export const meta = { group: 'Learning', order: 50 };

// copy and values from the Figma "Radar Chart" variants (values read off the vertex positions)
const axes = [{ label: 'HTML &CSS', value: 37 }, { label: 'Javascript', value: 73 }, { label: 'GIT', value: 100 }, { label: 'API', value: 100 }, { label: 'React', value: 95 }, { label: 'Vue', value: 90 }, { label: 'Angular', value: 40 }, { label: 'Data 8', value: 74 }];
const pick = (values: number[]) => values.map((v, i) => ({ label: axes[i].label, value: v }));
const six = pick([60, 72, 94, 92, 49, 22]), sixB = [79, 80, 81, 68, 90, 68], four = pick([40, 53, 80, 63]), fourB = [73, 76, 64, 89];

// the Dark tone sits on background-black, which stays dark in both themes
const Over = ({ label, dark, children }: { label: string; dark?: boolean; children: ReactNode }) => {
  const box: CSSProperties = { position: 'relative', ...(dark ? { background: 'var(--background-black)', padding: 16, borderRadius: 8 } : {}) };
  return (
    <div style={box}>
      <span className="fs-preview-label" style={{ position: 'absolute', left: dark ? 16 : 0, top: dark ? 16 : 0, color: dark ? 'var(--deep-purple-200)' : undefined }}>{label}</span>
      {children}
    </div>
  );
};
const Mini = ({ label, ...props }: { label: string } & SkillGraphProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <span className="fs-preview-label">{label}</span>
    <SkillGraph size="mini" {...props} />
  </div>
);

export default function SkillGraphPreview() {
  return (
    <div className="fs-preview">
      <div className="fs-preview-row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
        <Over label="Default"><SkillGraph axes={axes} /></Over>
        <div style={{ display: 'grid', gridTemplateColumns: '166px 166px', gap: 16 }}>
          <Mini label="Mini, 6 axes" axes={six} compare={sixB} />
          <Mini label="Mini, fill false" axes={six} compare={sixB} fill={false} />
          <Mini label="Mini, 4 axes" axes={four} compare={fourB} />
          <Mini label="Circle grid" axes={pick([73, 76, 64, 89, 80])} grid="circle" fill={false} />
        </div>
      </div>
      <div className="fs-preview-row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
        <Over label="Mobile"><SkillGraph axes={axes} size="mobile" /></Over>
        <Over label="Dark" dark><SkillGraph axes={axes} size="mobile" tone="dark" /></Over>
      </div>
    </div>
  );
}
