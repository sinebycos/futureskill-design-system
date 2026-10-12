# SearchBox

Search field of the legacy input family, with an enter control at the right end, an optional clear button and a suffix slot. This is the legacy input family (Figma "Search-Box" on page "22 - Text Input"): use it only to match screens that already use it, and use `TextInput` for new work.

It wraps a real `<input type="search">`. Pressing Enter or the enter control calls `onSearch` with the current text.

## Usage

```tsx
import { SearchBox } from '@futureskill/design-system';
import { MicrophoneIcon } from '@heroicons/react/24/outline';

<SearchBox
  aria-label="ค้นหาคอร์ส"
  placeholder="input search text"
  allowClear
  suffixIcon={<MicrophoneIcon strokeWidth={2} />}
  onSearch={(text) => runSearch(text)}
/>
```

`ref` (or `inputRef`) points to the native `<input>`.

## Enter control

| `enter` | Look | Use for |
| --- | --- | --- |
| `default` | A square cell with a magnifier in `#00000073`, separated by a 1px `#d9d9d9` line. | Quiet search inside a toolbar or filter row. |
| `icon` | A `primary-purple-500` button with a white 14px magnifier, 16px side padding. | Search as the main action, little room. |
| `text` | A `primary-purple-500` button with a white label ("Search" by default) and an optional 14px icon, 8px gap. | Search as the main action, with a word. |

The purple button has square left corners, `radius-2` right corners and a `0 2px 0 #0000000b` shadow.

## Sizes

| `size` | Height | Field padding | Text | Default cell | Purple button padding |
| --- | --- | --- | --- | --- | --- |
| `large` | 40px | 8 / 12 | 16/24 Regular | 40px, 16px icon | 0 / 16 |
| `medium` (default) | 32px | 4 / 12 | 14/22 Regular | 32px, 14px icon | 0 / 16 |
| `small` | 24px | 1 / 8 | 14/22 Regular | 24px, 12px icon | 0 / 8 |

Radius is `radius-2` in every size (the plain `Input` uses 8). The width is 264px as drawn; set `fullWidth` to fill the container.

## Clear and suffix

- `allowClear` shows a 12px clear button in `#00000040` while the field has a value. Pressing it empties the field, fires `onChange`, then `onClear`.
- `suffix` (text or node) or `suffixIcon` (an icon node, coloured `primary-purple-500` by the slot) sits after the clear button, 4px apart. Figma shows a microphone there. Pass any icon node; a bare Heroicons component is sized to 16px automatically (at every size), e.g. `<MicrophoneIcon strokeWidth={2} />` from `@heroicons/react/24/outline`. The design uses a 2px stroke; the slot does not set it, so pass `strokeWidth={2}`. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size.

## States

Figma draws no focused, hovered or disabled Search-Box. So that the control is usable, focus and disabled follow `Input`: focus is a `primary-purple-500` stroke with a 2px `#842cdd33` ring; disabled is a `#f5f5f5` fill with `#00000040` text, and the enter control keeps its colours. `state="focused"` and `state="disabled"` pin those looks.

## You provide

- `placeholder` (Figma sample: "input search text"), `value` + `onChange` or `defaultValue`, `onSearch(value)`, and any other input attribute.
- For `enter="text"`: `enterText` if the label is not "Search", and `enterIcon` if you want an icon before it. Pass any icon node; a bare Heroicons component is sized to 14px automatically, e.g. `<Cog6ToothIcon strokeWidth={2} />` from `@heroicons/react/24/outline` (pass `strokeWidth={2}` to match the design; the slot does not set it). Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size.
- `aria-label` on the input, and `enterLabel` / `clearLabel` if the defaults "Search" / "Clear" are not right for the screen's language.

## Do / don't

- Do keep one enter style per screen.
- Do keep it on a light surface: the field stays white in dark theme.
- Don't use it for filtering as you type without a visible result; it is built around an explicit Enter.
- Don't put it in a form next to `TextInput`: height, radius and focus look differ.

## Differences from Figma

- Colours that are not tokens (legacy paint styles, written as hex): `#ffffff` (neutral-1 and character-primary-inverse), `#d9d9d9` (neutral-5), `#00000040` (character-disabled-placeholder-25), `#000000d9` (character-title-85), `#00000073` (character-secondary-45). The button shadow `#0000000b` comes from the effect style "drop-shadow/button-primary", which has no token.
- Legacy palette token used: `primary-purple-500` (button, suffix icon, focus stroke). Nothing switches with the theme.
- Focus and disabled are not in Figma; they are borrowed from `Input` (`#842cdd33` ring, `#f5f5f5` fill). A 2px `stroke-focus` outline was added on the clear and enter buttons for keyboard users.
- `enter="text"`: Figma shows the Button part's placeholder gear before "Search". The icon slot is empty by default; previews pass `Cog6ToothIcon` to match the drawing.
- Icons (Figma → Heroicons): Search → `magnifying-glass`, close-circle → `x-circle`, Audio → `microphone`, Setting → `cog-6-tooth`.
- Font: large text is Roboto 16/24 ("H5/regular"), a leftover; `font-thai` is used.
- Allow Clear exists in Figma only with Filled=true. Here the clear button appears whenever there is a value.
- Variants are 54, not the full 72 grid: there is no empty field with Allow Clear.
