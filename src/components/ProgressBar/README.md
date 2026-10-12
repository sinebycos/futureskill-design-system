# ProgressBar

A read-only bar that shows how far along something is, with a round thumb at the current point and a small bubble above it that states the value ("50/100"). Use it where the exact number matters; for a plain bar with no thumb and no number, use `SkillProgress`.

In Figma the component is called "2nd Progress Bar". It has six variants: Progress, Finish, Start, and the same three again as "… Dark". The web component takes a number instead: `value={0}` is Start, `value={100}` is Finish, anything in between is Progress.

## Usage

```tsx
import { ProgressBar } from '@futureskill/design-system';

<div style={{ width: 392 }}>
  <ProgressBar value={50} aria-label="Course progress" />
</div>
```

It renders a `<div role="progressbar">`; a `ref` goes to that root.

## Parts

| Part | Size | Colour |
| --- | --- | --- |
| Track | full width × 10px, pill (`radius-full`) | `fill-weaker`, 1px inside border `stroke-weak` |
| Fill | 10px high, pill, from the left edge to the thumb | `fill-brand-strong` |
| Thumb | 20px circle with a 12px circle inside (4px ring) | ring `fill-brand-strong`, centre `fill-inverse-strong` |
| Bubble | 4px padding, `radius-4`, 23px high | `fill-brand-strong`, text `text-inverse-strong` |
| Bubble text | 12px / 15px SemiBold (600) | `text-inverse-strong` |
| Arrow | 10 × 10 triangle pointing down, 6px of it showing under the bubble | `fill-brand-strong` |

The whole component is 51px high: bubble 23px, 8px gap (the arrow tip stops 2px above the thumb), then the 20px thumb. The track and fill sit 6px below the top of the thumb. Width is 100% of the container; the Figma variants are drawn 392px wide.

## Values and end states

| `value` | Figma variant | What you see |
| --- | --- | --- |
| `0` | Start | Thumb at the left edge, no fill, bubble left-aligned with the thumb. |
| between | Progress | Fill runs to the thumb; the bubble follows the thumb and its arrow points at the thumb's centre. |
| `max` (100) | Finish | Thumb at the right edge, fill covers the track, bubble right-aligned with the thumb. The track switches to `fill-inverse-strong` with no border, as in Figma, but the fill hides it. |

The thumb never leaves the bar: its left edge is at 0 for the start and its right edge is at 100% for the finish. The bubble slides the same way, so it never overhangs either end.

## Light and dark

All colours are semantic tokens, so the bar follows the theme. The Figma "Dark" variants use the same tokens as the light ones and are simply the dark-theme rendering (lighter purple, dark thumb centre, dark bubble text). There is no `theme` or `dark` prop.

## States

None. It is not a slider: there is no hover, press, focus or disabled variant in Figma, and the thumb cannot be dragged.

## You provide

- `value`: a number from 0 to `max`. Numbers outside the range are clamped.
- `max`: optional, default 100.
- `label`: optional text for the bubble. Default is `value/max`, e.g. "50/100".
- An `aria-label` (or `aria-labelledby`) that says what is progressing. The root already has `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, `aria-valuemax` and `aria-valuetext`.
- Other attributes (`id`, `style`, `title`…) pass through to the root `div`.

## Do / don't

- Do give it a container with a definite width; it stretches to fill it.
- Do leave the 51px of height free: the bubble is inside the component's box, so nothing above it gets covered.
- Don't use it as an input. For choosing a value, use a slider control.
- Don't put long text in `label`; the bubble is one short line and does not wrap.
- Don't stack several of these in a dense list; `SkillProgress` is the compact bar.

## Differences from Figma

- Font: the bubble text is Inter Semi Bold 12 with automatic line height in Figma. Inter is not part of this system, so it is set in `font-thai` (Noto Sans Thai) at 12px / 15px, weight 600. The bubble for "50/100" may be a pixel or two narrower or wider than Figma's 50px.
- Height: the light variants in Figma are 20px high with the bubble hanging 31px above the frame; the Dark variants are 51px high with the bubble inside. This component always uses the 51px box.
- Bubble position in between: in the Figma Progress variant the bubble is placed by hand 8px right of centre over the thumb (thumb at 183px of 392, fill 198px). Here the thumb and bubble positions are computed from `value`, so at 50% the thumb sits at 186px and the bubble is centred over it. Start and Finish match Figma to within 1px.
- Track offset: Progress, Progress Dark and Finish Dark place the bar 6px below the thumb's top (1px below centre); Start and Start Dark use 5px. 6px is used for every value.
- The light Finish variant is distorted in Figma (its track is 391 × 3.92). Finish Dark was used as the reference for the finished state.
- The arrow has a 1px corner radius in Figma; here it is a sharp triangle.
- In the Start variants the hidden fill layer is still bound to the legacy `primary-purple-500`. It is hidden, so it is not used.
- No icons, no shadows, no unbound hex colours.
