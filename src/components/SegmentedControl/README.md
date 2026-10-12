# SegmentedControl

A single track holding 2 to 7 tabs, of which exactly one is active. Use it to switch between a few views or filters of the same content in place, when every choice fits on one line.

It behaves as a radio group: one tab stop, arrow keys move the selection, `Home` / `End` jump to the ends.

## Usage

```tsx
import { useState } from 'react';
import { ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { SegmentedControl } from '@futureskill/design-system';

function CourseView() {
  const [view, setView] = useState<string | number>('all');
  return (
    <>
      <SegmentedControl
        aria-label="Show courses"
        style={{ width: 360 }}
        options={[{ value: 'all', label: 'ทั้งหมด' }, { value: 'active', label: 'กำลังเรียน' }, { value: 'done', label: 'เรียนจบแล้ว' }]}
        value={view}
        onChange={(v) => setView(v)}
      />
      <SegmentedControl
        iconOnly
        aria-label="Layout"
        options={[{ value: 'grid', label: 'Grid', icon: <Squares2X2Icon /> }, { value: 'list', label: 'List', icon: <ListBulletIcon /> }]}
      />
    </>
  );
}
```

## When to use which

| Prop | Use for |
| --- | --- |
| default (text tabs) | The current design. Track in `background-alternate` with a 1px `stroke-weak` border; the active tab is a raised `background-overlay` surface with a 0.5px `stroke-strong` border, `shadow-raised` and a `text-brand` label; other labels are `text-weak`. Follows light and dark. |
| `iconOnly` | Figma "Icon=True": each tab shows only its icon. Still drawn with the old iOS-kit paint styles (grey translucent track, white active tab), so it looks the same in dark as in light. Use it on light grounds only. |
| `counter` on an option | A count after the label ("Tab 20"). Also not on tokens yet in Figma: the tab turns black / purple with a white active surface and does not follow the theme. |

## Sizes

| | Height | Track | Active tab | Inactive tab | Label |
| --- | --- | --- | --- | --- | --- |
| `size="default"` | 48px | `radius-8`, no padding | fills the track height, `radius-6`, padding 4 | padding 5 | active Medium 16/22, inactive Regular 16/24 |
| `size="small"` | 38px | same | same | same | Regular 14/22 for both |
| `iconOnly` | 32px | `radius-8`, padding 2 | 28px high, `radius-6`, padding 2 / 4 | padding 4 | 24px icon, no label |

`size` has no effect on an `iconOnly` control: Figma has one icon size.

Tabs always share the width equally. The control hugs its content unless you give it a width (`style={{ width: 360 }}` or `width: '100%'`); with a width set, tabs do not shift when the selection changes. Figma draws it 360px wide for 2, 3 and 4 tabs, 449px for 5, 538px for 6 and 627px for 7 (about 90px per tab from 4 tabs up).

A 0.64px divider with 8px of space above and below sits between two neighbouring inactive tabs. There is none on either side of the active tab. On text tabs it is `stroke-inverse-weak`, which is almost invisible on the track in both themes; that is how the file has it.

## States

Figma defines only active and inactive. There is no hover, pressed or disabled drawing, so none is styled here. A 2px `stroke-focus` ring appears on keyboard focus; `state="focus"` pins it on the active tab for documentation.

## You provide

- `options`: an array of `{ value, label, icon?, counter? }`, or plain strings / numbers as shorthand. Labels are short, one or two words.
- `value` + `onChange(value, option)` to control it, or `defaultValue` to let it keep its own state. Without either, the first option is active.
- For `iconOnly`: an `icon` on every option: any icon node, e.g. `<Squares2X2Icon />` from `@heroicons/react/24/outline`. A bare `<svg>` is sized to 24px for you. The `label` is not drawn; it becomes the tab's `aria-label`, so keep it.
- An `aria-label` or `aria-labelledby` on the control saying what is being chosen. `className`, `style`, `ref` and other attributes pass through to the root.

## Do / don't

- Do give it a width, usually the width of its container on mobile.
- Do keep to 2–7 options with labels of similar length; the widest label sets every tab's width.
- Don't go past 7 options; Figma defines 2 to 7 tabs. For page-level navigation use Tabs.
- Don't put `iconOnly` controls or options with a `counter` on a dark ground or in dark theme: their colours are fixed light-theme values.
- Don't mix options with and without `counter` in one control: the two kinds of tab are styled differently in Figma.

## Differences from Figma

- **Legacy parts (not on tokens).** The text tabs without a counter are fully on semantic tokens. Everything else on the Figma page is bound to old paint styles that are not in this system's tokens, or to raw hex, and is written as literals:
  - `iconOnly` track `#7676801f` (paint style `fill-colors-light-tertiary`), active tab `#ffffff` (`system-backgrounds-sb-l-primary`), divider `#3c3c432e` (`label-colors-lc-l-quarternary`), active-tab shadow `0 3px 1px #0000000a, 0 3px 8px #0000001f` (no effect style).
  - `iconOnly` icon colour `#3c3c434d` (`label-colors-lc-l-tertiary`). Figma shows only a grey 24px placeholder square in each tab, in this colour for active and inactive alike. The real icon colour is not specified; the placeholder's fill is used.
  - Counter tabs: active label and count `#842cdd` (raw, unbound), active surface `#ffffff` (`system-backgrounds-sb-l-primary`) with shadow `0 2px 1px #0000000a` and no border; inactive label and count `#000000` (`label-colors-lc-l-primary`).
- **Icons.** Figma has `_IconPlaceholder` (Size=24) in every icon tab, not real icons. Pass any icon node; the preview uses the Heroicons outline `Squares2X2Icon`, `ListBulletIcon`, `TableCellsIcon`, `CalendarDaysIcon`, `ChartBarIcon`, `MapIcon`, `PhotoIcon`.
- **Icon + label tabs do not exist.** Text tabs carry a hidden icon placeholder stacked above the label that would not fit the tab height, so `icon` is ignored unless `iconOnly` is set.
- **Counter.** The counter exists only on the `_Tab` sub-component (Medium size), not in any SegmentedControls variant, so its look inside a track is assembled from the tab alone. There is no Small counter tab: at `size="small"` the count keeps the Medium 16/22 SemiBold spec. A hidden red notification dot (14px, `red-500`, "1" in Noto Sans 10px) inside the counter tab is not built.
- **Dividers.** Figma only draws the first tab active. Hiding the dividers on both sides of the active tab when another tab is selected is inferred from that one case.
- **Missing variants.** Small exists only for 4 and 5 text tabs; `size="small"` here works for any number of tabs with the same tab spec. There is no Small icon control. The Small 5-tab variant is built from Medium tab instances with overrides; the Small tab spec was used instead.
- **Broken source.** The tab components used by the Icon=True variants (`_Tab/HIG/True/None/True/False` and `…/False/None/True/False`) no longer exist in the file; the instances are orphans. Hidden `line-top` / `line-bottom` layers inside the tabs (opacity 0) are leftovers from another tab pattern and are not built.
- **Focus ring and keyboard behaviour** are additions; Figma has no focus state for this component.
- **Copy.** The Figma labels are placeholders ("Tab", "Label 2" … "Label 7", count "20"); the preview uses them as they are.
