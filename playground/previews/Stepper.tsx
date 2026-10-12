import type { ReactNode } from 'react';
import { Stepper, StepperStep, type StepperStepState } from '../../src/components/Stepper';

export const meta = { group: 'Navigation', order: 2 };

const Block = ({ label, children }: { label: ReactNode; children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><span className="fs-preview-label">{label}</span>{children}</div>
);
const labels = (n: number) => Array.from({ length: n }, (_, i) => `Placeholder ${i + 1}`);
const W = { width: 618 };
const positions = ['start', 'middle', 'end'] as const;
const StateRow = ({ name, state }: { name: string; state: StepperStepState }) => (
  <div className="fs-preview-row">
    <span className="fs-preview-label">{name}</span>
    <Stepper style={{ width: 381 }} aria-label={`Step, ${name}`}>
      {positions.map((p) => <StepperStep key={p} state={state} position={p} aria-current={undefined}>Step placeholder</StepperStep>)}
    </Stepper>
  </div>
);

export default function StepperPreview() {
  return (
    <div className="fs-preview">
      <Block label="Amount 3, Complete steps: None"><Stepper steps={labels(3)} current={0} style={W} /></Block>
      <Block label="Amount 4, Complete steps: 2"><Stepper steps={labels(4)} current={2} style={W} /></Block>
      <Block label="Amount 5, Complete steps: 3"><Stepper steps={labels(5)} current={3} style={W} /></Block>
      <Block label="Amount 5, All Done"><Stepper steps={labels(5)} current={5} style={W} /></Block>
      <Block label="Step: State by Position (Start, Middle, End)">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <StateRow name="Default" state="default" />
          <StateRow name="Active" state="active" />
          <StateRow name="Done" state="done" />
        </div>
      </Block>
      <div className="fs-preview-inverse">
        <Block label={<span style={{ color: 'var(--text-inverse-weak)' }}>On background-inverse: Amount 5, Complete steps: 2</span>}>
          <Stepper steps={labels(5)} current={2} style={W} />
        </Block>
      </div>
    </div>
  );
}
