# SkillLevel

Shows which of six skill levels a learner is at: Not start, Novice, Emerging, Intermediate, Above Avg, Excellent. Use the `bars` variant inline next to a skill name, and the `band` variant as one column of a level chart.

## Usage

```tsx
import { SkillLevel } from '@futureskill/design-system';

<span>
  <SkillLevel level="intermediate" /> Intermediate
</span>

<div style={{ display: 'flex' }}>
  <SkillLevel variant="band" level="novice" range="0-24th" active={false} />
  <SkillLevel variant="band" level="emerging" range="25th-49th" />
</div>
```

The forwarded `ref` points at the root element: a `span` for `bars`, a `div` for `band`.

## Variants

| `variant` | What it is |
| --- | --- |
| `bars` | A 16 x 16 indicator with three bars, like signal strength. Each bar is 4px wide with a 2px gap; heights 5.3, 10.6 and 16px. No text. |
| `band` | A 132 x 352.49 column: an 8px cap in the level colour, the level name under it, a range at the bottom, and a wash of the level colour that fades downwards. |

## Levels

| `level` | Bars lit | Bars colour | Band cap | Band text | Band wash |
| --- | --- | --- | --- | --- | --- |
| `not-start` | none (all three `primary-neutral-400`) | `primary-neutral-400` | none | `primary-neutral-800` | none |
| `novice` | 1 | `yellow-500` | `fill-warning-strong` | `text-warning` | `#fdf6df` |
| `emerging` | 1 | `green-500` | `fill-success-strong` | `text-success` | `#9ae3b3` |
| `intermediate` | 2 | `#425e4b` | `#425e4b` | `#425e4b` | `#99b4a1` |
| `above-avg` | 2 | `#694989` | `#694989` | `#694989` | `#b393d2` |
| `excellent` | 3 | `primary-purple-500` | `fill-brand-strong` | `text-brand` | `#e5ccff` |

Unlit bars are `#d9d9d9`. Novice and Emerging light the same single bar and differ only in colour, as do Intermediate and Above Avg.

The wash is a vertical gradient of the level's hex from 20% opacity at the top to 2% at the bottom.

## Band details

- Text is Noto Sans Thai Regular 10/18 (the "Overline - Regular" style), centred, in a 110px box.
- 8px between the cap and the label, 8px padding under the range. The label and the range are pushed to the two ends of the column.
- `active={false}` removes the cap and the wash and turns the text `primary-neutral-800`. Use it for the columns the learner is not in.
- Width and height are the Figma size. Set `style={{ width, height }}` to fit a different chart.

## You provide

- `level`. Default `not-start`.
- `label` to replace the level name, for example with a Thai name. For `bars` it becomes the accessible name.
- `range` for a band: the text at the bottom. Figma shows percentile ranges ("0-24th", "25th-49th", "40th-59th", "50th-79th", "80-100th"). There is no default because the ranges are your data.
- Other attributes pass through to the root element.

## Do / don't

- Do put the level name next to `bars` as text. The indicator carries no label and two pairs of levels differ only by colour.
- Do place bands side by side with no gap, in level order, and mark one as active.
- Don't use `bars` as the only cue for a level.
- Don't rely on the band text in dark theme without checking it: see below.

## Differences from Figma

- Built from three sets on page "18 - Skill Graph": "Frame 27487" (bars), "Frame 27493" (band, one variant per level) and "Frame 27500" (band, Active true / false).
- Legacy palette and raw colours: `yellow-500`, `green-500`, `primary-purple-500`, `primary-neutral-400`, `primary-neutral-800` and every hex above stay the same in dark theme. Only the Novice, Emerging and Excellent band caps and text use semantic tokens and switch. In dark theme the Intermediate and Above Avg text and the inactive text are hard to read; this is how the file defines them.
- Unbound hexes written as literals: `#d9d9d9` (unlit bars), `#425e4b`, `#694989`, and the wash stops `#fdf6df`, `#9ae3b3`, `#99b4a1`, `#b393d2`, `#e5ccff`.
- There is no Not-start band in Figma. `variant="band" level="not-start"` renders the inactive look with the label "Not start".
- "Frame 27493 / Variant6" is the same inactive look as "Frame 27500 / Active=false" with the copy "Novice", "0-19th"; it is covered by `active={false}`.
- The ranges on the Figma layers overlap (25th-49th, 40th-59th, 50th-79th). They are used as sample copy in the preview only.
- The text boxes are 18.25px tall in Figma with an 18px line height; a `min-height` of 18.25px keeps the column at 352.49px.
- The level names are English in Figma. No Thai copy exists for them in the file.
