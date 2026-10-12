# SectionTypeItem

A clickable option for choosing the type of a section in a class: an icon, a title and a one-line description in an outlined box. Use one item per section type and mark the chosen one `active`.

## Usage

```tsx
import { useState } from 'react';
import { SectionTypeItem } from '@futureskill/design-system';

const [type, setType] = useState<'general' | 'survey'>('general');

<SectionTypeItem variant="general" active={type === 'general'} onClick={() => setType('general')} />
<SectionTypeItem variant="survey" active={type === 'survey'} onClick={() => setType('survey')} />
```

The `button` receives the forwarded `ref`.

## Variants

| `variant` | Icon | Title | Description |
| --- | --- | --- | --- |
| `general` (default) | `book-open` | General Section | ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live |
| `survey` | `clipboard-document-list` | Survey Section | ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ |

In Figma the item wraps the "Section Type Description Container" component, so it takes the same two content presets. Only the General content is drawn in the item's three states.

## States

| State | Fill | Border (2px inside) | Shadow |
| --- | --- | --- | --- |
| Default | none | `stroke-weak` | none |
| Hover | `fill-hover` | `stroke-brand-weak` | `shadow-overlay` |
| Active (`active`) | `fill-brand-weak` | `stroke-selected` | none |

## Size

536px wide in Figma (shrinks with `max-width: 100%`), 106px tall. Padding 24, gap 12, icon-to-title gap 16, `radius-16`. Icon 24px in `icon-neutral` in every state. Title 16/22 SemiBold `text-strong`; description 14/22 Regular `text-weak`.

## You provide

`variant`, `active` and `onClick`. The item is controlled: keep the chosen type in your own state and pass `active` to the matching item. `title`, `description` (or children) and `icon` replace the preset copy. `icon` takes a node, not a name: pass any icon node; a bare Heroicons component is sized to 24px automatically and drawn in `icon-neutral`, e.g. `<CheckCircleIcon />` from `@heroicons/react/24/outline`. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. It renders a `button` with `aria-pressed`; other button attributes pass through. `state="hover"` or `"active"` pins a look for documentation.

## Do / don't

- Do show one active item at a time in a group.
- Don't use it for read-only explanation; use `SectionTypeDescription`.

## Differences from Figma

- Icons: "Education / open book" → Heroicons `book-open` (`BookOpenIcon`); "File and Folder / clipboard02" → `clipboard-document-list` (`ClipboardDocumentListIcon`), both from `@heroicons/react/24/outline`.
- Focus ring: Figma has no focus state. A 2px `stroke-focus` outline was added for keyboard users.
- There is no disabled or pressed variant in Figma, so none was built.
