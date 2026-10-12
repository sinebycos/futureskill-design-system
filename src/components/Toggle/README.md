# Toggle

A switch between two states, on and off, that takes effect the moment it is flipped (Figma component "Switch"). Use it for a setting that applies at once; use Checkbox when the choice is only sent with a form.

It is a real `<input type="checkbox" role="switch">` laid invisibly over a drawn track, so clicks, Space, forms and screen readers all work.

## Usage

```tsx
import { Toggle } from '@futureskill/design-system';
import { CheckIcon, XMarkIcon } from '@heroicons/react/16/solid';

<Toggle aria-label="แจ้งเตือนทางอีเมล" checked={on} onChange={(e) => setOn(e.target.checked)} loading={saving} />
<Toggle size="small" aria-label="โหมดมืด" checkedText="ON" uncheckedText="OFF" />
<Toggle
  aria-label="แสดงใบรับรอง"
  defaultChecked
  checkedIcon={<CheckIcon />}
  uncheckedIcon={<XMarkIcon />}
/>
```

A `ref` goes to the `<input>`.

## Inner content

The track can carry a short text or a 12px icon on the side the nob is not on. Each side is set on its own.

| Props | Figma | Use for |
| --- | --- | --- |
| none | `Text=false, Icon=false` | The default. A bare track: `#bfbfbf` when off, `primary-purple-500` when on, white nob. |
| `checkedText` / `uncheckedText` | `Text=true` | A very short word per state. Figma copy is "ON" and "OFF", 12/20 regular, white. The track grows to fit the text. |
| `checkedIcon` / `uncheckedIcon` | `Icon=true` | A 12px white icon per state. Pass any icon node; a bare Heroicons component is sized to 12px automatically (at both sizes) and drawn white, e.g. `<CheckIcon />` from `@heroicons/react/16/solid`. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. Figma shows a check when on and a cross when off. |

Figma never shows text and an icon together. If both are passed for the same side, the icon is used.

## Sizes

| `size` | Bare track | Nob | Nob while pressed | With text | With icon |
| --- | --- | --- | --- | --- | --- |
| `medium` (default) | 44 x 22px | 18px | 24px (23px beside text or an icon) | hugs: 2 + 4 + text + 5 + 18 + 2 | 42 x 22px |
| `small` | 28 x 16px | 12px | 15px | hugs: 2 + 4 + text + 4 + 12 + 2 | 36 x 16px |

The nob sits 2px (`space-2`) from the track edge. Text and icons keep 4px (`space-4`) from the outer edge. Track and nob radius is `radius-16`, which makes both fully round. The nob has a `0 2px 4px #00230b33` shadow. The text stays 12/20 at both sizes.

## States

| State | Look | How |
| --- | --- | --- |
| Off / on | Track `#bfbfbf` / `primary-purple-500`; nob left / right. | `checked` or `defaultChecked` |
| Pressing | The nob stretches toward the middle of the track; colours do not change. | real `:active`, or `state="press"` |
| Focusing | Off: a 4px ring of 10% black (`#0000001a`). On: a 3px halo of `primary-purple-500` at 20%. | keyboard focus, or `state="focus"` |
| Loading | Whole switch at 40% opacity; a quarter arc is cut into the nob and shows the track colour. Input is blocked and `aria-busy` is set. | `loading` |
| Disabled | Whole switch at 40% opacity. Input is blocked. | `disabled` |

Motion comes from the Figma prototype: the nob stretches in 180ms ease-out on press, and the nob and track colour move in 150ms ease-out on release. The focus halo fades out over 850ms `cubic-bezier(0, 0, 0, 0.99)`.

## You provide

- `checked` + `onChange` (controlled) or `defaultChecked` (uncontrolled). `onChange` is the native handler: read `event.target.checked`.
- An accessible name: `aria-label`, `aria-labelledby`, or an `id` with a `<label for>` next to it. The switch has no visible label of its own, and the inner "ON" / "OFF" text is hidden from screen readers.
- Optional `size`, inner text or icons, `loading`, `disabled`.
- `className` and `style` go to the root span. Every other prop (`name`, `value`, `id`, `aria-*`) goes to the input.

## Do / don't

- Do put the setting's name in a text label beside the switch; the switch itself only shows on or off.
- Do keep inner text to one short word per state. The track changes width when the two words differ in length ("ON" 48px, "OFF" 53px in Figma).
- Do set `loading` while the change is being saved, and clear it when the result is back.
- Don't use a switch for a choice that only applies after a Save button; use Checkbox.
- Don't rely on the focus ring alone on dark grounds: it is 10% black and close to invisible there.

## Differences from Figma

- Legacy palette throughout. The on colour is the legacy `primary-purple-500` token. The other colours are old paint styles with no token of the same name, so they are literals: `#bfbfbf` (style "neutral-6", off track), `#ffffff` (styles "character-primary-inverse", "grey-grey-1", "neutral-1": nob, text, icons). The nob shadow `#00230b33` and the off focus ring `#0000001a` are unbound. None of these change with the theme, so the switch looks the same in light and dark.
- Font: the "ON" / "OFF" text is Roboto Regular 12/20 in Figma (text style "Footnote/description"), a leftover. It is set in `font-thai` here, which makes "ON" about 1.5px wider (49.5px track instead of 48px).
- Icons: Figma uses "Check" and "Close" from an imported kit. Previews use Heroicons `CheckIcon` and `XMarkIcon` from the 16px solid (micro) set at 12px; the Heroicons glyphs are a little smaller and heavier inside the same 12px box. The loading arc is not a Heroicons glyph: it is drawn from the Figma "Loading" vector.
- The loading arc spins (1s, linear) and stops under `prefers-reduced-motion`. Figma shows it still, so the speed is not from the file.
- Loading blocks input. Figma only gives the look (the same 40% as disabled).
- Focusing exists in Figma only for the bare medium switch. The same ring is used at both sizes and with text or icons. In the Figma prototype it is a flash after the click that fades out; here it stays while the switch has keyboard focus and fades when focus leaves. Figma's ring is kept as drawn, so it is faint.
- The "halo" layer is `#000000` at 1% opacity behind the off switch, and at 0% in the resting variants. It is not drawn.
- Figma has no hover state and no label beside the switch; none was added.
- Pressing exists in Figma only for enabled switches. Disabled and loading switches do not react to a press here either.
