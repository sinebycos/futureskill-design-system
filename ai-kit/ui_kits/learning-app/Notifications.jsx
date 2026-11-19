function Notifications({ onToast }) {
  const { NotiItem, NotiItemHighlight, Tabs, Button, Icon } = window.FutureSkillDesignSystem_f8a410;
  const [tab, setTab] = React.useState('all');
  const [read, setRead] = React.useState({});
  const t = '27 วันที่ผ่านมา';
  const ph = <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', background: 'var(--primary-neutral-100)', color: 'var(--primary-neutral-600)' }}><Icon name="photo" /></span>;
  const items = [
    { id: 1, image: ph, title: 'คุณได้ลงทะเบียนสำเร็จแล้ว!', message: 'คุณได้ลงทะเบียน Chat GPT For Everyone เริ่มอัพสกิลกันเลย!', unread: true },
    { id: 2, image: '../../assets/logos/favicon.png', media: 'mark', title: 'คุณได้รับมอบหมายตอนนี้!', message: 'คุณได้รับมอบหมาย Road to Chat GPT For Everyone จาก Admin', unread: true },
    { id: 3, image: ph, title: 'ยินดีด้วย การเรียนของคุณสำเร็จแล้ว', message: 'การเรียน Chat GPT For Everyone ของคุณสำเร็จแล้ว', action: 'ดูใบรับรอง' },
    { id: 4, tone: 'green', image: ph, titleLines: 1, title: '🔔 เหลืออีก 3 เดือน! ครบกำหนดการฝึกอบรม', message: 'การฝึกอบรม “Creative Drawing วาดรูปสร้างรายได้จากการเขียน Webcomics จากตัวละครของคุณ” ใกล้จะครบกำหนดเวลาสำหรับการอบรม', messageLines: 3, meta: 'วันครบกำหนด : 12/09/2025', unread: true, reminder: true },
    { id: 5, image: '../../assets/logos/favicon.png', media: 'mark', title: 'การอบรมของคุณถูกปฏิเสธ', message: <>{'การอบรม Creative Drawing เวลา 12/09/2025 08:00 - 12/09/2025 16:00 ของคุณ '}<NotiItemHighlight tone="red">ถูกปฏิเสธ</NotiItemHighlight>{' กรุณาตรวจสอบเพิ่มเติมที่หมายเหตุ'}</> },
  ].filter((i) => tab === 'all' || (tab === 'unread' ? i.unread && !read[i.id] : i.reminder));
  return (
    <div>
      <PageHeader title="การแจ้งเตือน" actions={<Button variant="text" size="small" onClick={() => { setRead({ 1: 1, 2: 1, 4: 1 }); onToast('อ่านทั้งหมดแล้ว'); }}>อ่านทั้งหมด</Button>} />
      <div style={{ padding: '0 40px 40px', maxWidth: 720 }}>
        <Tabs value={tab} onChange={setTab} items={[{ id: 'all', label: 'ทั้งหมด' }, { id: 'unread', label: 'ยังไม่อ่าน', badge: 3 }, { id: 'reminder', label: 'การแจ้งเตือนครบกำหนด' }]} />
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, border: '1px solid var(--stroke-weak)', borderRadius: 'var(--radius-8)', overflow: 'hidden' }}>
          {items.map(({ id, reminder, ...i }) => <NotiItem key={id} {...i} time={t} unread={i.unread && !read[id]} onClick={() => setRead((r) => ({ ...r, [id]: 1 }))} onAction={() => onToast('เปิดใบรับรองแล้ว')} />)}
        </div>
      </div>
    </div>
  );
}
window.Notifications = Notifications;
