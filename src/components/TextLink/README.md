# TextLink

An inline text action with no container: a link to another page, or a small action that sits inside or beside body text. Use it where a Button would be too heavy; use Button `variant="text"` when the action needs a 32–54px hit target and a hover fill.

It renders an `<a>` when you pass `href`, otherwise a `<button>`. A `ref` goes to that root element.

## Usage

```tsx
import { TextLink } from '@futureskill/design-system';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

<TextLink href="/courses">ดูทั้งหมด</TextLink>
<TextLink tone="destructive" onClick={onRemove}>ลบ</TextLink>
<TextLink underline={false} iconRight={<ArrowRightIcon />}>
  ดูรายละเอียด
</TextLink>
```

## Tone

| `tone` | Label colour | Use for |
| --- | --- | --- |
| `default` | `text-brand` | The normal link. |
| `neutral-strong` | `text-strong` | A link that should read as body text, for example in a footer or a dense list. |
| `neutral-weak` | `text-weak` | A link in secondary text: captions, helper text, metadata. |
| `destructive` | `text-error` | Remove, delete, cancel. |
| `inverse-strong` | `text-inverse-strong` | On `background-inverse` or another dark ground. |
| `inverse-weak` | `text-inverse-weak` | Secondary link on a dark ground. |

## Size and weight

| `size` | Font size / line height | Height | Icon | Gap |
| --- | --- | --- | --- | --- |
| `small` (default) | 16 / 24 | 24px | 20px | `space-8` |
| `tiny` | 14 / 20 | 20px | 20px | `space-8` |

`weight="bold"` (default) is Noto Sans Thai SemiBold, 600. `weight="regular"` is 400. The link has no padding, radius, border or shadow; its box is the text line.

## Underline and states

| `underline` | At rest, focus, disabled | Hover and press |
| --- | --- | --- |
| `true` (default) | underlined | underline removed |
| `false` | no underline | underlined |

- Hover and press are the same in Figma, and neither changes the colour. The only feedback is the underline flipping.
- Focus draws a ring 4px outside the link on every side: 2px `stroke-focus`, `radius-4`. The label keeps its resting underline.
- Disabled turns the label `text-disabled` (`text-inverse-disabled` on the two inverse tones), keeps the resting underline and ignores hover.

The underline is solid, default thickness and offset, and it does not skip descenders.

## You provide

- The label as `children`. Keep it on one line; the link does not wrap.
- `href` for navigation, or `onClick` for an action. `target`, `rel` and other anchor or button attributes pass through.
- Optional `iconLeft` / `iconRight`: pass any icon node; a bare Heroicons component is sized to 20px automatically and takes the tone's icon colour, e.g. `<ArrowRightIcon />` from `@heroicons/react/24/outline`. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size.
- `disabled` when the action is not available. On an anchor this drops the `href` and sets `aria-disabled`.

## Do / don't

- Do use `underline` (the default) for a link inside a sentence, so it is recognisable without relying on colour.
- Do use `underline={false}` only where the context already says "this is a link": navigation lists, footers, "ดูทั้งหมด" beside a section title.
- Don't use the inverse tones on a light ground, or the other four tones on a dark one.
- Don't put an icon on a `neutral-strong`, `neutral-weak`, `inverse-strong` or `inverse-weak` link without setting its colour yourself (see below).

## Differences from Figma

- **Icon colour is only designed for the default tone.** There the icon is bound to `icon-brand`. In the other five tones the Figma icon slot still holds an unswapped placeholder from an imported UI-kit library, and its ink is that library's variable ("Icon/Neutral" `#000d4d73`, "Icon/Error" `#c73a3acc`), not a token of this system. The component uses this system's same-named tokens instead: `icon-neutral` for `neutral-strong` and `neutral-weak`, `icon-error` for `destructive`. For the two inverse tones the file's ink would be near-invisible on a dark ground, so they use `icon-inverse-strong` and `icon-inverse`; that pairing is this system's choice, not a Figma value. Override with `--fs-text-link-ink` on the link if needed.
- **Icons do not grey out when disabled.** Figma changes only the label colour in the Disabled state, so the icon keeps its tone ink.
- **Icon glyphs.** The default tone's slot shows "Icon Style / Arrows / Arrow twoway", a filled glyph from the in-house set. The preview uses Heroicons `ArrowsRightLeftIcon` (outline). The other tones' slot is a placeholder (a rounded square outline, remote component "Component"), which has no Heroicons equivalent; pass the icon you need.
- **Copy.** Every text layer in the set and in its documentation frame reads "Label". The preview labels its links with the axis value names from the documentation frame; there is no Thai copy for this component in the file.
- **No text style.** The label layers are not bound to a text style; font, size, line height and weight were read from the layers directly.
- **"Bold" is SemiBold.** The Figma axis value is "Bold" but the layer is Noto Sans Thai SemiBold, so the weight is 600.
- **Defaults.** `tone="default"`, `size="small"`, `weight="bold"`, `underline` true are the first value of each Figma axis; the file does not state a default.
- **Unbound fill not reproduced.** The default tone's Default, Disabled and Focus variants carry a root fill of `#ffffff03` (white at 1%), which is invisible and absent from every other variant.
- **Focus ring** is a pseudo-element with the same geometry as Figma's "Focus ring" rectangle; real focus shows it for keyboard focus only (`:focus-visible`).
- No legacy palette tokens are used; all label colours and the focus ring follow the theme.
