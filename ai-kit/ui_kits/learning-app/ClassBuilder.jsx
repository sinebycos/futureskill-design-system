function ClassBuilder({ onToast }) {
  const { Stepper, SectionTypeItem, TestSelectionCard, SurveySelectionCard, OutsideLearningCard, TextInput, Button, SearchBox, Icon } = window.FutureSkillDesignSystem_f8a410;
  const [step, setStep] = React.useState(0);
  const [type, setType] = React.useState('general');
  const [test, setTest] = React.useState('t1');
  const card = { background: 'var(--background-raised)', border: '1px solid var(--stroke-weak)', borderRadius: 'var(--radius-16)', padding: 'var(--space-24)', display: 'flex', flexDirection: 'column', gap: 16 };
  return (
    <div>
      <PageHeader title="สร้างคลาส" sub="เพิ่ม Section ให้กับคลาสของคุณ" />
      <div style={{ padding: '0 40px 40px', maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Stepper steps={['ข้อมูลทั่วไป', 'เลือกประเภท Section', 'เนื้อหา', 'ตรวจสอบ']} current={step + 1} />
        {step === 0 ? (
          <div style={card}>
            <TextInput label="ชื่อ Section" required placeholder="เช่น บทนำ" fullWidth />
            <div className="th-subtitle-5">ประเภท Section</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <SectionTypeItem variant="general" active={type === 'general'} onClick={() => setType('general')} />
              <SectionTypeItem variant="survey" active={type === 'survey'} onClick={() => setType('survey')} />
            </div>
          </div>
        ) : (
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
              <div className="th-subtitle-5">{type === 'general' ? 'เลือกแบบทดสอบ' : 'เลือกแบบสอบถาม'}</div>
              <SearchBox placeholder="ค้นหา" size="medium" />
            </div>
            <div role="radiogroup" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {type === 'general' ? (
                <>
                  <TestSelectionCard value="t1" selected={test === 't1'} onSelect={setTest} title="React Advanced Patterns" meta={['20 คำถาม', 'คะแนนผ่าน 80%', 'ทำแล้ว 81 ครั้ง']} />
                  <TestSelectionCard value="t2" selected={test === 't2'} onSelect={setTest} title="Chat GPT For Everyone — แบบทดสอบท้ายบท" meta={['15 คำถาม', 'คะแนนผ่าน 70%', 'ทำแล้ว 240 ครั้ง']} isNew openEnd />
                  <TestSelectionCard value="t3" title="แบบทดสอบก่อนเรียน (ปิดใช้งาน)" meta={['10 คำถาม']} disabled />
                </>
              ) : (
                <>
                  <SurveySelectionCard value="t1" selected={test === 't1'} onSelect={setTest} title="แบบสอบถามความพึงพอใจหลังเรียน" meta={['12 คำถาม', 'ทำแล้ว 81 ครั้ง']} />
                  <SurveySelectionCard value="t2" selected={test === 't2'} onSelect={setTest} title="แบบสำรวจความต้องการเรียนรู้" meta={['8 คำถาม', 'ทำแล้ว 12 ครั้ง']} isNew />
                </>
              )}
            </div>
            <div className="th-subtitle-5">การเรียนรู้จากภายนอก</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <OutsideLearningCard title="อบรมภายนอก" description="การอบรมหรือสัมมนาที่จัดโดยองค์กรภายนอก" />
              <OutsideLearningCard title="หนังสือ / บทความ" description="การเรียนรู้ด้วยตนเองจากหนังสือหรือบทความ" />
            </div>
          </div>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
          {step > 0 ? <Button variant="secondary" tone="neutral" onClick={() => setStep(0)}>ย้อนกลับ</Button> : null}
          <Button iconRight={step === 0 ? <Icon name="arrow-right" /> : null} onClick={() => (step === 0 ? setStep(1) : onToast('บันทึก Section เรียบร้อยแล้ว'))}>{step === 0 ? 'ถัดไป' : 'บันทึก'}</Button>
        </div>
      </div>
    </div>
  );
}
window.ClassBuilder = ClassBuilder;
