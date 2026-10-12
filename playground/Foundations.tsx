import { colorTokens, colorUsage, semanticColorTokens, shadow, spacing, radius, textStyles, cssVar } from '@futureskill/design-system/tokens';

const SAMPLE = { th: 'เรียนรู้ทักษะแห่งอนาคตได้ทุกที่ทุกเวลา', en: 'Learn the skills of the future' };

export function Foundations({ section }: { section: string }) {
  if (section === 'Typography')
    return (
      <div className="pg-type">
        {textStyles.map((s) => (
          <div key={s.name} className="pg-type-row">
            <code>{s.name}</code>
            <span className={s.name}>{s.name.startsWith('th') ? SAMPLE.th : SAMPLE.en}</span>
          </div>
        ))}
      </div>
    );
  if (section === 'Spacing & elevation')
    return (
      <div className="pg-type">
        {Object.entries(spacing).map(([k, v]) => (
          <div key={k} className="pg-type-row"><code>{k}</code><span style={{ display: 'block', width: v, height: 12, background: 'var(--fill-brand-strong)', borderRadius: 2 }} /></div>
        ))}
        {Object.keys(radius).map((k) => (
          <div key={k} className="pg-type-row"><code>{k}</code><span style={{ display: 'block', width: 96, height: 48, borderRadius: cssVar(k as keyof typeof radius), boxShadow: 'inset 0 0 0 2px var(--stroke-brand-strong)' }} /></div>
        ))}
        {Object.keys(shadow).map((k) => (
          <div key={k} className="pg-type-row"><code>{k}</code><span style={{ display: 'block', width: 160, height: 64, borderRadius: 8, background: 'var(--background-raised)', boxShadow: cssVar(k as keyof typeof shadow) }} /></div>
        ))}
      </div>
    );
  const legacyCount = colorTokens.length - semanticColorTokens.length;
  return (
    <>
      <p className="pg-note" style={{ padding: '24px 24px 0' }}>Semantic tokens switch with the theme. The other {legacyCount} tokens (primitives, theme layer, legacy palette) are in <code>tokens/tokens.json</code>.</p>
      <div className="pg-swatches">
        {semanticColorTokens.map((n) => (
          <div key={n} className="pg-swatch" title={colorUsage[n]}>
            <span className="pg-chip" style={{ background: cssVar(n) }} />
            <code>{n}</code>
          </div>
        ))}
      </div>
    </>
  );
}
