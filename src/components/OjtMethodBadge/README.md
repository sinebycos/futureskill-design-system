# OjtMethodBadge

A coloured pill that names one of the eight on-the-job training (OJT) methods, each with its own colour and icon. Use it wherever a training plan, task or course is tagged with its OJT method; for general statuses use Badge.

## Usage

```tsx
import { OjtMethodBadge } from '@futureskill/design-system';

<OjtMethodBadge method="job-rotation" />
<OjtMethodBadge method="mentoring">การเป็นพี่เลี้ยง</OjtMethodBadge>
```

The root `span` receives the forwarded `ref`. The icon is fixed per method; there is no icon prop.

## Methods

| `method` | Default label | Ground | Label and icon | Icon |
| --- | --- | --- | --- | --- |
| `apprenticeship` | Apprenticeship | `fill-apprenticeship` | `text-apprenticeship` / `icon-apprenticeship` | `trophy` |
| `orientation` | Orientation | `fill-orientation` | `text-orientation` / `icon-orientation` | `presentation-chart-line` |
| `shadowing` | Shadowing | `yellow-50` | `yellow-500` | `eye` |
| `mentoring` | Mentoring | `deep-purple-50` | `deep-purple-500` | `academic-cap` |
| `coaching` | Coaching | `pink-50` | `pink-500` | `book-open` |
| `job-rotation` | Job Rotation | `primary-purple-50` | `primary-purple-500` | `arrows-right-left` |
| `cross-training` | Cross-Training | `fill-cross-training` | `text-cross-training` / `icon-cross-training` | `users` |
| `simulated-training` | Simulated Training | `fill-simulated-training` | `text-simulated-training` / `icon-simulated-training` | `forward` |

## Size

One size: 27px high (4px top and bottom, 8px left and right), 4px between icon and label, fully rounded (`radius-full`), no border. Icon 16px. Label Noto Sans Thai SemiBold 14/19 ("Subtitle 6"). The width follows the label: 100px for "Coaching" up to 165px for "Simulated Training".

## States

None. The badge has no hover, press, focus or disabled variant in Figma.

## You provide

`method`. The label is filled in for you with the method's English name, as in Figma; pass children only to replace it (for example a translated name). Other attributes pass through to the root `span`.

## Do / don't

- Do keep one method per badge and use the method's own colour; do not recolour it.
- Do place it on `background-base` or `background-raised`. The colours are the same in light and dark theme, so on a dark ground the pill stays pale.
- Don't use it for anything other than OJT methods; the colours carry no status meaning.
- Don't attach `onClick`: there is no hover or focus style.

## Differences from Figma

- Icons: the Figma badge uses the in-house "Icon Style" set. Substitutions (all `@heroicons/react/24/outline`): Education/medal → `TrophyIcon`, Education/presentation board04 → `PresentationChartLineIcon`, Design tools/eye → `EyeIcon`, Education/mortarboard → `AcademicCapIcon`, Users/reader → `BookOpenIcon`, Arrows/Connection02 → `ArrowsRightLeftIcon`, Users/users → `UsersIcon`, Multimedia/fast forward → `ForwardIcon`. The medal and reader glyphs have no close Heroicons match.
- Half of the methods are not on OJT tokens in Figma: Shadowing uses the `yellow` primitives, and Mentoring, Coaching and Job Rotation use the legacy palette (`deep-purple`, `pink`, `primary-purple`). They are reproduced as bound. None of the eight changes with the theme.
- Contrast: `text-orientation` on `fill-orientation` and `text-cross-training` on `fill-cross-training` are below 4.5:1 (noted on the tokens); the yellow Shadowing label on `yellow-50` is also low. Source values kept.
- The Figma variant property is named "Property 1"; it is exposed as `method`.
- Four loose instances beside the set carry local colour overrides (Apprenticeship icon `#3b6d11`, Orientation icon and label `#00b35a`). They are not part of the component and were not reproduced.
