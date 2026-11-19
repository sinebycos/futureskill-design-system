import React from 'react';

// Heroicons 2.2.0, fetched by name from the jsDelivr CDN and inlined as <svg>. Same API as the repo's name-based Icon.
const HEROICONS_CDN = 'https://cdn.jsdelivr.net/npm/heroicons@2.2.0/';
const ICON_DIRS = { outline: '24/outline', solid: '24/solid', mini: '20/solid', micro: '16/solid' };
const ICON_BOX = { outline: 24, solid: 24, mini: 20, micro: 16 };
const iconCache = new Map();
const iconWaiters = new Map();

function loadIcon(key) {
  if (iconCache.has(key) || iconWaiters.has(key)) return;
  iconWaiters.set(key, new Set());
  fetch(HEROICONS_CDN + key + '.svg')
    .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
    .then((txt) => {
      const m = txt.match(/<svg([^>]*)>([\s\S]*)<\/svg>/);
      const attrs = m ? m[1] : '';
      const vb = (attrs.match(/viewBox="([^"]+)"/) || [])[1] || '0 0 24 24';
      const filled = /fill="currentColor"/.test(attrs);
      iconCache.set(key, { vb, filled, inner: m ? m[2] : '' });
    })
    .catch(() => { iconCache.set(key, null); console.warn('Icon: unknown icon "' + key + '"'); })
    .finally(() => { const w = iconWaiters.get(key); iconWaiters.delete(key); if (w) w.forEach((fn) => fn()); });
}

/** Draws one Heroicons 2.2 glyph by name ("academic-cap", "check-circle"). Inherits currentColor. */
export function Icon({ name, variant = 'outline', size, color, title, className, style, strokeWidth, ...rest }) {
  const v = ICON_DIRS[variant] ? variant : 'outline';
  const key = ICON_DIRS[v] + '/' + name;
  const [, tick] = React.useState(0);
  React.useEffect(() => {
    if (iconCache.has(key)) return;
    loadIcon(key);
    const w = iconWaiters.get(key);
    const fn = () => tick((n) => n + 1);
    if (w) w.add(fn);
    return () => { if (w) w.delete(fn); };
  }, [key]);
  const data = iconCache.get(key);
  const px = size ?? ICON_BOX[v];
  const outline = v === 'outline';
  return React.createElement('svg', {
    ...rest,
    xmlns: 'http://www.w3.org/2000/svg',
    width: px,
    height: px,
    viewBox: data ? data.vb : '0 0 ' + ICON_BOX[v] + ' ' + ICON_BOX[v],
    fill: outline ? 'none' : 'currentColor',
    stroke: outline ? 'currentColor' : undefined,
    strokeWidth: outline ? (strokeWidth ?? 1.5) : undefined,
    className: ['fs-icon', className].filter(Boolean).join(' '),
    style: color ? { color, ...style } : style,
    role: title ? 'img' : undefined,
    'aria-label': title || undefined,
    'aria-hidden': title ? undefined : true,
    dangerouslySetInnerHTML: { __html: data ? data.inner : '' },
  });
}
