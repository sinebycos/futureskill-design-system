function MyLearning({ onToast }) {
  const { SegmentedControl, ProgressBar, Button, Badge, Alert, Icon, TextLink } = window.FutureSkillDesignSystem_f8a410;
  const [filter, setFilter] = React.useState('progress');
  const courses = [
    { t: 'Chat GPT For Everyone', v: 12, m: 20, s: 'progress' },
    { t: 'Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics', v: 3, m: 18, s: 'progress' },
    { t: 'การสื่อสารอย่างมืออาชีพ', v: 10, m: 10, s: 'done' },
    { t: 'React Advanced Patterns', v: 0, m: 24, s: 'progress' },
  ].filter((c) => filter === 'all' || c.s === filter);
  return (
    <div>
      <PageHeader title="การเรียนของฉัน" sub="ติดตามความคืบหน้าของคอร์สที่คุณลงทะเบียนไว้" />
      <div style={{ padding: '0 40px', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Alert tone="brand" action="ดูรายละเอียด" onAction={() => onToast('เปิดรายละเอียดคอร์สแล้ว')}>คุณได้รับมอบหมาย Road to Chat GPT For Everyone จาก Admin</Alert>
        <SegmentedControl size="small" value={filter} onChange={setFilter} options={[{ value: 'all', label: 'ทั้งหมด' }, { value: 'progress', label: 'กำลังเรียน' }, { value: 'done', label: 'เรียนจบแล้ว' }]} style={{ alignSelf: 'flex-start' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 24, paddingBottom: 40 }}>
          {courses.map((c) => (
            <div key={c.t} style={{ background: 'var(--background-raised)', borderRadius: 'var(--radius-16)', boxShadow: 'var(--shadow-card-course)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <CoverPh />
              <div style={{ padding: 'var(--space-16)', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                {c.s === 'done' ? <Badge size="small" tone="success" style={{ alignSelf: 'flex-start' }}>เรียนจบแล้ว</Badge> : null}
                <div className="th-subtitle-5" style={{ minHeight: 44 }}>{c.t}</div>
                <div style={{ paddingTop: 28 }}><ProgressBar value={c.v} max={c.m} /></div>
                <Button size="small" variant={c.s === 'done' ? 'secondary' : 'primary'} style={{ alignSelf: 'flex-start' }} onClick={() => onToast(c.s === 'done' ? 'ดาวน์โหลดใบรับรองแล้ว' : 'เรียนต่อจากบทที่ ' + (c.v + 1))}>
                  {c.s === 'done' ? 'ดูใบรับรอง' : c.v ? 'เรียนต่อ' : 'เริ่มเรียน'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
window.MyLearning = MyLearning;
