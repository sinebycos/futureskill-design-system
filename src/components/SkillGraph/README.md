# SkillGraph

A radar chart that plots one score per skill on 3 to 8 axes. Use it to show a learner's or a team's skill profile at a glance; use a table or progress bars when exact numbers matter more than the shape.

The chart is one inline SVG computed from props. The first axis points up and the rest follow clockwise.

## Usage

```tsx
import { SkillGraph } from '@futureskill/design-system';

const axes = [
  { label: 'HTML & CSS', value: 37 },
  { label: 'JavaScript', value: 73 },
  { label: 'Git', value: 100 },
  { label: 'API', value: 100 },
  { label: 'React', value: 95 },
];

<SkillGraph axes={axes} />
<SkillGraph axes={axes} size="mobile" tone="dark" />
<SkillGraph axes={axes} size="mini" compare={[60, 80, 70, 90, 50]} />
```

The root `svg` receives the forwarded `ref`. The label measuring runs in a layout effect in the browser only, so the component renders on the server (it starts at the Figma frame width and widens after hydration if a label needs it).

## Sizes

| `size` | Frame | Outer radius | Rings | Series outline | Dots | Text |
| --- | --- | --- | --- | --- | --- | --- |
| `default` | 533 x 480 | 200px | 2px `primary-purple-100`, round joins | 4px | 13.75 x 13.2 | axis labels 12/18, ring values 10/18 |
| `mobile` | 360 x 311.56 | 127.08px | 2px `primary-purple-100`, round joins | 4px | 8.74 x 8.39 | same |
| `mini` | 166 x 166 | 83px | 1px `primary-purple-100` at 50% opacity, with spokes | 1px | 4.17 | none |

The height is fixed per size. The width grows past the frame when an axis label is longer than the Figma sample; the chart measures its labels after layout and widens the viewBox so nothing is cut off. `max-width: 100%` scales the whole chart down in a narrow container.

Axis labels sit 31px outside the outer ring (16.42px at `mobile`). Ring values sit on the first axis, just inside each ring.

## Tone

| `tone` | Series | Axis labels | Ring values | Use on |
| --- | --- | --- | --- | --- |
| `default` | `#e63a77` | `primary-purple-500` | `deep-purple-500` | `background-base` and other light grounds |
| `dark` | `pink-300` | `primary-purple-200` | `deep-purple-200` | `background-black` or another ground that is dark in both themes |

The rings are `primary-purple-100` in both tones. All of these are legacy palette colours, so they do not change with the theme: pick the tone from the ground the chart sits on.

## Grid

| `grid` | What it draws |
| --- | --- |
| `polygon` | Rings with one corner per axis. No spokes at `default` and `mobile`, spokes at `mini`. |
| `circle` | Round rings and spokes, 1.22px `deep-purple-100` (the Figma "matrix structure" set). |

`spokes` turns the centre-to-axis lines on or off regardless of the grid.

## Fill and second series

`fill` sets the strength of the filled area: `true` (default) is 80% opacity, `false` is 30%. `compare` adds a second series under the main one; it takes the opposite strength, so one shape reads as the foreground. Both series use the same colour, as in Figma.

## You provide

- `axes`: `[{ label, value }]`, 3 to 8 entries. Entries past the eighth are ignored.
- `max` (default 100) and `rings` (default 5). Ring values are `max / rings` apart: 20, 40, 60, 80, 100 by default.
- Optional `compare`: an array of numbers in the same axis order.
- An `aria-label` if the default (each label with its value) is not what a screen reader should say. Other attributes pass through to the `svg`.

## Do / don't

- Do keep axis labels to one or two words. Long labels widen the chart on both sides.
- Do use the same `max` for charts that sit next to each other.
- Don't use fewer than 3 axes: the rings collapse to a line.
- Don't put `tone="default"` on a dark ground or `tone="dark"` on a light one: the label colours are fixed.
- Don't use `mini` when the reader needs axis names: it has no text.

## Differences from Figma

- Built from four sets on page "18 - Skill Graph": "Radar Chart" (Default, mobile, Dark), "Radar-Mo" (the `mini` size and `fill` / `compare`), "matrix structure" (`grid="circle"`). "matrix structure Stroke" (grey 1px irregular rings, one variant with a grey triangle) was not built.
- The Figma "Property 1" axis mixes size and theme (Default, mobile, Dark). It is split into `size` and `tone`, so `mobile` + `dark` exists here although Figma only draws Dark at the default size.
- Series colour: the layers use the local paint style "Secondary" = `#e63a77`. The token named `secondary` holds a different colour (`#f1cb46`), so the hex literal is used. Dark uses the `pink-300` variable.
- Rings are drawn as regular polygons in equal steps. In Figma the outer ring of Radar Chart is stretched 4% horizontally (416.73 x 400), and the Radar-Mo rings run 19, 35, 51, 67, 83px instead of equal fifths.
- Axis labels are placed by one rule (31px out along the axis, anchored by side). In Figma they are placed by hand and the diagonal labels sit up to 15px further out. In the Default variant "Angular" is at x = -70, outside the frame; the Dark variant has it at 0.
- The fill layer keeps its 1px `primary-purple-500` stroke, but the 4px outline covers it. In Figma the two shapes are 2px out of register and the purple edge shows in places.
- Radar-Mo frames hug the polygon (166 x 144 for six axes) and the six-axis grid is rotated so two corners point sideways. Here every `mini` chart is 166 x 166 with the first axis up.
- Radar-Mo "数量=8" reuses the seven-axis grid and has no "填充=True" variant. Eight axes are drawn from the same rule as the other counts.
- In Radar-Mo the property 填充 (fill) swaps which of the two series is 80% and which is 30%; here `fill` sets the main series and `compare` takes the other value.
- `spokes` on the polygon grid at `default` / `mobile`, a second series at those sizes, and `tone="dark"` at `mini` do not exist in Figma; they follow from combining the props.
- The preview values (37, 73, 100, 100, 95, 90, 40, 74) were read off the vertex positions of the Figma shape, rounded.
- Line height 18px from the text styles has no effect on single-line SVG text and is not set.
