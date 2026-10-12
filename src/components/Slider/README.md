# Slider

Picks a number, or a low–high pair, from a continuous span by dragging a thumb along a track. Use it when the rough position matters more than the exact figure (volume, progress, a price span); use a text input when the user has to type a precise value.

## Usage

```tsx
import { useState } from 'react';
import { Slider } from '@futureskill/design-system';

function PriceFilter() {
  const [volume, setVolume] = useState(29);
  const [price, setPrice] = useState<[number, number]>([200, 1500]);
  return (
    <>
      <Slider value={volume} onChange={(v) => setVolume(v as number)} aria-label="Volume" />
      <Slider
        variant="range"
        min={0}
        max={3000}
        step={100}
        value={price}
        onChange={(v) => setPrice(v as [number, number])}
        thumbLabels={['Lowest price', 'Highest price']}
        aria-label="Price"
      />
    </>
  );
}
```

`onChange` is typed `(value: number | [number, number], event)`; narrow it to the shape that matches your `variant`.

## When to use which

| `variant` | Use for |
| --- | --- |
| `default` | One value. One thumb; the track is filled from its start up to the thumb. Built on a single `<input type="range">`. |
| `range` | A span between two values. Two thumbs; the track is filled between them. Built on two overlaid range inputs inside a `role="group"`. |

Both use the same three colours: track `primary-neutral-100`, fill `primary-purple-500`, thumb `primary-purple-500`.

## Sizes

There is one size.

| Part | Size |
| --- | --- |
| Slider | 256 × 24px. `fullWidth` stretches it to its container; the height stays 24px. |
| Track | 8px tall, `radius-4`, 8px from the top (centred in the 24px row). |
| Fill | 8px tall, `radius-4`. It ends at the right edge of the thumb; in `range` it starts at the left edge of the low thumb. |
| Thumb | 24px circle, no border, no shadow. At the lowest value its left edge sits on the track's start, at the highest value its right edge sits on the track's end. |

## States

Figma draws one look only. Hover and pressed do not change anything. `disabled` blocks input and shows a not-allowed cursor; the colours stay the same because Figma has no disabled look. Keyboard focus puts a 2px `stroke-focus` outline, 2px away, around the focused thumb; `state="focus"` pins it for documentation.

Keyboard: the arrow keys move the focused thumb by one `step`; Home and End jump to `min` and `max` (native range input behaviour).

## You provide

- `value` + `onChange`, or `defaultValue` for an uncontrolled slider. A number for `default`, `[low, high]` for `range`. `onChange(value, event)` gets a number or a sorted `[low, high]`, not a string.
- `min`, `max`, `step` when 0–100 in steps of 1 is not what you need.
- An accessible name: `aria-label` or `aria-labelledby`. For `range` also `thumbLabels={['…', '…']}` for the low and the high thumb.
- Any label, value readout or min/max captions around it. The Figma component has none, so the slider renders none.
- `name` if it sits in a form. A `range` slider submits two values under the same name.

With `default`, other props (`id`, `aria-*`, `onFocus`…) go to the range input. With `range` they go to the root group. `className` and `style` always go to the root. A `ref` follows the other props: it points at the `<input>` with `default` and at the root group with `range`.

## Do / don't

- Do show the current value next to the slider when the number matters; the thumb alone does not say it.
- Do put it on a ground it can be seen on. The track is `primary-neutral-100` (#FAFAFA), which nearly disappears on a white or near-white surface.
- Don't rely on colour to show a disabled slider; there is no disabled look. Hide it or explain why it is locked.
- Don't expect a click on the track of a `range` slider to move a thumb: only the thumbs take the pointer there. A `default` slider does jump to the clicked spot.

## Differences from Figma

- Legacy palette: every colour is bound to the old "Color Styles" variables (`primary-purple-500`, `primary-neutral-100`). They do not switch with the theme, so the slider looks the same in light and dark.
- The component set ("Component 2", `3850:7233`) has two variants, Default and Range, that are the same layer for layer: each holds one "Slider / Value" instance (a single purple thumb). `default` is built from that. `range` is built from the standalone "Slider / Range" component (`3850:7210`), which is the only place two purple thumbs are drawn.
- Not built: both variants of the set carry a second 24px thumb in `primary-neutral-200` (#F5F5F5) lying on the unfilled part of the track (x 163–187 of 256). Its purpose is not stated anywhere on the page, so it is left out.
- Focus ring: Figma has no focus state. A 2px `stroke-focus` outline was added for keyboard users, as on Button.
- No hover, pressed or disabled looks exist in Figma; none were invented.
- Width: Figma fixes the slider at 256px. `fullWidth` is an addition.
- Range behaviour is not specified in Figma. Here the two thumbs may cross; the value is always reported as `[low, high]`.
- The page has no text layers, so the component sets no font. No icons, no unbound colours, no shadows.
- Rendering was checked in Chromium only. The Firefox thumb and track rules (`::-moz-range-*`) are written but not tested.
