const { NavigationSide, NavigationSideItem, Icon, Badge, Button } = window.FutureSkillDesignSystem_f8a410;

const NAV = [
  { id: 'learning', label: 'การเรียนของฉัน', icon: 'play-circle' },
  { id: 'notifications', label: 'การแจ้งเตือน', icon: 'bell', badge: 3 },
  { id: 'skills', label: 'ทักษะของฉัน', icon: 'chart-bar' },
  { id: 'builder', label: 'สร้างคลาส', icon: 'squares-plus' },
];

function AppShell({ screen, onNavigate, children }) {
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--background-sunken)' }}>
      <div style={{ width: 256, flex: 'none', height: '100%' }}>
        <NavigationSide
          header={<div style={{ padding: '20px 24px 8px' }}><img src="../../assets/logos/fs-logo-light.png" alt="FutureSkill" style={{ height: 32 }} /></div>}
          title="เมนู"
          footer={<><NavigationSideItem icon={<Icon name="cog-6-tooth" />}>ตั้งค่า</NavigationSideItem><NavigationSideItem icon={<Icon name="arrow-left-start-on-rectangle" />}>ออกจากระบบ</NavigationSideItem></>}
        >
          {NAV.map((n) => (
            <NavigationSideItem key={n.id} icon={<Icon name={n.icon} />} selected={screen === n.id} onClick={() => onNavigate(n.id)}
              badge={n.badge ? <Badge size="small" tone="error" icon={false}>{n.badge}</Badge> : null}>{n.label}</NavigationSideItem>
          ))}
        </NavigationSide>
      </div>
      <main style={{ flex: 1, minWidth: 0, overflow: 'auto', background: 'var(--background-base)' }}>{children}</main>
    </div>
  );
}

function PageHeader({ title, sub, actions }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16, padding: '32px 40px 20px' }}>
      <div>
        <h1 className="th-subtitle-1" style={{ margin: 0 }}>{title}</h1>
        {sub ? <p className="th-p5" style={{ margin: '4px 0 0', color: 'var(--text-weak)' }}>{sub}</p> : null}
      </div>
      {actions}
    </div>
  );
}

function CoverPh({ h = 140 }) {
  return <div style={{ height: h, background: 'var(--fill-weak)', color: 'var(--icon-neutral)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="photo" size={32} /></div>;
}

Object.assign(window, { AppShell, PageHeader, CoverPh });
