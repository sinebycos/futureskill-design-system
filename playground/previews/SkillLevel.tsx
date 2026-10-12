import { SkillLevel, type SkillLevelLevel } from '../../src/components/SkillLevel';

export const meta = { group: 'Learning', order: 50 };

// level names and ranges are the copy on the Figma layers
const levels: Array<[SkillLevelLevel, string, string?]> = [['not-start', 'Not start'], ['novice', 'Novice', '0-24th'], ['emerging', 'Emerging', '25th-49th'], ['intermediate', 'Intermediate', '40th-59th'], ['above-avg', 'Above Avg', '50th-79th'], ['excellent', 'Excellent', '80-100th']];

export default function SkillLevelPreview() {
  return (
    <div className="fs-preview">
      <div className="fs-preview-row">
        <span className="fs-preview-label" style={{ minWidth: 64 }}>Bars</span>
        {levels.map((l) => (
          <span key={l[0]} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, lineHeight: '18px', color: 'var(--text-weak)' }}><SkillLevel level={l[0]} />{l[1]}</span>
        ))}
      </div>
      <div className="fs-preview-row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
        <span className="fs-preview-label" style={{ minWidth: 64 }}>Band</span>
        <div style={{ display: 'flex' }}>
          {levels.slice(1).map((l) => <SkillLevel key={l[0]} variant="band" level={l[0]} range={l[2]} />)}
        </div>
        <SkillLevel variant="band" level="novice" range="0-24th" active={false} />
      </div>
    </div>
  );
}
