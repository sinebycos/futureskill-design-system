import React from 'react';
import { cx } from '../../utils/cx.js';

const SKILL_GRAPH_SIZES = {
  default: { w: 533, h: 480, cy: 240, r: 200, gap: 31, tick: 16.5, dot: [6.875, 6.6] },
  mobile: { w: 360, h: 311.56, cy: 152.5, r: 127.08, gap: 16.42, tick: 13.77, dot: [4.37, 4.195] },
  mini: { w: 166, h: 166, cy: 83, r: 83, gap: 0, tick: 0, dot: [2.085, 2.085] },
};
function sgXY(ox, oy, r, i, n) { const a = (Math.PI * 2 * i) / n - Math.PI / 2; return [Math.round((ox + r * Math.cos(a)) * 100) / 100, Math.round((oy + r * Math.sin(a)) * 100) / 100]; }
function sgPoints(ox, oy, n, radius) { const out = []; for (let i = 0; i < n; i++) out.push(sgXY(ox, oy, typeof radius === 'function' ? radius(i) : radius, i, n).join(',')); return out.join(' '); }
function sgSeries(key, ox, oy, S, n, values, max, weak) {
  const rad = (i) => S.r * Math.max(0, Math.min(1, (Number(values[i]) || 0) / max));
  const pts = sgPoints(ox, oy, n, rad);
  const dots = [];
  for (let i = 0; i < n; i++) { const p = sgXY(ox, oy, rad(i), i, n); dots.push(<ellipse key={i} className="fs-skill-graph__dot" cx={p[0]} cy={p[1]} rx={S.dot[0]} ry={S.dot[1]} />); }
  return (<g key={key} className="fs-skill-graph__series"><polygon className={cx('fs-skill-graph__area', weak && 'fs-skill-graph__area--weak')} points={pts} /><polygon className="fs-skill-graph__line" points={pts} />{dots}</g>);
}

/** A radar chart plotting one score per skill on 3 to 8 axes (legacy palette). */
export function SkillGraph({ axes: axesProp, max: maxProp, rings: ringsProp, size: sizeProp, tone, grid: gridProp, spokes: spokesProp, fill: fillProp, compare, state, className, style, ...rest }) {
  const axes = (axesProp || []).slice(0, 8);
  const n = axes.length;
  const size = sizeProp && SKILL_GRAPH_SIZES[sizeProp] ? sizeProp : 'default';
  const S = SKILL_GRAPH_SIZES[size];
  const mini = size === 'mini';
  const max = maxProp !== undefined && maxProp > 0 ? Number(maxProp) : 100;
  const rings = ringsProp !== undefined && ringsProp > 0 ? Math.round(ringsProp) : 5;
  const grid = gridProp === 'circle' ? 'circle' : 'polygon';
  const spokes = spokesProp === undefined ? mini || grid === 'circle' : !!spokesProp;
  const fill = fillProp !== false;
  const ox = S.w / 2, oy = S.cy;
  const measureRef = React.useRef(null);
  const [span, setSpan] = React.useState(null);
  const sig = size + '/' + axes.map((a) => a.label).join('/');
  React.useLayoutEffect(() => {
    let live = true;
    function measure() {
      const el = measureRef.current;
      if (!live || !el || !el.getBBox) return;
      let b; try { b = el.getBBox(); } catch (e) { return; }
      if (!b || !b.width) return;
      const next = Math.min(0, Math.floor(b.x)) + ' ' + Math.max(S.w, Math.ceil(b.x + b.width));
      setSpan((prev) => (prev === next ? prev : next));
    }
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => { live = false; };
  }, [sig]);
  const xs = span ? span.split(' ').map(Number) : [0, S.w];
  const width = xs[1] - xs[0];
  const gridEls = [], text = [];
  for (let i = 1; i <= rings; i++) {
    const rr = Math.round(((S.r * i) / rings) * 100) / 100;
    gridEls.push(grid === 'circle' ? <circle key={'r' + i} className="fs-skill-graph__ring" cx={ox} cy={oy} r={rr} /> : <polygon key={'r' + i} className="fs-skill-graph__ring" points={sgPoints(ox, oy, n, rr)} />);
    if (!mini) text.push(<text key={'t' + i} className="fs-skill-graph__tick" x={ox} y={Math.round((oy - rr + S.tick) * 100) / 100}>{String(Math.round(((max * i) / rings) * 10) / 10)}</text>);
  }
  for (let i = 0; i < n; i++) {
    if (spokes) { const p = sgXY(ox, oy, S.r, i, n); gridEls.push(<line key={'s' + i} className="fs-skill-graph__spoke" x1={ox} y1={oy} x2={p[0]} y2={p[1]} />); }
    if (!mini) { const p = sgXY(ox, oy, S.r + S.gap, i, n); text.push(<text key={'l' + i} className="fs-skill-graph__label" x={p[0]} y={p[1]} textAnchor={Math.abs(p[0] - ox) < 1 ? 'middle' : p[0] > ox ? 'start' : 'end'}>{axes[i].label}</text>); }
  }
  return (
    <svg role="img" aria-label={axes.map((a) => a.label + ' ' + a.value).join(', ')} {...rest} className={cx('fs-skill-graph', `fs-skill-graph--${size}`, `fs-skill-graph--${grid}`, tone === 'dark' && 'fs-skill-graph--dark', className)} data-state={state || undefined} viewBox={xs[0] + ' 0 ' + width + ' ' + S.h} style={{ width: width + 'px', ...style }}>
      <g ref={measureRef}>
        <g className="fs-skill-graph__grid">{gridEls}</g>
        {text}
        {compare ? sgSeries('compare', ox, oy, S, n, compare, max, fill) : null}
        {sgSeries('main', ox, oy, S, n, axes.map((a) => a.value), max, !fill)}
      </g>
    </svg>
  );
}
