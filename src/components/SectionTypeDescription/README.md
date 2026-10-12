# SectionTypeDescription

A static outlined box that names a section type of a class and explains it in one line: an icon, a title and a description. Use it to describe the section type; for a clickable choice between types use `SectionTypeItem`, which has the same anatomy plus hover and active states.

## Usage

```tsx
import { SectionTypeDescription } from '@futureskill/design-system';

<SectionTypeDescription variant="survey" />
<SectionTypeDescription variant="general" description="วิดีโอและแบบทดสอบท้ายบท" />
```

The root `div` receives the forwarded `ref`.

## Variants

| `variant` | Icon | Title | Description |
| --- | --- | --- | --- |
| `general` (default) | `book-open` | General Section | ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live |
| `survey` | `clipboard-document-list` | Survey Section | ใช้สำหรับทำแบบสอบถามหรือแบบสำรวจ |

## Size

536px wide in Figma (shrinks with `max-width: 100%`), 106px tall with one line of description. Padding 24, 12 between the head row and the description, 16 between icon and title, `radius-16`, 2px inside border in `stroke-weak`, no fill. Icon 24px in `icon-neutral`. Title 16/22 SemiBold `text-strong`; description 14/22 Regular `text-weak`.

## You provide

Usually only `variant`. `title`, `description` (or children) and `icon` replace the preset copy. `icon` takes a node, not a name: pass any icon node; a bare Heroicons component is sized to 24px automatically and drawn in `icon-neutral`, e.g. `<CheckCircleIcon />` from `@heroicons/react/24/outline`. Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. Other `div` attributes pass through; set another width with `style` or `className`.

## Do / don't

- Do keep the description to one short line.
- Don't make it clickable; that is `SectionTypeItem`.

## Differences from Figma

- Icons: "Education / open book" → Heroicons `book-open` (`BookOpenIcon`); "File and Folder / clipboard02" → `clipboard-document-list` (`ClipboardDocumentListIcon`), both from `@heroicons/react/24/outline`.
- Figma has no component description for this set; the purpose above comes from the layer names and copy only.
