# Tabs

A horizontal row of tabs that switches between views of the same page; one tab is selected at a time. Use it for sibling sections at the same level (not for steps in a sequence, and not for site navigation).

`Tabs` draws the tab row only. You render the panel for the selected tab yourself.

## Usage

```tsx
import { useState } from 'react';
import { BookOpenIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { Tabs } from '@futureskill/design-system';

function CoursePage() {
  const [tab, setTab] = useState('lessons');
  return (
    <>
      <Tabs
        id="course"
        aria-label="Course sections"
        value={tab}
        onChange={setTab}
        items={[
          { id: 'lessons', label: 'บทเรียน', icon: <BookOpenIcon />, badge: 8, controls: 'course-panel' },
          { id: 'certificate', label: 'ใบรับรอง', icon: <AcademicCapIcon />, controls: 'course-panel' },
        ]}
      />
      <div id="course-panel" role="tabpanel" aria-labelledby={`course-${tab}`}>…</div>
    </>
  );
}
```

## When to use which

| `variant` | Use for |
| --- | --- |
| `text` | Labels only. The row stays on one line. Default when no item has an icon. |
| `icons` | A 20px icon before each label. The row wraps to a new line when it runs out of width, as the Figma container does. Default when any item has an icon. |

Give every tab an icon or none: Figma has no mixed row. With `variant="text"` icons in `items` are not drawn.

## Sizes

One size.

| Part | Value |
| --- | --- |
| Tab | 48px high, width hugs content, padding 0 / 16, gap 8 between icon, label and badge, no radius |
| Row | fills its container, tabs sit side by side with no gap, 2px `stroke-weak` line along the bottom |
| Label | `th-p4` Noto Sans Thai Regular 16/24, `text-weak` |
| Selected label | Noto Sans Thai SemiBold 16/22, `text-brand` (the tab gets about 2px wider) |
| Icon | 20px, `icon-neutral`; `icon-brand` when selected |
| Badge | 24px high, padding 0 / 8, `radius-16`, 14/20 Regular |

## States

| State | What changes |
| --- | --- |
| Selected | SemiBold `text-brand` label, `icon-brand` icon, 2px `stroke-selected` underline on top of the row line |
| Hover | `fill-hover` behind the tab |
| Press | `fill-click` behind the tab |
| Focus | 2px `stroke-focus` ring, 2px away from the tab, square corners |
| Disabled | `text-disabled` label, `icon-disabled` icon, no hover fill |
| Selected + disabled | `text-disabled` label, underline becomes 4px `stroke-disabled`; the icon stays `icon-brand` (see below) |

Pin a state for documentation with `state` on an item (`'hover' | 'press' | 'focus' | 'disabled'`).

## You provide

- `items`: `{ id, label, icon?, badge?, disabled?, controls? }[]`. Figma shows up to eight tabs. `icon` is any icon node, e.g. `<BookOpenIcon />` from `@heroicons/react/24/outline`; a bare `<svg>` is sized to 20px and takes the tab's icon colour. `badge` is a short count such as `8`.
- Selection: nothing (the first enabled tab starts selected), or `defaultValue`, or `value` + `onChange(id)` to control it.
- An `aria-label` for the row (`ref`, `className` and other attributes go to the row element). If you set `id` on `Tabs`, each tab gets the id `<id>-<item id>`; put `role="tabpanel"` and `aria-labelledby` on your panel and pass the panel id as `controls`.

The row is a `role="tablist"` of `role="tab"` buttons. Arrow Left / Right, Home and End move to and select the neighbouring enabled tab; only the selected tab is in the Tab order.

`TabsItem` is the single tab (`label`, `icon`, `badge`, `selected`, `state`, button attributes; its `ref` is the `<button>`). Use it only when you need to lay tabs out yourself.

## Do / don't

- Do keep labels to one or two words; the tab never wraps its label.
- Do give the row an `aria-label` and pair each tab with a panel.
- Don't put more tabs in a `text` row than fit its width. Figma defines no overflow or scrolling behaviour, so nothing was added.
- Don't use a badge for status text; it is a count.
- Don't rely on the badge in dark theme until its colours are tokenised (see below).

## Differences from Figma

- Icons: the Figma tab uses "Icon Style / Arrows / Arrow twoway" as a placeholder. Previews use the Heroicons outline `ArrowsRightLeftIcon` at 20px. Pass your own icon per tab.
- Badge: the tab embeds "Badge count / Emphasis=Weak" from an imported UI-kit library. Its colours are bound to that library's variables ("Fill/Weak" `#0015800a`, "Stroke/Weak" `#0011661a`, "Text/Weak" `#000933a6`), not to this file's tokens. The component uses this system's same-named tokens instead (`fill-weak`, `stroke-weak`, `text-weak`), so the badge follows the theme. They are held in `--fs-tabs-badge-bg`, `--fs-tabs-badge-bd` and `--fs-tabs-badge-fg` on the tab. Only the Weak badge is used here; Strong and Moderate exist in the library set and were not read.
- Badge font: the layer is Inter Regular 14/20 ("Tiny/Regular"). Inter is not shipped; `--font-thai` is used with the same size and line height, which makes a one-digit badge 24px wide instead of 25px.
- "Unselected / Press" label is Inter Regular 16/24 ("Small/Regular") in Figma while every other state is Noto Sans Thai. Treated as a leftover; all states use `--font-thai`.
- "Selected / Disabled" has a 4px underline (2px in every other selected state) and keeps `icon-brand` on its icon while the label is `text-disabled`. Both are reproduced as read; they look like slips in the file.
- The eight boolean props "1"–"8" on the Figma component show or hide each tab. Here you pass the tabs you want in `items`.
- The focus ring uses a CSS outline (same 2px width, 2px gap, `stroke-focus`) instead of the absolutely positioned "Focus ring" rectangle.
- Keyboard behaviour (arrow keys, Home, End) and the ARIA roles are not in Figma; they were added so the control works.
- Neither component set has a description in Figma, and there is no documentation frame on the page.
