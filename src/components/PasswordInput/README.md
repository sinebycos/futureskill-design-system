# PasswordInput

Password field of the legacy input family, with an eye button that shows or hides what was typed. This is the legacy input family (Figma "Password" on page "22 - Text Input"): use it only to match screens that already use it, and use `TextInput` for new work.

It wraps a real `<input>` whose type switches between `password` and `text`.

## Usage

```tsx
import { PasswordInput } from '@futureskill/design-system';

<PasswordInput
  id="password"
  name="password"
  autoComplete="current-password"
  placeholder="input password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

`ref` (or `inputRef`) points to the native `<input>`.

## Visibility

| `visible` | Look |
| --- | --- |
| `false` (default) | Dots. Eye-slash icon in `#00000073`. |
| `true` | Plain text. Eye icon in `primary-purple-500`. |

The eye works on its own. To control it, pass `visible` and `onVisibleChange`; `defaultVisible` sets the starting value.

## Sizes

| `size` | Height | Padding | Text | Eye |
| --- | --- | --- | --- | --- |
| `large` | 40px | 8 / 12 | 16/24 Regular | 16px |
| `medium` (default) | 32px | 4 / 12 | 14/22 Regular | 14px |
| `small` | 24px | 0 / 8 | 14/22 Regular | 14px |

Radius is `radius-2` in every size, gap between text and eye 4px. The width is 264px as drawn; set `fullWidth` to fill the container.

## States

| State | Look |
| --- | --- |
| normal | `#ffffff` fill, 1px inside stroke `#d9d9d9`. Placeholder `#00000040`, value `#000000a6`. |
| focused | Stroke `primary-purple-500`, plus a 2px ring `#1890ff33`. |
| disabled | Not drawn in Figma. Follows `Input`: `#f5f5f5` fill, `#00000040` text and eye, eye not clickable. |

## You provide

- `placeholder` (Figma sample: "input password"), `value` + `onChange` or `defaultValue`, `name`, `autoComplete` ("current-password" or "new-password") and any other input attribute.
- A label: `<label htmlFor>` with an `id` on the input, or `aria-label`.
- `showLabel` / `hideLabel` if the eye's default names "Show password" / "Hide password" are not right for the screen's language.

## Do / don't

- Do leave the password hidden by default.
- Do keep it on a light surface: the field stays white in dark theme.
- Don't put it in a form next to `TextInput`: height, radius and focus look differ.

## Differences from Figma

- Colours that are not tokens: `#ffffff` (neutral-1), `#d9d9d9` (neutral-5), `#00000040` (character-disabled-placeholder-25), `#00000073` (character-secondary-45) are legacy paint styles with no token. `#000000a6` (value text) is unbound. The focus ring `#1890ff33` comes from the effect style "drop-shadow/active-2px-spread"; it is the blue of the source UI kit, not the purple ring `Input` uses, and is kept as drawn.
- Legacy palette token used: `primary-purple-500` (focus stroke, visible eye). Nothing switches with the theme.
- Figma has 9 variants: Size × (empty hidden, filled hidden, filled visible). The visible variants are the only ones drawn with the purple stroke and ring, so that look is treated as focus, not as part of "visible". There is no empty visible variant and no disabled variant.
- The Figma eye is a two-tone icon with a pale `#e6f7ff` fill behind the purple outline; the Heroicons `eye` has no second tone.
- Icons (Figma → Heroicons): eye → `eye`, EyeInvisible → `eye-slash`.
- Font: large text is Roboto 16/24 ("H5/regular"), a leftover; `font-thai` is used.
- A 2px `stroke-focus` outline was added on the eye button for keyboard users.
