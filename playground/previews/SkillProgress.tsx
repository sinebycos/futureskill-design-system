import { SkillProgress } from '../../src/components/SkillProgress';

export const meta = { group: 'Feedback', order: 6 };

export default function SkillProgressPreview() {
  return (
    <div className="fs-preview">
      {[0, 25, 50, 75, 80, 100].map((v) => (
        <div key={v} className="fs-preview-row">
          <span className="fs-preview-label">{`${v}%`}</span>
          <div style={{ width: 396 }}><SkillProgress value={v} aria-label="Skill progress" /></div>
        </div>
      ))}
    </div>
  );
}
