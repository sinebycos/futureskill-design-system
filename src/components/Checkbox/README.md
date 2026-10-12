# Checkbox

A 16px box, with or without a label, for turning one option on or off; use `CheckboxGroup` when the user picks any number of values from a short list of options. For a single choice out of several use a radio, and for a setting that takes effect at once use a switch.

The box is a real `<input type="checkbox">` restyled with CSS, so forms, keyboard (Tab, Space) and screen readers work as usual.

## Usage

```tsx
import { Checkbox, CheckboxGroup } from '@futureskill/design-system';

<Checkbox defaultChecked>รับข่าวสารทางอีเมล</Checkbox>
<Checkbox checked={all} indeterminate={some} onChange={(e) => setAll(e.target.checked)} aria-label="เลือกทั้งหมด" />
<CheckboxGroup
  aria-label="ช่องทางการเรียน"
  options={['ออนไลน์', 'ในห้องเรียน', { value: 'ojt', label: 'On-the-job', disabled: true }]}
  value={channels}
  onChange={(next) => setChannels(next)}
/>
```

A `ref` on `Checkbox` goes to the `<input>`; on `CheckboxGroup` it goes to the root `<div>`.

## Parts and values

| Part | Value |
| --- | --- |
| Box | 16 × 16px, `radius-2`, fill `fill-inverse-strong`, 1px inside border `stroke-weak` |
| Check | 10.62 × 7.62px mark, 2.69px from the left and 5px from the top of the box, ink `fill-inverse-strong` |
| Indeterminate mark | 8 × 8px square, no radius, centred, `fill-selected` |
| Gap box to label | 8px (`space-8`) |
| Label | Noto Sans Thai Regular 14/22 (`th-p5`), `text-strong` |
| With label | 22px tall; the box sits 3px down, centred on the first line |
| Without label | 16 × 16px |

## States

| State | Box | Mark | Label |
| --- | --- | --- | --- |
| Unchecked | `fill-inverse-strong`, border `stroke-weak` | none | `text-strong` |
| Hover (unchecked only) | border becomes `stroke-selected` | none | unchanged |
| Checked | `fill-selected`, no border | check in `fill-inverse-strong` | `text-strong` |
| Indeterminate | as unchecked | 8px square in `fill-selected` | `text-strong` |
| Disabled | `fill-disabled` laid over `fill-inverse-strong`, border `stroke-disabled` | none | `text-disabled` |
| Disabled checked | as disabled | check in `fill-disabled` (a second 10% layer, so it reads one step darker than the box) | `text-disabled` |

`indeterminate` wins over `checked`. Use it on a "select all" box when some, but not all, of its items are checked.

## CheckboxGroup

| `layout` | Use for | Gap |
| --- | --- | --- |
| `vertical` (default) | Lists in forms and filters; the safe choice for Thai labels of different lengths. | 8px (`space-8`) between rows |
| `horizontal` | Two to five short options on one line. | 16px (`space-16`) between items |

Figma's "Items" axis (1 to 10) is the number of entries in `options`.

## You provide

`Checkbox`: the label as children (leave it out for a bare box and pass `aria-label`). Either `checked` + `onChange` (controlled) or nothing / `defaultChecked` (it keeps its own state). Optional `indeterminate`, `disabled`. `className` and `style` go to the root `<label>`; every other prop (`name`, `value`, `id`, `required`, `aria-*`, `onChange`) goes to the `<input>`.

`CheckboxGroup`: `options` as strings or `{ value, label, disabled }`; either `value` + `onChange(values)` or `defaultValue`; optional `layout`, `name`, `disabled`. Give the group an `aria-label` or `aria-labelledby`; it renders with `role="group"`. Other props go to the root `<div>`.

## Do / don't

- Do write labels as the thing being chosen ("item01" in Figma is placeholder copy); the whole label is clickable.
- Do keep the label on the right of the box. Figma has no other arrangement.
- Do use `vertical` when there are more than five options or labels may wrap.
- Don't use a bare box without an `aria-label`.
- Don't use a checkbox for an action that happens at once; that is a switch or a button.
- Don't put the box on a coloured ground expecting it to adapt: its fill is always `fill-inverse-strong` (white in light, near-black in dark). Figma has no inverse checkbox.

## Differences from Figma

- **Hover is taken from "Checkbox-Input", not from "Checkbox".** The two component sets disagree. In "Checkbox-Input" (`Hovering = true`) the box stays `fill-inverse-strong` and its border turns `stroke-selected`. In "Checkbox" (`Hovering=true`, `Checked=false`) the box is filled `fill-selected` with a smaller 7.84 × 5.62px check in `fill-inverse-strong`, which looks checked while it is not. This build uses the border version.
- States that Figma does not draw: hover on a checked or indeterminate box (no change here), a pressed state, an error state, and a disabled indeterminate box (built by the same rule as the disabled check: box as disabled, 8px square in `fill-disabled`).
- Focus ring: Figma has none. A 2px `stroke-focus` outline with a 2px offset was added for keyboard users, the same as Button.
- Check mark: drawn from the Figma vector's own path (it is a plain vector, not an icon from the "Icon Style" set), so there is no Heroicons substitution.
- Unbound colour: the checked variants carry a 24 × 24px "border" rectangle, 4px outside the box, whose 1px stroke is `#1890ff00` (fully transparent). It paints nothing and was left out.
- Token bindings in Figma are inconsistent between variants: the unchecked box border is bound to `stroke-weak` in "Checkbox-Input" and in "Checkbox" `Label=false`, but to `stroke-disabled` in "Checkbox" `Label=true`; the disabled `Label=true` variant swaps the two again. Both tokens resolve to the same colour in both themes. This build uses `stroke-weak` at rest and `stroke-disabled` when disabled.
- The Figma property is spelled "Disable" in "Checkbox" and "Disabled" in "Checkbox-Input"; the prop is `disabled`.
- Label alignment: Figma centres the box against a one-line label. Here the box is pinned 3px from the top, which is the same position for one line and keeps the box on the first line when a label wraps.
- `CheckboxGroup` `horizontal` wraps to a new line (8px row gap) when it runs out of width. Figma draws a single row and shows no wrapping.
- `CheckboxGroup` `disabled` and per-option `disabled` are conveniences; Figma's group only shows one checked and the rest unchecked.
- The only copy in Figma is the placeholders "Label" and "item01" to "item10"; the previews use them as is.
