function SkillProfile() {
  const { SkillGraph, SkillLevel, SkillProgress, Tabs } = window.FutureSkillDesignSystem_f8a410;
  const axes = [{ label: 'HTML &CSS', value: 37 }, { label: 'Javascript', value: 73 }, { label: 'GIT', value: 100 }, { label: 'API', value: 100 }, { label: 'React', value: 95 }, { label: 'Vue', value: 90 }];
  const levels = [['novice', '0-24th'], ['emerging', '25-49th'], ['intermediate', '50-74th'], ['above-avg', '75-89th'], ['excellent', '90-100th']];
  const card = { background: 'var(--background-raised)', border: '1px solid var(--stroke-weak)', borderRadius: 'var(--radius-16)', padding: 'var(--space-24)' };
  return (
    <div>
      <PageHeader title="ทักษะของฉัน" sub="ผลการประเมินทักษะล่าสุด 12/09/2025" />
      <div style={{ padding: '0 40px 40px', display: 'grid', gridTemplateColumns: 'minmax(0,1.3fr) minmax(0,1fr)', gap: 24 }}>
        <div style={card}>
          <div className="th-subtitle-4" style={{ marginBottom: 8 }}>Front-end Developer</div>
          <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}><SkillGraph size="mobile" axes={axes} compare={[60, 72, 80, 70, 60, 50]} /></div>
        </div>
        <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="th-subtitle-4">คะแนนรายทักษะ</div>
          {axes.map((a) => (
            <div key={a.label} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }} className="th-p5"><span>{a.label}</span><span style={{ color: 'var(--text-weak)' }}>{a.value}%</span></div>
              <SkillProgress value={a.value} />
            </div>
          ))}
        </div>
        <div style={{ ...card, gridColumn: '1 / -1' }}>
          <div className="th-subtitle-4" style={{ marginBottom: 16 }}>ระดับทักษะของคุณ</div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>{levels.map(([l, r]) => <SkillLevel key={l} variant="band" level={l} active={l === 'intermediate'} range={r} />)}</div>
        </div>
      </div>
    </div>
  );
}
window.SkillProfile = SkillProfile;
