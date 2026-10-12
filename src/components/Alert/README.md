# Alert

A full-width banner that carries one short message, with a leading icon, an optional action button and a close icon. Figma calls it "Alert global": use it across the top of a page or section for a message that applies to the whole view, not for feedback on a single field.

## Usage

```tsx
import { Alert } from '@futureskill/design-system';
import { BellIcon } from '@heroicons/react/24/outline';

<Alert tone="error" action="ลองอีกครั้ง" onAction={retry} onClose={dismiss}>
  บันทึกไม่สำเร็จ กรุณาลองใหม่
</Alert>

<Alert tone="brand" device="mobile" icon={<BellIcon strokeWidth={2} />}>
  คอร์สใหม่เปิดให้ลงทะเบียนแล้ว
</Alert>
```

The root `div` receives the forwarded `ref`.

## Tones

| `tone` | Ground | Bottom line (1px, inside) | Leading icon | Use for |
| --- | --- | --- | --- | --- |
| `error` | `fill-error-weak` | `stroke-error-weak` | `x-circle` in `icon-error` | Something failed or blocks the user. |
| `warning` | `fill-warning-weak` | `stroke-warning-weak` | `exclamation-triangle` in `icon-warning` | Something needs attention before it becomes a problem. |
| `success` | `fill-success-weak` | `stroke-success-weak` | `check-circle` in `icon-success` | An action completed. |
| `information` | `#26b0ff0d` | `#1a74a833` | `information-circle` in `#1a74a8` | Neutral information. No local tokens: see "Differences from Figma". |
| `neutral` | `background-base` | `stroke-weak` | `cube` in `icon-neutral` | A plain notice with no status. Default in code. |
| `brand` | `fill-brand-weak` | `stroke-brand-weak` | `cube` in `icon-brand` | Product or promotional notices. |
| `inverse-neutral` | `background-inverse` | none | `cube` in `icon-inverse` | A high-contrast banner on a light page. |
| `inverse-brand` | `fill-brand-strong` (`background-brand` on mobile) | none | `cube` in `icon-inverse` | The loudest banner, on the solid brand colour. |

Text is `text-strong` and the close icon is `icon-neutral`; on the two inverse tones they are `text-inverse-strong` and `icon-inverse`. The cube on neutral, brand and inverse tones is Figma's placeholder ("Box"): pass your own `icon`.

The weak fills are 5% tints, so the ground behind the alert shows through. Place it on `background-base`.

## Device

| `device` | Layout | Padding | Gaps | Height |
| --- | --- | --- | --- | --- |
| `desktop` (default) | One row, centred: icon, text, action, close | 12 top and bottom, 24 left and right | 12 icon to text, 24 text to action, 24 action to close | 56px with an action (32px button), 48px without |
| `mobile` | Icon, then a column with text over the action; close pinned 16px from the top and right | 16 top, 48 right, 16 bottom, 32 left | 12 icon to text, 12 text to action, 2 above and below the column | 102px with one line of text and an action |

Both: icon and close box 24px, message `th-p5` 14/22 Regular in Noto Sans Thai, no corner radius, no shadow on the alert itself. The alert is as wide as its container (the Figma frames are 1440 and 538 wide) and the text wraps. `device` is a prop, not a media query: Figma gives no breakpoint, so you choose.

## Action

A string `action` renders Button `variant="secondary" size="small"`: `tone="neutral"` on the six light tones, `tone="inverse"` on the two inverse tones. That is the only button Figma shows here (label "Label", 32px high, `radius-8`, `shadow-button`). Pass a node instead if you need something else.

## States

Figma defines no hover, press, focus or disabled looks for Alert. The close icon hides the alert when clicked (uncontrolled) and calls `onClose`; pass `open` to control it yourself.

## You provide

- `children`: the message. One sentence.
- `tone`, `device`.
- `icon` (optional): pass any icon node; a bare Heroicons component is sized to 24px automatically and takes the tone's icon colour, e.g. `<BellIcon strokeWidth={2} />` from `@heroicons/react/24/outline`. The slot does not set the stroke: pass `strokeWidth={2}` to match the default tone icons. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. `null` or `false` removes the icon.
- `action` (optional): a string becomes the small secondary Button; any other node is rendered as is. `onAction` is the click handler of that Button.
- `closable={false}` to drop the close icon; `onClose`; `closeLabel` for its aria-label (default "ปิด").
- Other div attributes pass through. `role` defaults to `alert` for error and warning, `status` for the rest.
- Icon props take nodes, not Heroicons names: `icon="bell"` from the old runtime is now `icon={<BellIcon … />}`.

## Do / don't

- Do keep the message to one line on desktop; it wraps, but the banner is built for a single sentence.
- Do use the tone that matches the meaning; don't pick `error` for emphasis.
- Do give neutral, brand and inverse alerts an icon that fits the message instead of the placeholder cube.
- Don't stack several alerts of the same tone; merge the messages.
- Don't put an inverse-tone Button on a light tone or the other way round; a string `action` picks the right one.
- Don't round the corners or add a shadow: the banner is flush, edge to edge, with only a bottom line.

## Differences from Figma

- Icons: Figma uses the in-house "Icon Style" set. Substitutions: Close → `XCircleIcon`, Exclamation Mark 3 → `ExclamationTriangleIcon`, Approve → `CheckCircleIcon`, Exclamation → `InformationCircleIcon`, Box → `CubeIcon`, x → `XMarkIcon` (all `@heroicons/react/24/outline`). Tone icons are drawn with a 2px stroke so they span 20px like the Figma glyphs; the `XMarkIcon` is drawn at 28px inside its 24px box so the cross spans 16px like Figma's.
- Information tone is not on local tokens. Its fill and line are bound to variables from another library (`Fill/Information weak` = `#26b0ff0d`, `Stroke/Information weak` = `#1a74a833`) and its icon is a raw `#1a74a8`. None of these exist in this system's tokens, so they are written as literals and do not change in dark theme.
- The nested Button carries a raw fill override `#ffffff03` (1% white) on the twelve non-inverse variants. It is kept as a literal through Button's `--fs-btn-bg`; it is not visible.
- `inverse-brand` uses `fill-brand-strong` on desktop and `background-brand` on mobile in Figma. Both resolve to the same colour; the component follows each variant as drawn.
- Mobile variants in Figma are partly broken: the message layer is a fixed 1216px wide and is clipped by the 538px frame, and in the Warning, Success, Information, Neutral and Brand mobile variants the close icon sits at x=1400, outside the frame, so it does not show. The component wraps the text and shows the close icon at 16px from the top and right on every tone, as in the Error and inverse mobile variants.
- Figma always shows the button and the close icon and has no property to hide them. In code the action appears only when you pass `action`, and `closable={false}` removes the close icon; the 48px height without an action is a result of that, not a Figma variant.
- Default tone: Figma's default variant is Error. The code default is `neutral`.
- Width: the Figma frames are fixed at 1440px and 538px; the component fills its container.
- Focus ring: Figma has none. The close icon gets a 2px outline in `stroke-focus` (`stroke-inverse-strong` on inverse tones) for keyboard users.
- Copy: the Figma layers hold placeholder text only ("Lorem ipsum dolor sit amet consec tetur adipiscing elit", button "Label"); the preview uses it as is.
- The desktop Error variant is named `Tone=Error,Device=Desktop` (no space after the comma) in Figma. It reads fine; noted in case a script matches on the name.
