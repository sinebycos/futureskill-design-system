# Input

Single-line text field of the legacy input family, with optional prefix, suffix and addon cells. This is the legacy input family (Figma "Input" on page "22 - Text Input"): use it only to match screens that already use it, and use `TextInput` for new work.

It wraps a real `<input>`. There is no label, hint or error message in this component; put your own `<label>` next to it.

## Usage

```tsx
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Input } from '@futureskill/design-system';

<Input aria-label="Website" addonBefore="https://" suffix=".com" placeholder="example" />
<Input aria-label="Setting" size="large" prefixIcon={<Cog6ToothIcon />} defaultValue="HTML" />
```

## Sizes

| `size` | Height | Padding | Radius | Text |
| --- | --- | --- | --- | --- |
| `large` | 40px | 8 / 12 | `radius-8` | 16/24 Regular |
| `medium` (default) | 32px | 5 / 12 | `radius-8` | 14/22 Regular (`Body Thai/P5`) |
| `small` | 24px | 1 / 8 | `radius-4` | 14/22 Regular |

The width is 222px as drawn in Figma. Set `fullWidth` to fill the container, or set a width with `style`.

## States

| State | Look |
| --- | --- |
| normal | `#ffffff` fill, 1px inside stroke `#d9d9d9`. Placeholder `#00000040`. |
| focused | Stroke `primary-purple-500`, plus a 2px ring `#842cdd33` outside the field. |
| disabled | Medium: `primary-neutral-100` fill, `primary-neutral-400` stroke. Large and small: `#f5f5f5` fill, `#d9d9d9` stroke. Text and placeholder `#00000040`. |

Figma has no hover state and no error state for this component, and none was added. `state="focused"` and `state="disabled"` pin a look for documentation; real focus and the `disabled` attribute work without it.

## Prefix, suffix and addons

| Slot | Props | Look |
| --- | --- | --- |
| Prefix / suffix | `prefix`, `suffix` (text or node), `prefixIcon`, `suffixIcon` (icon node) | Inside the field, 4px from the value. Icon 14px in `#00000073`; text 14/22 in `#000000d9` (Figma sample: ".com"). |
| Addon before / after | `addonBefore`, `addonAfter` (text or node), `addonBeforeIcon`, `addonAfterIcon` (icon node) | A `#fafafa` cell joined to the field, 1px `#d9d9d9` stroke, 12px side padding, content in `#000000d9` (Figma samples: "http://", a 14px icon). The focus ring stays on the field only. |

The `…Icon` props take any icon node, e.g. `<Cog6ToothIcon />` from `@heroicons/react/24/outline`. An icon element gets class `fs-icon`, 14px width and height, stroke width 2 and `aria-hidden` unless you set those props on it yourself. Anything else (text, a fragment) is rendered as given.

## You provide

- `placeholder`, `value` + `onChange` or `defaultValue`, `type`, `name`, `disabled`, `maxLength` and any other input attribute: they go to the `<input>`.
- `className` and `style` go to the outer wrapper. `ref` gives the `<input>` element (`inputRef` does the same and is kept for compatibility). `htmlSize` is the native `size` attribute.
- A label: `<label htmlFor>` with an `id` on the input, or `aria-label`.

## Do / don't

- Do use it only where the surrounding screen is already built from this family.
- Do keep it on a light surface. Every colour here is a fixed light value, so the field stays white in dark theme.
- Don't mix it with `TextInput` in one form: heights (32 vs 48), radii and focus look differ.
- Don't use it for passwords, search or multi-line text: use `PasswordInput`, `SearchBox`, `Textarea`.

## Differences from Figma

- Colours that are not tokens. The layers use legacy paint styles that have no token, so the hex is written as is: `#ffffff` (neutral-1), `#d9d9d9` (neutral-5), `#fafafa` (neutral-2), `#f5f5f5` (neutral-3), `#00000040` (character-disabled-placeholder-25), `#000000d9` (character-title-85 / character-primary-85), `#00000073` (character-secondary-45). Unbound: `#262626` (large value text) and `#842cdd33` (the focus ring, an effect with no style).
- Legacy palette tokens used: `primary-purple-500`, `primary-neutral-800`, `primary-neutral-100`, `primary-neutral-400`. None of the colours switch with the theme, so the component looks the same in dark.
- Value text colour differs by size in Figma and is kept that way: `primary-neutral-800` (medium), `#262626` (large), `#000000d9` (small). The medium focused variant uses `#000000d9`; that change on focus is not reproduced.
- Variants that disagree with the rest and were not reproduced: medium/normal/filled has a `#fafafa` fill (white is used); large/normal/empty has a `primary-neutral-400` placeholder (`#00000040` is used); widths vary from 216 to 222px (222 is used); the large focused filled field is drawn 1px inset.
- Radius: the root frames say 8 but the inner frames say 2, 4 or 8. The rendered result in Figma is 8 for large and medium and 4 for small, which is what is built.
- Font: large text is Roboto 16/24 ("H5/regular"), and Sarabun in two filled variants. Both are leftovers; `font-thai` is used.
- Addons are hidden in every variant, so they are built from the parts "Input-Addon/Label" and "Input-Addon/Icon". How they join the field could not be seen: the outer corners follow the field radius (the parts themselves say 2px) and the field's joined corners are square.
- Affix icons are 14px in every size. The part set also has a 16px icon that no Input variant uses.
- Icons: Figma shows a gear placeholder ("Setting") in the affix and addon; previews use Heroicons `Cog6ToothIcon`. Pass any icon node.
- "Input-Addon/Cursor" (the blinking caret drawn in focused variants) is not built; the browser draws the caret.
