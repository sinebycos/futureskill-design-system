# Guidelines

FutureSkill is the design system for FutureSkill's learning products. Interfaces are Thai-first with English product terms, purple-led, and built from the tokens and components below.

## How to build with it

1. Colour only with **semantic tokens**: `text-*`, `icon-*`, `stroke-*`, `fill-*`, `background-*`. They carry both themes. Never write a hex that a token holds.
2. Set type with the **`th-*` styles for Thai** and the **`en-*` styles for English-only** text.
3. Use a **component** when one exists. Prefer the current set over the legacy set (see Components).
4. Use Heroicons (`@heroicons/react`) for icons.

## Content

- **Language.** Thai for interface copy; English stays for product and technical names inside Thai sentences: "ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live", "คุณได้ลงทะเบียน Chat GPT For Everyone".
- **Voice.** Speak to the learner as "คุณ". Warm and direct, and a success may take an exclamation mark: "คุณได้ลงทะเบียนสำเร็จแล้ว!", "ยินดีด้วย! 🎉".
- **Buttons** are a verb plus its object: "ซื้อคอร์สนี้", "ดูใบรับรอง", "ดูรายละเอียดคลาส".
- **Emoji** appear only at the start or end of a notification title (🎉 for a completion, 🔔 for a deadline reminder). Nowhere else in the interface.
- **Numbers and time.** Arabic numerals. Dates as `12/09/2025`, date-times as `12/09/2025 08:00`. Relative time as "27 วันที่ผ่านมา". Metadata in one line separated by a bullet: "20 คำถาม • คะแนนผ่าน 80% • ทำแล้ว 81 ครั้ง".

## Colour

Three layers, and only the last one is for building:

| Layer | Tokens | Role |
| --- | --- | --- |
| Primitives | `brand-light-50…900`, `primary-neutral-*`, `secondary-neutral-*`, `analogous-*`, `red-*`, `green-*`, `yellow-*` | Raw ramps. Reference only. |
| Theme | `main-brand-*`, `secondary-brand-*`, `basic-base-*`, `neutral-solid-*` | Alpha steps of brand and ink for light and dark. Reference only. |
| Semantic | `text-*`, `icon-*`, `stroke-*`, `fill-*`, `background-*` | What you use. Each has a light and a dark value. |

- **Brand** is purple: `fill-brand-strong` for the one main action on a view, `text-brand` for links and selected labels, `fill-brand-weak` with `stroke-brand-weak` for soft brand grounds. In dark the brand lightens (`brand-light-300`) and text on it turns dark, so always pair `fill-brand-strong` with `text-inverse-strong`.
- **Secondary brand** is pink (`fill-secondary-brand-strong`, `text-secondary-brand`). An accent, never a second primary action.
- **Neutrals** are near-black and white at stepped opacity: `text-strong` for copy, `text-weak` for secondary copy, `stroke-weak` for hairlines, `fill-weak` and `fill-weaker` for quiet grounds.
- **Surfaces**: `background-base` for the page, `background-raised` for cards, `background-overlay` for menus and modals, `background-sunken` for wells, `background-inverse` for inverted bands.
- **Status** comes as a strong and a weak step: `fill-error-weak` + `stroke-error-weak` + `text-error` + `icon-error` for an error alert or badge, and the same pattern for `warning` and `success`. Always add an icon or a word; colour alone does not carry status.
- **Inverse** tokens (`text-inverse-*`, `icon-inverse-*`, `stroke-inverse-*`, `fill-inverse-*`) are for content on `background-inverse`, `fill-strong` or `fill-brand-strong`.
- **Domain colours**: assessment types (`*-open-ended`, `*-choice`) and OJT methods (`*-apprenticeship`, `*-orientation`, `*-simulated-training`, `*-cross-training`) have their own text, icon, fill and stroke tokens. Use them only for those labels.
- **Legacy palette** (`primary-purple-*`, `success-*`, `danger-*`, `gray-*`, `black-*` and the other ramps from Figma's "Color Styles") has one value for both themes. It exists because older components still use it. Do not use it in new work.

Contrast: `text-warning` (2.3:1) and `text-success` (4.0:1) are below 4.5:1 on `background-base` in light. Use them at 24px or larger, or beside an icon, and keep body-size status text in `text-strong`.

## Typography

| Family token | Face | Use |
| --- | --- | --- |
| `font-thai` | Noto Sans Thai | All interface text. It covers Latin too, so mixed Thai and English lines stay in one face. |
| `font-english` | Poppins | English-only headings and marketing lines. |
| `font-sarabun` | Sarabun | Only the `th-caption-*` and `th-button` styles. |

- Headings: `th-h1` (64/76) to `th-h6` (16/22); English `en-h1` (70/76) to `en-h6`.
- Subtitles, the emphasised labels: `th-subtitle-1` (28/36) to `th-subtitle-6` (14/19), all SemiBold except `th-subtitle-3` (Bold).
- Body: `th-p4` (16/24) is the default, `th-p5` (14/22) for dense screens and forms, `th-p6` (12/18) for captions and metadata.
- Weights in use: Regular 400 for body and button labels, Medium 500 and SemiBold 600 for headings and emphasis. Bold 700 appears once.
- Button labels are Regular, not bold: `th-p2` on large, `th-p4` on medium, `th-p5` on small.

## Layout, spacing, radius

- 12 columns with a `grid-gutter` of 24px. Containers: `container-2xl` 1536px on 1920 screens, `container-xl` 1280px on 1440, `container-lg` 1024px on landscape tablet.
- Spacing tokens are named by value (`space-4`, `space-8`, `space-12`, `space-16`, `space-24`…). Inside components: 4 and 8 between an icon and its label, 12 to 16 for padding, 24 for card padding.
- Radius: `radius-8` for buttons, inputs and cards; `radius-12` for large buttons; `radius-16` for badges and large cards; `radius-full` for pills and dots; `radius-2` and `radius-4` for small marks such as the checkbox.
- Borders are 1px, drawn inside the box. 2px is for emphasis: a field in error, a section-type card, the selected tab's underline.

## Elevation

Flat by default: surfaces are told apart by `background-*` and `stroke-weak`. Shadows mark things that float or can be pressed:

- `shadow-button` under primary and secondary buttons (removed while pressed or disabled).
- `shadow-raised` for raised cards and dropdown menus; `shadow-card-course` for course cards.
- `shadow-overlay` for modals, dialogs and hovered selection cards; `shadow-picker-popover` for pickers.
- `shadow-sunken` for inset wells.

## States

- **Hover** lays `fill-hover` over the control; **press** lays `fill-click`. On inverse grounds: `fill-inverse-hover`, `fill-inverse-press`.
- **Focus** is a 2px `stroke-focus` outline with a 2px gap.
- **Selected** uses `fill-selected` or `stroke-selected`; soft selection is `fill-brand-weak` with a brand label.
- **Disabled** uses `fill-disabled`, `stroke-disabled`, `text-disabled`, `icon-disabled`.
- Every component accepts `state="hover"` (and the like) to pin a state in documentation; real interaction needs no prop.

## Iconography

Heroicons 2.2 (`@heroicons/react`): `24/outline` (1.5px stroke) is the default; `24/solid` for filled status marks; `20/solid` and `16/solid` inside dense controls. Icons take `currentColor`: set the ink with an `icon-*` token on the icon or its parent. Component icon props size a bare Heroicons component automatically: 24px in large buttons and alerts, 20px in medium buttons, tabs and badges, 16px in small buttons and inputs. Where an icon name is data (CMS, config), use `Icon` from `@futureskill/design-system/icon`; it imports every glyph, so keep it out of product bundles otherwise.

## Logos

`@futureskill/design-system/logos/fs-logo-light.png` on light grounds, `fs-logo-dark.png` on dark grounds, `favicon.png` for the mark alone (PNG, the only format in the Figma file). Use the files as they are: do not redraw, recolour or crop the mark.

## Components

Current set, on semantic tokens, follows the theme: `Button`, `TextLink`, `TextInput`, `Checkbox`, `Tabs`, `NavigationSide`, `Alert`, `Badge`, `ProgressBar`, `SegmentedControl` (text tabs), and the class-builder cards `SectionTypeItem`, `SectionTypeDescription`, `OutsideLearningCard`, `TestSelectionCard`, `SurveySelectionCard`.

Legacy set, on the old palette, looks the same in light and dark: `Toggle`, `Slider`, `Stepper`, `Toast`, `NotiItem`, `SkillProgress`, `SkillGraph`, `SkillLevel`, `OjtMethodBadge`, and the older inputs `Input`, `SearchBox`, `PasswordInput`, `Textarea`. Use them on light grounds. For a text field in new work use `TextInput`, not `Input`.

Each component's README (`src/components/<Name>/README.md`) says what you pass in, its sizes and states, and where it differs from the Figma file.

## Not synced

Component guidelines paraphrase the Figma layers; the file has no written guidelines. Left out of this system:

- The "Components Preview" page: 101 older component sets and 137 single components (headers, footers, course cards, modals, dropdowns, date pickers, tables, certificates). Only the 17 numbered component pages were built.
- Icon libraries kept in the file: the in-house "Icon Style" set (1,120 icons), react-icons 4.6.0 (19,175, the B2C site) and the Apple emoji pack (3,961, not redistributable). Heroicons is used instead.
- 58 "Color Styles" variables that duplicate a primitive of the same name and value, and Figma's paint styles (they mirror the variables).
- Dark-theme values for shadows, domain colours and the legacy palette: the file defines none.
- "matrix structure Stroke" on the Skill Graph page, the badge dot's inner glyphs, and the `Badge count` Strong and Moderate variants.
- Vector logo files: the Logo page holds raster images only and points to a shared drive for the originals.
