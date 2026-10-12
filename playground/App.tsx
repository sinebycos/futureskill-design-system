import { Suspense, lazy, useEffect, useMemo, useState, type ComponentType } from 'react';
import logoLight from '../src/assets/logos/fs-logo-light.png';
import logoDark from '../src/assets/logos/fs-logo-dark.png';
import { Foundations } from './Foundations';

interface PreviewModule { default: ComponentType; meta: { group: string; order?: number } }
// Each file in ./previews is one gallery page, loaded on demand.
const modules = import.meta.glob<PreviewModule>('./previews/*.tsx');
const metas = import.meta.glob<PreviewModule['meta']>('./previews/*.tsx', { import: 'meta', eager: true });

const GROUP_ORDER = ['Foundations', 'Actions', 'Forms', 'Navigation', 'Feedback', 'Learning', 'Forms (legacy)'];
const pages = Object.keys(modules)
  .map((path) => ({ path, name: path.replace(/^.*\/(.*)\.tsx$/, '$1'), group: metas[path]?.group ?? 'Other', order: metas[path]?.order ?? 50 }))
  .sort((a, b) => GROUP_ORDER.indexOf(a.group) - GROUP_ORDER.indexOf(b.group) || a.order - b.order || a.name.localeCompare(b.name));

const params = new URLSearchParams(location.search);
const shot = params.get('shot'); // ?shot=Button&theme=dark renders one preview bare, for screenshots

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (params.get('theme') === 'dark' ? 'dark' : 'light'));
  const [current, setCurrent] = useState(() => shot ?? (decodeURIComponent(location.hash.slice(1)) || 'Colors'));
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  useEffect(() => {
    const onHash = () => setCurrent(decodeURIComponent(location.hash.slice(1)) || 'Colors');
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, []);
  const Page = useMemo(() => {
    const p = pages.find((x) => x.name === current);
    return p ? lazy(modules[p.path] as () => Promise<PreviewModule>) : null;
  }, [current]);

  if (shot) return <Suspense fallback={null}>{Page ? <Page /> : <p>Unknown preview {shot}</p>}</Suspense>;

  const groups = [...new Set(pages.map((p) => p.group))];
  return (
    <div className="pg">
      <nav className="pg-nav" aria-label="Components">
        <img className="pg-logo" src={theme === 'dark' ? logoDark : logoLight} alt="FutureSkill" />
        <div className="pg-group">Foundations</div>
        {['Colors', 'Typography', 'Spacing & elevation', ...pages.filter((p) => p.group === 'Foundations').map((p) => p.name)].map((n) => (
          <a key={n} className="pg-link" href={`#${n}`} aria-current={current === n ? 'page' : undefined}>{n}</a>
        ))}
        {groups.filter((g) => g !== 'Foundations').map((g) => (
          <div key={g}>
            <div className="pg-group">{g}</div>
            {pages.filter((p) => p.group === g).map((p) => (
              <a key={p.name} className="pg-link" href={`#${p.name}`} aria-current={current === p.name ? 'page' : undefined}>{p.name}</a>
            ))}
          </div>
        ))}
      </nav>
      <main className="pg-main">
        <div className="pg-head">
          <h1 className="pg-title">{current}</h1>
          <button type="button" className="fs-btn fs-btn--secondary fs-btn--neutral fs-btn--small" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <span className="fs-btn__label">{theme === 'dark' ? 'Light' : 'Dark'} theme</span>
          </button>
        </div>
        {Page ? (
          <>
            <p className="pg-note">Guidelines: <code>src/components/{current}/README.md</code></p>
            <div className="pg-frame"><Suspense fallback={null}><Page /></Suspense></div>
          </>
        ) : (
          <div className="pg-frame"><Foundations section={current} /></div>
        )}
      </main>
    </div>
  );
}
