# SkillProgress

A plain 10px bar that shows a percentage as a purple fill on a pale track. Use it for compact progress, such as how much of a skill or a course is done, where a label next to it carries the number; if the bar itself must show the value and a thumb, use `ProgressBar`.

In Figma the component is called "Skill Progress" and has six variants, one per fill level: 0%, 25%, 50%, 75%, 80% and 100%. The web component takes any number from 0 to 100.

## Usage

```tsx
import { SkillProgress } from '@futureskill/design-system';

<div style={{ width: 396 }}>
  <SkillProgress value={75} aria-label="Skill progress" />
</div>
```

It renders a `<div role="progressbar">`; a `ref` goes to that root.

## Parts

| Part | Size | Colour |
| --- | --- | --- |
| Track | full width × 10px, pill (`radius-full`) | `primary-neutral-300` (#f4f6f9) |
| Fill | `value`% of the width × 10px, pill, both ends rounded | `primary-purple-500` (#842cdd) |

No border, no shadow, no text. Width is 100% of the container; the Figma variants are drawn 396px wide (so 25% is 99px, 50% is 198px, 75% is 297px, 80% is 316.8px).

## Values

| `value` | What you see |
| --- | --- |
| `0` | Track only. No fill is drawn. |
| `1`–`99` | Fill from the left edge, rounded at its right end. |
| `100` | Fill covers the whole track. |

## Light and dark

Both colours are legacy palette tokens, not semantic ones, so the bar looks the same in the light and the dark theme: a near-white track and a `#842cdd` fill. That is what the Figma file has. On a dark ground the track reads as a bright bar.

## States

None. There is no hover, press, focus or disabled variant in Figma.

## You provide

- `value`: a number from 0 to 100. Numbers outside the range are clamped.
- An `aria-label` (or `aria-labelledby`) that says what is progressing. The root already has `role="progressbar"` with `aria-valuenow`, `aria-valuemin="0"` and `aria-valuemax="100"`.
- Any text ("50%", a skill name) goes outside the component; it renders none.
- Other attributes (`id`, `style`, `title`…) pass through to the root `div`.

## Do / don't

- Do give it a container with a definite width; it stretches to fill it.
- Do put the percentage or the skill name next to it as text, since the bar alone shows no number.
- Don't use it on a ground that is close to `primary-neutral-300`; the track has no border and would disappear.
- Don't use it as an input.

## Differences from Figma

- Legacy palette: `primary-neutral-300` and `primary-purple-500` are from the old "Color Styles" collection and do not switch with the theme.
- The component set is broken in Figma (its properties cannot be read) and one variant is named just "75%" instead of "Property 1=75%". The variants were read by name; all six have the same structure.
- The root clips its content (`overflow: hidden`) so a very small fill keeps to the track's rounded end. Figma does not clip, but has no variant where it would matter.
- No text, icons, shadows or unbound hex colours.
