# Textarea

Multi-line text field of the legacy input family, with an optional character count under it. This is the legacy input family (Figma "Textarea" on page "22 - Text Input"): use it only to match screens that already use it, and use `TextInput` for new work (note that `TextInput` is single-line).

It wraps a real `<textarea>`, two rows tall by default, that the user can resize vertically.

## Usage

```tsx
import { Textarea } from '@futureskill/design-system';

<Textarea
  aria-label="ความคิดเห็น"
  placeholder="เล่าสิ่งที่ได้เรียนรู้"
  rows={3}
  maxLength={100}
  showCount
  value={note}
  onChange={(e) => setNote(e.target.value)}
/>
```

`ref` (or `inputRef`) points to the native `<textarea>`.

## Sizes

| `size` | Padding | Radius | Text | Height at 2 rows |
| --- | --- | --- | --- | --- |
| `large` | 8 / 16 | `radius-8` | 16/24 Regular | 64px |
| `medium` (default) | 5 / 12 | `radius-8` | 14/22 Regular | 54px |
| `small` | 1 / 8 | `radius-4` | 14/22 Regular | 46px |

The width is 395px as drawn; set `fullWidth` to fill the container. Set `rows` for a taller box.

## States

| State | Look |
| --- | --- |
| normal | `#ffffff` fill, 1px inside stroke `#d9d9d9`. Placeholder `#00000040`, value `#000000d9`. |
| hovered | Stroke `primary-purple-500`. |
| focused | Stroke `primary-purple-500`, plus a 2px ring `#1890ff33`. |
| disabled | `#f5f5f5` fill, `#d9d9d9` stroke, text `#00000040`, no resize. |

`state` pins one of these for documentation; real hover, focus and `disabled` work without it.

## Character count

`showCount` adds the count under the box: 14/22, `#00000040`, right-aligned, 2px in from the right edge, touching the box. With `maxLength` it reads "97 / 100"; without it, just the number. The count takes 22px of layout height below the box.

## You provide

- `placeholder`, `value` + `onChange` or `defaultValue`, `rows`, `maxLength`, `name`, `disabled` and any other textarea attribute: they go to the `<textarea>`.
- `className` and `style` go to the outer wrapper. `inputRef` gives the `<textarea>` element.
- A label: `<label htmlFor>` with an `id` on the textarea, or `aria-label`.

## Do / don't

- Do set `maxLength` when you show the count, so the reader sees the limit.
- Do keep it on a light surface: the box stays white in dark theme, and the count (black at 25%) cannot be read on a dark ground.
- Don't use it for one-line answers; use `TextInput`.

## Differences from Figma

- Colours that are not tokens (legacy paint styles, written as hex): `#ffffff` (neutral-1), `#d9d9d9` (neutral-5), `#f5f5f5` (neutral-3), `#00000040` (character-disabled-placeholder-25), `#000000d9` (character-title-85). The focus ring `#1890ff33` comes from the effect style "drop-shadow/active-2px-spread"; it is the blue of the source UI kit, not the purple ring `Input` uses, and is kept as drawn.
- Legacy palette token used: `primary-purple-500` (hover and focus stroke). Nothing switches with the theme.
- Resize handle: Figma draws its own 8px corner mark (`#262626`), 2px in from the bottom right. The browser's native handle is used.
- The Figma placeholder reads "Autosize height based on content lines". Auto-growing is not built; the box keeps its rows until the user resizes it.
- In Figma the count hangs outside the component's frame. Here it is part of the layout, so nothing overlaps what follows.
- Focused variants with Show Count use a 2px radius on an inner frame; the size radius (8 or 4) is used for every state.
- One variant (large / normal / filled, no count) is drawn three lines tall (88px); the others are two.
- Font: large text is Roboto 16/24 ("H5/regular"), a leftover; `font-thai` is used.
