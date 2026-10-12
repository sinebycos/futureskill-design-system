import type { ReactNode } from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { NavigationSide, NavigationSideItem, type NavigationSideItemProps } from '../../src/components/NavigationSide';

export const meta = { group: 'Navigation', order: 1 };

const Col = ({ label, width, height, ground, children }: { label: string; width: number; height: number; ground?: string; children: ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <span className="fs-preview-label">{label}</span>
    <div style={{ width, height, background: ground || 'var(--background-sunken)' }}>{children}</div>
  </div>
);
const Item = ({ label, ...props }: NavigationSideItemProps & { label?: string }) => (
  <NavigationSideItem icon={<CodeBracketIcon className="fs-icon" width={24} height={24} aria-hidden />} {...props}>{label || 'Label'}</NavigationSideItem>
);
const avatar = (size: number) => (
  <span style={{ display: 'block', width: size, height: size, borderRadius: size, background: 'var(--fill-weak)', boxShadow: 'inset 0 0 0 1px var(--stroke-weak)' }} />
);
const logo = (
  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 146, height: 48, borderRadius: 8, background: 'var(--fill-weaker)', color: 'var(--text-weak)', fontSize: 14, lineHeight: '22px' }}>Logo</span>
);

export default function NavigationSidePreview() {
  return (
    <div className="fs-preview">
      <div className="fs-preview-row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
        <Col label="Desktop" width={280} height={500}>
          <NavigationSide
            title="การเรียนของฉัน"
            footer={<><Item /><NavigationSideItem variant="slot" /><NavigationSideItem variant="expand" aria-label="Collapse" /></>}
          >
            <Item selected /><Item /><Item submenu /><Item />
          </NavigationSide>
        </Col>
        <Col label="Sirebar Learner" width={300} height={500}>
          <NavigationSide
            variant="learner"
            title="การเรียนของฉัน"
            header={<NavigationSideItem variant="search" />}
            footer={<NavigationSideItem variant="expand" align="end" aria-label="Collapse" />}
          >
            <Item selected /><Item /><Item />
          </NavigationSide>
        </Col>
        <Col label="_Navigation side item" width={300} height={500} ground="var(--background-raised)">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <NavigationSideItem variant="header">Header</NavigationSideItem>
            <Item label="Default" />
            <Item state="hover" label="Hover" />
            <Item state="press" label="Press" />
            <Item selected label="Selected" />
            <Item state="focus" label="Focus" />
            <NavigationSideItem variant="divider" />
            <Item learner label="Learner" />
            <Item learner selected label="Learner selected" />
            <NavigationSideItem variant="divider-full" />
          </div>
        </Col>
      </div>
      <div className="fs-preview-row" style={{ alignItems: 'flex-start', flexWrap: 'nowrap' }}>
        <Col label="Mobile open" width={375} height={280}>
          <NavigationSide variant="mobile-open" footer={<Item />}>
            <Item selected /><Item />
          </NavigationSide>
        </Col>
        <Col label="Mobile closed" width={375} height={72}>
          <NavigationSide variant="mobile-closed" logo={logo} avatar={avatar(32)} />
        </Col>
      </div>
    </div>
  );
}
