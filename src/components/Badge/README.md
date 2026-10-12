# Badge

A small pill that labels the status of the thing next to it: an error, a warning, a success, a piece of information, or a neutral or brand tag. It is read, not clicked; for something the user can press or remove, use a button or a chip instead.

## Usage

```tsx
import { Badge } from '@futureskill/design-system';
import { ClockIcon } from '@heroicons/react/24/outline';

<Badge tone="success">ผ่านแล้ว</Badge>
<Badge tone="warning" size="small" icon={<ClockIcon />}>ใกล้หมดเวลา</Badge>
<Badge icon={false} dot="busy">Busy</Badge>
```

The root `span` receives the forwarded `ref`.

## When to use which

| `tone` | Use for | Ground / border / label / icon |
| --- | --- | --- |
| `error` | Failed, rejected, overdue. | `fill-error-weak` / `stroke-error-weak` / `text-error` / `icon-error` |
| `warning` | Needs attention, about to expire. | `fill-warning-weak` / `stroke-warning-weak` / `text-warning` / `icon-warning` |
| `success` | Done, passed, approved. | `fill-success-weak` / `stroke-success-weak` / `text-success` / `icon-success` |
| `information` | Neutral facts worth noticing. | `info-50` / `info-500` / `info-600` / `info-600` (legacy palette) |
| `neutral` | Default. Plain tags and counts with no status meaning. | `fill-weak` / `stroke-weak` / `text-weak` / `icon-neutral` |
| `brand` | A tag that should carry the brand colour. | `fill-brand-weak` / `stroke-brand-weak` / `text-brand` / `icon-brand` |

Every tone has a 1px border drawn inside the pill, so the outer size does not change.

## Sizes

| `size` | Height | Padding | Radius | Label | Icon |
| --- | --- | --- | --- | --- | --- |
| `medium` | 32px | 0 / 8, plus 4 each side of the label | `radius-16` | `th-p4` 16/24 Regular | 20px |
| `small` | 24px | 0 / 8, plus 4 each side of the label | `radius-16` | `th-p5` 14/22 Regular | 16px |

There is no gap between the icon, the dot and the label; the 4px on each side of the label (and of the dot) does the spacing. With the default icon and the text "Label" the badge is 85 × 32 at medium and 76 × 24 at small, as in Figma.

## Icon and dot

- `icon` is on by default, as in Figma. Each tone has its own default: error `x-circle`, warning `exclamation-triangle`, success `check-circle`, information `information-circle`. Neutral and brand show `arrows-right-left`, which stands in for a placeholder glyph in Figma: pass your own icon node or `icon={false}` for those two tones.
- A custom `icon`: pass any icon node; a bare Heroicons component is sized to 20px at medium and 16px at small automatically and takes the tone's icon colour, e.g. `<ClockIcon />` from `@heroicons/react/24/outline`. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. Icon names as strings are no longer accepted.
- `dot` adds a 12px status dot between the icon and the label (same 12px in both sizes). `true` is `online` (`#067a57`); `busy` and `notification` are `#c73a3a`, `away` is `#fec62e`, `offline` is `#0011661a` over white. Off by default.

## States

None. Badge has no hover, press, focus or disabled variant in Figma.

## You provide

The label as children: one or two words, Thai or English. Optionally `tone`, `size`, an `icon` (your own node, or `false`) and `dot`. Other attributes (`title`, `aria-label`, `id`…) pass through to the root `span`.

## Do / don't

- Do match the tone to the meaning; colour alone is not enough, so keep the icon or write a label that says the status.
- Do use `small` inside tables, list rows and cards, `medium` next to headings.
- Don't put a sentence in a badge: it does not wrap.
- Don't attach `onClick`: there is no hover or focus style.
- Don't rely on the default icon for `neutral` and `brand`; it is a placeholder.

## Differences from Figma

- Default tone: the Figma component's default variant is Error. The code default is `neutral`, so a badge with no props carries no status meaning.
- Error border: in Figma it is bound to "Stroke/Error weak" from an imported UI-kit library (`#c73a3a24`), not to the local variable. The component uses this system's same-named token `stroke-error-weak`, like the other tones' borders, so it follows the theme.
- Information tone uses the legacy palette (`info-50`, `info-500`, `info-600`). These do not switch with the theme, so the badge stays light blue on a dark ground, as it would in the file.
- Badge dot: in Figma it is a hidden instance of the "Badge dot" component from an external library (Type=Online, Size=Medium). Its colours are bound to that library's variables ("Fill/Success strong" `#067a57`, "Fill/Error strong" `#c73a3a`, "Fill/Yellow" `#fec62e`, "Fill/Disabled" `#0011661a`, "Background/Base" `#ffffff`), written here as hex literals; they do not change in dark theme. The small glyphs inside the dot (check, minus, clock hand, x) are not drawn: their ink could not be read from the nested instances. Without them `busy` and `notification` look the same. The dot's Large (16px) and Small (8px) sizes and its "Outline" option are not built, because Badge only ever nests the Medium dot.
- Icons: the Figma badge uses the in-house "Icon Style" set. Substitutions (all `@heroicons/react/24/outline`): User Interface/Close → `XCircleIcon`, User Interface/Exclamation Mark 3 → `ExclamationTriangleIcon`, User Interface/Approve → `CheckCircleIcon`, User Interface/Exclamation → `InformationCircleIcon`, Arrows/Arrow twoway → `ArrowsRightLeftIcon`. Heroicons outline strokes are a little thinner than the Figma glyphs.
