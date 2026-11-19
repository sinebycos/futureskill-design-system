# FutureSkill Design System

FutureSkill is a Thai online-learning company (courses, live classes, corporate training / OJT, skill assessment). This design system covers its learning products: the learner experience (my learning, notifications, skills), and the admin/class-builder tools (section types, test & survey pickers, outside learning). Interfaces are **Thai-first**, purple-led, light + dark themed.

## Source
- GitHub: **https://github.com/sinebycos/futureskill-design-system** (branch `main`) — tokens, fonts, logos and 28 React components synced from the Figma file **"Design System (V.2)"**. Explore it further (each `src/components/<Name>/README.md` documents props, states and Figma deltas; `docs/GUIDELINES.md` holds brand rules) to design more faithfully.
- The Figma file itself was not provided; everything here comes from the repo.

## Index
- `styles.css` — entry point; `@import`s fonts, tokens, base and every component stylesheet.
- `src/styles/` — `tokens.css` (455 colour tokens, spacing, radius, shadow, layout, font families, `th-*` / `en-*` text-style classes, light/dark/system themes), `fonts.css`, `base.css`.
- `src/fonts/` — Noto Sans Thai (variable), Poppins 400/500/600, Sarabun 400/600 (all OFL, copied from the repo).
- `src/components/<Name>/` — `<Name>.jsx`, `.d.ts`, `.prompt.md`, `.css` (verbatim from repo) and a `*.card.html` preview.
- `src/icon/Icon.jsx` — name-based Heroicons 2.2 icon.
- `guidelines/` — foundation specimen cards (colours, type, spacing, elevation, states, brand).
- `assets/logos/` — `fs-logo-light.png`, `fs-logo-dark.png`, `favicon.png`.
- `ui_kits/learning-app/` — click-through learner + class-builder kit (see its README disclaimer).
- `SKILL.md` — agent skill entry; `github.md` — source sync record; `thumbnail.html`.

## Components
Current set (semantic tokens, follows theme): Button, TextLink, TextInput, Checkbox, CheckboxGroup, SegmentedControl, Tabs, TabsItem, NavigationSide, NavigationSideItem, Alert, Badge, ProgressBar, SectionTypeItem, SectionTypeDescription, OutsideLearningCard, TestSelectionCard, SurveySelectionCard.

Legacy set (old Figma palette, same in both themes — use on light grounds only): Toggle, Slider, Stepper, StepperStep, Toast, NotiItem, NotiItemHighlight, SkillProgress, SkillGraph, SkillLevel, OjtMethodBadge, Input, SearchBox, PasswordInput, Textarea. For a new text field use TextInput, not Input.

Utility: Icon.

### Intentional additions
- **Icon** loads Heroicons SVGs from the jsDelivr CDN (`heroicons@2.2.0`) instead of `@heroicons/react` (no npm here). Same name/variant/size API as the repo's `Icon`. All component-internal icons go through it.
- Components are plain function exports (no `forwardRef`); refs to inner inputs use `inputRef` where the original offered it.

---

## CONTENT FUNDAMENTALS
- **Language:** Thai for all interface copy. English stays for product, course and technical names inside Thai sentences: "ประกอบด้วยวิดีโอ, PDF, SCORM, แบบทดสอบ และ Live", "คุณได้ลงทะเบียน Chat GPT For Everyone". Some component presets use English titles ("General Section", OJT method names "Job Rotation").
- **Voice:** speak to the learner as **"คุณ"** (you). Warm, direct, encouraging — "เริ่มอัพสกิลกันเลย!". Success may take an exclamation mark: "คุณได้ลงทะเบียนสำเร็จแล้ว!", "ยินดีด้วย! 🎉".
- **Buttons:** verb + object — "ซื้อคอร์สนี้", "ดูใบรับรอง", "ดูรายละเอียดคลาส". Short, no trailing punctuation.
- **Emoji:** only at the start or end of a *notification title* — 🎉 for completion, 🔔 for deadline reminders. Nowhere else.
- **Numbers & time:** Arabic numerals. Dates `12/09/2025`, date-times `12/09/2025 08:00`, relative "27 วันที่ผ่านมา". Due line: "วันครบกำหนด : 12/09/2025". Thai Buddhist year appears in prose ("20 กรกฎาคม 2568").
- **Metadata:** one line, separated by a bullet: "20 คำถาม • คะแนนผ่าน 80% • ทำแล้ว 81 ครั้ง".
- **Status words** pair with colour, never colour alone: "ถูกปฏิเสธ" (red), waiting (yellow), approved (green). New items: "ใหม่".
- Close labels / aria are Thai ("ปิด").

## VISUAL FOUNDATIONS
- **Colour:** purple brand `#842cdd` (`brand-light-500`) is `fill-brand-strong`/`text-brand`; in dark it lightens to `#ab74e9`. Pink `#e2105f` is the secondary accent only. Neutrals are near-black/white at stepped alpha (`basic-base-*`), giving `text-strong`/`text-weak`/`stroke-weak`/`fill-weak`. Status = strong + weak pairs (fill-error-weak + stroke-error-weak + text-error + icon-error). Build **only** with semantic tokens (`text-*`, `icon-*`, `stroke-*`, `fill-*`, `background-*`); primitives and the legacy `primary-purple-*` palette are reference only. `text-warning` (2.3:1) and `text-success` (4.0:1) fail body contrast — use ≥24px or beside an icon.
- **Type:** Noto Sans Thai for all UI (covers Latin, keeps mixed lines in one face); Poppins for English-only headings/marketing; Sarabun only for `th-caption-*` and `th-button`. Body default `th-p4` 16/24, dense `th-p5` 14/22, meta `th-p6` 12/18. Headings 500–600; Bold 700 appears once (`th-subtitle-3`). **Button labels are Regular 400**, not bold.
- **Spacing:** tokens named by value (`space-2…80`). 4/8 between icon and label, 12–16 control padding, 24 card padding. 12-column grid, 24px gutter, 72px margin; containers 1536 / 1280 / 1024.
- **Radii:** 8 for buttons, inputs, cards; 12 large buttons; 16 badges & large/course cards; full for pills and dots; 2/4 for checkbox marks.
- **Borders:** 1px drawn inside (box-shadow inset); 2px only for emphasis — field in error, active section-type card, selected tab underline.
- **Elevation:** flat by default — surfaces differ by `background-*` + `stroke-weak`. Shadows mark float/press: `shadow-button` (removed on press/disabled), `shadow-raised` (cards, menus), `shadow-card-course`, `shadow-overlay` (modals, hovered selection cards), `shadow-picker-popover`, `shadow-sunken` (wells). Shadows are soft, low-alpha black, slightly negative spread.
- **Surfaces:** `background-base` page, `-raised` cards, `-overlay` menus/modals, `-sunken` wells, `-inverse` dark bands.
- **States:** hover lays `fill-hover` (5% ink) over the control via a gradient overlay; press lays `fill-click` (10%) and drops the shadow. Focus = 2px `stroke-focus` outline with 2px offset. Selected = `fill-brand-weak` + brand label (nav adds a 4px left bar). Disabled = `fill-disabled`/`text-disabled`; legacy selection cards fade to 50%. No scale/shrink on press.
- **Backgrounds & imagery:** no gradients, textures or illustrations in the system. Imagery = course covers, people photos and org logos in 66px thumbnails or card tops (Figma used sample photos; placeholders here). The logo mark itself carries a pink→purple→yellow gradient — the only gradient in the brand.
- **Motion:** minimal; components define simple transitions (toggle nob, tab underline). No bounces. Toasts show a progress bar along the bottom edge.
- **Transparency/blur:** alpha is used for neutrals and weak status fills; `fill-overlay` scrim behind the mobile drawer. No backdrop blur.
- **Cards:** white raised ground, `radius-8`–`16`, `stroke-weak` hairline or `shadow-card-course`; selection cards switch to brand-tinted fill + `stroke-selected` border.
- **Layout:** 256px desktop sidebar (`NavigationSide`), 72px mobile top bar; learner variant is a 268px rounded card in a 300px column.

## ICONOGRAPHY
- **Heroicons 2.2** is the only icon set. `24/outline` (1.5px stroke) is the default; `24/solid` for filled status marks (Toast); `20/solid` (mini) and `16/solid` (micro) inside dense controls. Icons inherit `currentColor` — set ink with an `icon-*` token.
- Auto sizing in components: 24px in large buttons and alerts, 20px in medium buttons/tabs/badges, 16px in small buttons and inputs; legacy inputs draw 14px at stroke 2.
- Here icons load by name from `https://cdn.jsdelivr.net/npm/heroicons@2.2.0/` via `<Icon name="academic-cap" />` — no icon files are copied.
- Figma also contains an in-house "Icon Style" set (1,120), react-icons (B2C site) and an Apple emoji pack — none are synced; don't use them.
- **Emoji** only in notification titles (🎉 🔔). No unicode-glyph icons except the "•" metadata separator.
- **Logos:** PNG only (`assets/logos`). Light-ground and dark-ground versions + the mark (`favicon.png`). Never redraw, recolour or crop.

## Fonts
All brand fonts were present in the repo and are bundled — no substitutions.
