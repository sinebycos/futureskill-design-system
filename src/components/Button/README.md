# Button

Triggers an action. One **primary** button per view, for the thing the screen is for; everything else is **secondary** or **text**.

## Usage

```tsx
import { Button } from '@futureskill/design-system';
import { AcademicCapIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

<Button onClick={buy}>ซื้อคอร์สนี้</Button>
<Button variant="secondary" iconLeft={<AcademicCapIcon />}>ดูใบรับรอง</Button>
<Button variant="text" tone="destructive">ยกเลิก</Button>
<Button iconOnly iconLeft={<ChevronLeftIcon />} aria-label="Back" />
<Button htmlType="submit" size="large">ซื้อคอร์สนี้</Button>
```

`ref` goes to the native `<button>`.

## When to use which

| `variant` | Use for |
| --- | --- |
| `primary` | The main action: "ซื้อคอร์สนี้", "ดูใบรับรอง". Filled with `fill-brand-strong`. |
| `secondary` | Alternative actions beside a primary. 1px border in `stroke-brand-strong`, no fill. |
| `text` | Low-emphasis actions: cancel, dismiss, a link-like action in a row. No container until hover. |

| `tone` | Use for |
| --- | --- |
| `brand` | Default. |
| `neutral` | Actions that should not compete with a brand primary nearby. Near-black `fill-strong`. |
| `destructive` | Delete, remove, cancel enrolment. `fill-error-strong`. |
| `inverse` | Only on `background-inverse`, `background-black` or another dark ground. |

## Sizes

| `size` | Height | Padding | Radius | Label | Icon |
| --- | --- | --- | --- | --- | --- |
| `large` | 54px | 12 / 24 | `radius-12` | `th-p2` 20/30 | 24px |
| `medium` | 40px | 8 / 16 | `radius-8` | `th-p4` 16/24 | 20px |
| `small` | 32px | 5 / 12 | `radius-8` | `th-p5` 14/22 | 16px |
| `tiny` | 35px | 10 | `radius-16` | 12px | — |

`iconOnly` makes a square button: 48px at `medium` (24px icon), 32px at `small` (16px icon). There is no large or tiny icon-only button in Figma.

## States

Hover lays `fill-hover` over the button and press lays `fill-click`; on the inverse tone they are `fill-inverse-hover` and `fill-inverse-press`. `shadow-button` sits under primary and secondary buttons at rest and on hover, and is removed while pressed or disabled. Disabled primary buttons turn `fill-disabled`; disabled secondary and text buttons drop to `stroke-disabled` and `text-disabled`.

## You provide

The label as children, in Thai or English, verb first. Optional `iconLeft` / `iconRight` as any icon node; a bare Heroicons component is sized to the button automatically (24px large, 20px medium, 16px small). For `iconOnly`, an `aria-label`. `onClick`, `disabled` and other button attributes pass through; use `htmlType` for the HTML `type`.

## Do / don't

- Do keep one primary button per view.
- Do pair a destructive primary with a neutral or text cancel.
- Don't use the inverse tone on a light ground: it is white on white.
- Don't use `tiny` in new work. In Figma it still uses the old palette (`primary-purple-500`, 16px radius) and exists in brand tone only.

## Differences from Figma

- Icons: the Figma component swaps in icons from the in-house "Icon Style" set, which is not shipped. Use Heroicons (`@heroicons/react`) or your own SVG node.
- Focus ring: Figma has no focus state for Button. A 2px `stroke-focus` outline was added for keyboard users.
