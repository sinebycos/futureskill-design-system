# Toast

A small, fixed-width message (313px) that reports the result of an action: a status icon, one line of text, a close icon and an optional progress bar along the bottom edge. Use it for short feedback that appears over the page and goes away; this component draws one toast only, so positioning, stacking and timing are yours.

## Usage

```tsx
import { Toast } from '@futureskill/design-system';

<Toast variant="success" theme="dark" progress={60} onClose={dismiss}>
  บันทึกเรียบร้อยแล้ว
</Toast>
```

The root `div` receives the forwarded `ref`.

## Type

`variant` is Figma's "Type". It picks the status colour and the icon.

| `variant` | Main colour | Light partner | Icon (Heroicons solid, 24px) | Use for |
| --- | --- | --- | --- | --- |
| `success` (default) | `#55b938` | `#cceac4` | `check-circle` | An action completed. |
| `error` | `#d65745` | `#f3cdc8` | `exclamation-circle` | An action failed. |
| `warning` | `#eac645` | `#f9eec8` | `exclamation-triangle` | Something needs attention. |
| `info` | `#5296d5` | `#cbe0f3` | `information-circle` | Neutral information. |

## Theme

`theme` is Figma's "Theme" axis. It is a prop, not the page theme: the toast looks the same under `data-theme="light"` and `data-theme="dark"`, because none of its colours are tokens.

| `theme` | Ground | Text | Status icon | Close icon | Progress bar |
| --- | --- | --- | --- | --- | --- |
| `light` (default) | `#ffffff` | `#000000` | main colour | `#b3b3b3` | main colour |
| `dark` | `#121212` | `#ffffff` | main colour | `#b3b3b3` | main colour |
| `colored` | main colour | `#ffffff` | `#ffffff` | light partner | light partner |

## Size

One size. 313px wide, 64px high, `radius-4`, contents clipped to the rounded box. No border and no shadow.

- Status icon: 24px box, 12px (`space-12`) from the left, centred vertically (20px from the top).
- Message: starts 8px (`space-8`) after the icon, at x 44. Noto Sans Thai Regular 16/24 (Figma text style "Body Thai/P4 - Regular"). Its box sits 2.5px lower than the icon's.
- Close icon: 16px box, 9px from the top and 9px from the right.
- Progress bar: 5px high, flush with the left and bottom edges, square ends.

## Progress

`progress` draws the bar (Figma "Progress = Yes"). A number from 0 to 100 is the bar's width as a percentage of the toast. `true` draws it at the length shown in Figma: 188 of 313px. Omit it, or pass `false`, for no bar (the default). The component does not animate or count down: change the number yourself if the bar should move.

## States

Figma defines no hover, press, focus or disabled looks for Toast. Clicking the close icon hides the toast (uncontrolled) and calls `onClose`; pass `open` to control visibility yourself.

## You provide

- `children` (or `message`): the text. Figma only shows one short line (the placeholder "Wow so easy").
- `variant`, `theme`.
- `progress` (optional): a number 0-100 or `true`.
- `icon` (optional): replaces the variant's icon. Pass any icon node; a bare Heroicons component is sized to 24px automatically and takes the variant's icon colour, e.g. `<BellIcon />` from `@heroicons/react/24/solid` (the solid set matches the defaults). Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. `null` or `false` removes it. Icon names as strings are no longer accepted.
- `closable={false}` to drop the close icon; `onClose`; `closeLabel` for its aria-label (default "ปิด").
- Where it sits on the screen, how several toasts stack, and when it disappears. None of that is in the Figma file.
- Other div attributes pass through. `role` defaults to `alert` for error and warning, `status` for success and info.

## Do / don't

- Do keep the message to one short line. Longer text wraps and the toast grows taller, but Figma has no multi-line toast.
- Do pick `theme` for the ground the toast will sit on: a `light` toast is plain white with no border or shadow, so it disappears on a white page; a `dark` toast disappears on a near-black one.
- Do match `variant` to the meaning; don't use `error` for emphasis.
- Don't add a shadow, border or larger radius: the Figma toast has none.
- Don't rely on colour alone on `colored` + `warning`: white text on `#eac645` is about 1.7:1 contrast, as drawn in Figma.
- Don't use it for messages that must stay on screen or need an action button; use Alert.

## Differences from Figma

- No tokens. The component set has no variable bindings. Raw hexes: `#ffffff` (light ground; text on dark and colored; icon on colored), `#000000` (text on light), `#121212` (dark ground), `#b3b3b3` (close icon on light and dark). The status colours are legacy paint styles that are not in this system's tokens, so they are written as literals: `success-main` `#55b938`, `success-light` `#cceac4`, `error-main` `#d65745`, `error-light` `#f3cdc8`, `warning-main` `#eac645`, `warning-light` `#f9eec8`, `info-main` `#5296d5`, `info-light` `#cbe0f3`. Nothing changes with the page theme.
- Icons. Figma's "Icon Toast" set holds four 20px solid glyphs in a 24px box; this system ships Heroicons. Substitutions: check-mark ("check-circle-solid") → `CheckCircleIcon`, exclamation-circle ("exclamation-circle-solid") → `ExclamationCircleIcon`, exclamation-tringle ("exclamation-triangle-solid") → `ExclamationTriangleIcon`, info-circle ("info-circle-solid") → `InformationCircleIcon`, all from `@heroicons/react/24/solid` at 24px, which has the same extent. The drawings differ slightly (Figma's marks are heavier). "Close Icon" (an instance from another library: a 10px cross with a 2px stroke) → outline `XMarkIcon`, drawn at 20px with a 2.4 stroke so its lines are also 10px long and 2px thick; its ends are round where Figma's are square.
- Inconsistent variants. 20 of the 24 variants share one layout, which is the one built. Four Light variants are drawn differently in Figma and were normalised to it: Success / Light / Progress=Yes is 313×69 with the icon at x 8, the close icon 8px from the top and right, and a 186px bar; Success / Light / No has the icon at x 9; Error / Light / No has the close icon 12px from the right; Warning / Light / No is 58px high. In those three "No" variants the icon and the text both start at y 25 (20 and 22.5 everywhere else).
- Defaults. The first Figma variant is Success / Light / Progress=Yes. In code `progress` defaults to off, because a fixed bar with no timer behind it says nothing.
- Added in code, not in Figma: `max-width: 100%` and text wrapping (Figma is a fixed 313×64 with a hugging single line), a numeric `progress`, hiding on close, a 2px `stroke-focus` outline on the close button for keyboard users, and the `role`.
- Not built: a toast container, screen positions, stacking, enter and exit motion, auto-dismiss timers. The Figma page shows single toasts only.
