# OutsideLearningCard

A selectable row with a title and a helper line, named "Outside learning" in Figma. Use it in a list where the user picks one entry; the picked row gets a brand tint and a check on the right.

## Usage

```tsx
import { useState } from 'react';
import { OutsideLearningCard } from '@futureskill/design-system';

function PickCourse() {
  const [picked, setPicked] = useState<string | undefined>('comm');
  return (
    <OutsideLearningCard
      value="comm"
      selected={picked === 'comm'}
      onSelect={setPicked}
      title="การพัฒนาทักษะการสื่อสาร"
      description="หากเป็นหลักสูตรใหม่หรือมีเนื้อหาต่างจากเดิม ให้สร้างคลาสใหม่"
    />
  );
}
```

## States

| Figma | Prop | Look |
| --- | --- | --- |
| False | default | No fill, 1px inside border in `stroke-weak`. |
| True | `selected` | `fill-brand-weak`, 1px border in `stroke-selected`, `shadow-overlay`, and a 16px check in `icon-brand` at the top right. |

## Size

622px wide in Figma (shrinks with `max-width: 100%`), 76px tall. Padding 16, 4 between the two lines, 8 between text and check, `radius-8`. Title 14/22 Regular; description 12/18 Regular `text-weak`.

## You provide

`title` (or children) and `description`. Real copy in Figma: "การพัฒนาทักษะการสื่อสาร" and "หากเป็นหลักสูตรใหม่หรือมีเนื้อหาต่างจากเดิม ให้สร้างคลาสใหม่". For a pick-one list, control it: `selected`, `value` and `onSelect(value, event)`. Without `selected` the card keeps its own state and a click selects it (`defaultSelected` sets the start). `value` is a string. It renders a `button` with `aria-pressed`; other button attributes and the `ref` go to that button.

## Do / don't

- Do keep one selected row per list.
- Don't rely on it on a dark ground: the title colour is a fixed near-black (see below).

## Differences from Figma

- Title colour: in Figma the title uses the legacy paint style "Character/Title .85" (`#000000d9`), which is not a token and would be unreadable in dark theme. The component uses `text-strong`, the same role and nearly the same value in light (`#191919e5`). Everything else is bound to semantic tokens in the file.
- Icon: "User Interface / Approve" → Heroicons `CheckCircleIcon` (`@heroicons/react/24/outline`, 16px).
- Figma has no hover or disabled variant, so none was built. `disabled` still passes through to the button but has no special look.
- Focus ring: a 2px `stroke-focus` outline was added for keyboard users.
