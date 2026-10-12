import { forwardRef, useEffect, useLayoutEffect, useRef, useState, type SVGAttributes } from 'react';
import { cx } from '../../utils/cx';
import './SkillGraph.css';

export type SkillGraphSize = 'default' | 'mobile' | 'mini';
export type SkillGraphTone = 'default' | 'dark';
export type SkillGraphGrid = 'polygon' | 'circle';

export interface SkillGraphAxis {
  /** Axis name, drawn outside the outer ring. Keep it to a word or two. */
  label: string;
  /** Score on this axis, from 0 to `max`. Values outside the range are clamped. */
  value: number;
}

export interface SkillGraphProps extends Omit<SVGAttributes<SVGSVGElement>, 'fill' | 'max'> {
  /** One entry per axis, 3 to 8 of them. The first axis points up and the rest follow clockwise. */
  axes: SkillGraphAxis[];
  /** Value at the outer ring. Default 100. */
  max?: number;
  /** Number of rings. Default 5, so the rings read 20, 40, 60, 80, 100 when max is 100. */
  rings?: number;
  /** 'default' is the 533x480 chart, 'mobile' the 360x312 one, 'mini' the 166px chart with spokes and no text. Default 'default'. */
  size?: SkillGraphSize;
  /** 'dark' is the Figma "Dark" variant: lighter label and series colours for a dark ground. Default 'default'. */
  tone?: SkillGraphTone;
  /** 'polygon' rings follow the axes. 'circle' draws round rings with spokes in deep-purple-100. Default 'polygon'. */
  grid?: SkillGraphGrid;
  /** Lines from the centre to each axis. Default true for size 'mini' and grid 'circle', false otherwise. */
  spokes?: boolean;
  /** true fills the area at 80% opacity, false at 30%. Default true. */
  fill?: boolean;
  /** A second series, one value per axis in the same order. It is drawn under the main one with the opposite fill strength. */
  compare?: number[];
  /** Copied to data-state. The chart is static and has no states in Figma. */
  state?: string;
}

interface SkillGraphFrame {
  w: number; h: number; cy: number; r: number; gap: number; tick: number; dot: [number, number];
}

// Frame, centre and radius of each Figma size. gap = outer ring to axis-label centre, tick = ring vertex to ring-label centre, dot = rx, ry.
const SKILL_GRAPH_SIZES: Record<SkillGraphSize, SkillGraphFrame> = {
  default: { w: 533, h: 480, cy: 240, r: 200, gap: 31, tick: 16.5, dot: [6.875, 6.6] },
  mobile: { w: 360, h: 311.56, cy: 152.5, r: 127.08, gap: 16.42, tick: 13.77, dot: [4.37, 4.195] },
  mini: { w: 166, h: 166, cy: 83, r: 83, gap: 0, tick: 0, dot: [2.085, 2.085] },
};

// Layout effect in the browser (measure before paint, as before); plain effect on the server, where neither runs, to avoid React's SSR warning.
const useIsoLayoutEffect = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

function xy(ox: number, oy: number, r: number, i: number, n: number): [number, number] {
  const a = (Math.PI * 2 * i) / n - Math.PI / 2;
  return [Math.round((ox + r * Math.cos(a)) * 100) / 100, Math.round((oy + r * Math.sin(a)) * 100) / 100];
}

function points(ox: number, oy: number, n: number, radius: number | ((i: number) => number)): string {
  const out: string[] = [];
  for (let i = 0; i < n; i++) out.push(xy(ox, oy, typeof radius === 'function' ? radius(i) : radius, i, n).join(','));
  return out.join(' ');
}

function series(key: string, ox: number, oy: number, S: SkillGraphFrame, n: number, values: number[], max: number, weak: boolean) {
  const rad = (i: number) => S.r * Math.max(0, Math.min(1, (Number(values[i]) || 0) / max));
  const pts = points(ox, oy, n, rad);
  const dots = [];
  for (let i = 0; i < n; i++) {
    const p = xy(ox, oy, rad(i), i, n);
    dots.push(<ellipse key={i} className="fs-skill-graph__dot" cx={p[0]} cy={p[1]} rx={S.dot[0]} ry={S.dot[1]} />);
  }
  return (
    <g key={key} className="fs-skill-graph__series">
      <polygon className={cx('fs-skill-graph__area', weak && 'fs-skill-graph__area--weak')} points={pts} />
      <polygon className="fs-skill-graph__line" points={pts} />
      {dots}
    </g>
  );
}

export const SkillGraph = forwardRef<SVGSVGElement, SkillGraphProps>(function SkillGraph(
  { axes: axesProp, max: maxProp, rings: ringsProp, size: sizeProp, tone, grid: gridProp, spokes: spokesProp, fill: fillProp, compare, state, className, style, ...rest },
  ref,
) {
  const axes = (axesProp || []).slice(0, 8);
  const n = axes.length;
  const size: SkillGraphSize = sizeProp && SKILL_GRAPH_SIZES[sizeProp] ? sizeProp : 'default';
  const S = SKILL_GRAPH_SIZES[size];
  const mini = size === 'mini';
  const max = maxProp !== undefined && maxProp > 0 ? Number(maxProp) : 100;
  const rings = ringsProp !== undefined && ringsProp > 0 ? Math.round(ringsProp) : 5;
  const grid: SkillGraphGrid = gridProp === 'circle' ? 'circle' : 'polygon';
  const spokes = spokesProp === undefined ? mini || grid === 'circle' : !!spokesProp;
  const fill = fillProp !== false;
  const ox = S.w / 2;
  const oy = S.cy;

  // Axis labels are free text: after layout, widen the viewBox so long labels are not cut off. The height never changes.
  const measureRef = useRef<SVGGElement>(null);
  const [span, setSpan] = useState<string | null>(null);
  const sig = size + '/' + axes.map((a) => a.label).join('/');
  useIsoLayoutEffect(() => {
    let live = true;
    function measure() {
      const el = measureRef.current;
      if (!live || !el || !el.getBBox) return;
      let b: DOMRect;
      try { b = el.getBBox(); } catch { return; }
      if (!b || !b.width) return;
      const next = Math.min(0, Math.floor(b.x)) + ' ' + Math.max(S.w, Math.ceil(b.x + b.width));
      setSpan((prev) => (prev === next ? prev : next));
    }
    measure();
    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => { live = false; };
  }, [sig]);
  const xs = span ? span.split(' ').map(Number) : [0, S.w];
  const width = xs[1] - xs[0];

  const gridEls = [];
  const text = [];
  for (let i = 1; i <= rings; i++) {
    const rr = Math.round(((S.r * i) / rings) * 100) / 100;
    gridEls.push(grid === 'circle'
      ? <circle key={'r' + i} className="fs-skill-graph__ring" cx={ox} cy={oy} r={rr} />
      : <polygon key={'r' + i} className="fs-skill-graph__ring" points={points(ox, oy, n, rr)} />);
    if (!mini) text.push(<text key={'t' + i} className="fs-skill-graph__tick" x={ox} y={Math.round((oy - rr + S.tick) * 100) / 100}>{String(Math.round(((max * i) / rings) * 10) / 10)}</text>);
  }
  for (let i = 0; i < n; i++) {
    if (spokes) {
      const p = xy(ox, oy, S.r, i, n);
      gridEls.push(<line key={'s' + i} className="fs-skill-graph__spoke" x1={ox} y1={oy} x2={p[0]} y2={p[1]} />);
    }
    if (!mini) {
      const p = xy(ox, oy, S.r + S.gap, i, n);
      text.push(<text key={'l' + i} className="fs-skill-graph__label" x={p[0]} y={p[1]} textAnchor={Math.abs(p[0] - ox) < 1 ? 'middle' : p[0] > ox ? 'start' : 'end'}>{axes[i].label}</text>);
    }
  }

  return (
    <svg
      role="img"
      aria-label={axes.map((a) => a.label + ' ' + a.value).join(', ')}
      {...rest}
      ref={ref}
      className={cx('fs-skill-graph', `fs-skill-graph--${size}`, `fs-skill-graph--${grid}`, tone === 'dark' && 'fs-skill-graph--dark', className)}
      data-state={state || undefined}
      viewBox={xs[0] + ' 0 ' + width + ' ' + S.h}
      style={{ width: width + 'px', ...style }}
    >
      <g ref={measureRef}>
        <g className="fs-skill-graph__grid">{gridEls}</g>
        {text}
        {compare ? series('compare', ox, oy, S, n, compare, max, fill) : null}
        {series('main', ox, oy, S, n, axes.map((a) => a.value), max, !fill)}
      </g>
    </svg>
  );
});
