# SurveySelectionCard

A radio card for picking a survey: a radio, a file-search tile, the survey name and a line of facts. Use a list of them where the user chooses one survey; for tests use `TestSelectionCard`.

## Usage

```tsx
import { useState } from 'react';
import { SurveySelectionCard } from '@futureskill/design-system';

function PickSurvey() {
  const [picked, setPicked] = useState<string | undefined>();
  return (
    <div role="radiogroup" aria-label="แบบสอบถาม">
      <SurveySelectionCard
        value="career"
        selected={picked === 'career'}
        onSelect={setPicked}
        title="Career Development Survey"
        meta={['20 คำถาม', 'ทำแล้ว 81 ครั้ง']}
        isNew
      />
    </div>
  );
}
```

## States

| Figma | Prop | Look |
| --- | --- | --- |
| False | default | No fill, 1px inside border `stroke-weak`. Radio: `fill-inverse-weak` with a 1px `stroke-strong` ring. Tile `fill-weak`, icon `icon-neutral`. |
| True | `selected` | Card `fill-brand-weak` with a 1px `stroke-selected` border. Radio: 1px `fill-selected` ring and an 8px `fill-selected` dot. Tile `fill-brand-weak`, icon `icon-brand`. |
| Disabled | `disabled` | The False look at 50% opacity; not clickable. |

`isNew` (Figma "New") adds the "ใหม่" badge: a 22px pill in `fill-warning-strong` with a 14px star, 13px above and 8px past the top-right corner. Leave room for the overhang.

## Size

622px wide in Figma (shrinks with `max-width: 100%`), 92px tall. Padding 24, gap 12 between radio, tile and text, `radius-8`. Radio 16px, top-aligned. Tile 36px (20px icon, 8 padding, `radius-4`). Title 14/22 Regular `text-strong`; facts 12/18 Regular `text-weak`, 8 apart with "•" between, 4 below the title.

## You provide

`title` (or children) and `meta`, an array of short facts, e.g. `['20 คำถาม', 'ทำแล้ว 81 ครั้ง']`. For a pick-one list, control it: `selected`, `value` and `onSelect(value, event)`, and wrap the cards in an element with `role="radiogroup"`. Without `selected` the card keeps its own state and a click selects it. `newLabel` replaces the default badge text. `icon` replaces the file-search icon: pass any icon node; a bare Heroicons component is sized to 20px automatically and takes the tile's icon colour, e.g. `<ClipboardDocumentListIcon />` from `@heroicons/react/24/outline`. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. `value` is a string. It renders a `button` with `role="radio"` and `aria-checked`; other button attributes and the `ref` go to that button.

## Do / don't

- Do keep one selected card per group.
- Don't put actions or links inside the card; the whole card is the control.

## Differences from Figma

- Icons: "File and Folder / search file" → Heroicons `DocumentMagnifyingGlassIcon`; "Shapes / star shape" → `StarIcon` (both `@heroicons/react/24/outline`).
- Unbound colour: the badge star is a raw `#ffffff` in Figma and is written as that hex.
- "Badge new" is a standalone Figma component; here it is built into the card, not exported.
- A hidden text layer "27 วันที่ผ่านมา" (12/18, `primary-purple-500`) sits in every variant with no property to show it. It was not built.
- Figma has no hover variant, so none was built. A 2px `stroke-focus` focus outline was added.
