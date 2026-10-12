# FutureSkill Design System

Tokens, fonts and typed React components for FutureSkill products, synced from the Figma file **Design System (V.2)**. Thai-first, light and dark themes, built for Next.js.

- **455 colour tokens** in three layers (primitives → theme → semantic), 91 semantic tokens with light and dark values
- **39 text styles** (Thai `th-*`, English `en-*`) with the brand fonts bundled: Noto Sans Thai, Poppins, Sarabun
- **28 components** (33 React exports, plus a name-based `Icon`), each matching the published design system pixel for pixel in both themes
- **Spacing, radius, shadow and layout tokens** as CSS variables, TypeScript constants and JSON
- **Logos** and a component **playground**

## Install

From this GitHub repo (the package builds itself on install):

```bash
npm install github:<your-org>/futureskill-design-system
```

React 18 or newer is a peer dependency. Icons come from `@heroicons/react`, installed with the package.

## Use it in Next.js (App Router)

```tsx
// app/layout.tsx
import '@futureskill/design-system/styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx (a server component is fine: the components ship with 'use client')
import { Button, Alert, Badge } from '@futureskill/design-system';
import { AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Page() {
  return (
    <>
      <Alert tone="success">คุณได้ลงทะเบียนสำเร็จแล้ว!</Alert>
      <Badge tone="brand">ใหม่</Badge>
      <Button iconLeft={<AcademicCapIcon />}>ดูใบรับรอง</Button>
    </>
  );
}
```

`styles.css` holds the fonts, tokens, page defaults (body font, background, text colour) and every component's styles. Fonts load from files next to it; Next.js and Vite pick them up without config.

### Themes

Set `data-theme` on `<html>`: `light` (default), `dark`, or `system` to follow the OS. Semantic tokens switch; everything built on them follows.

### Tokens without the components

```css
@import '@futureskill/design-system/tokens.css'; /* fonts, CSS variables and th-/en- text style classes only */

.card { background: var(--background-raised); color: var(--text-strong); padding: var(--space-24); border-radius: var(--radius-16); box-shadow: var(--shadow-raised); }
```

```ts
import { cssVar, colorValues, spacing, textStyles, type SemanticColorToken } from '@futureskill/design-system/tokens';

cssVar('fill-brand-strong');               // 'var(--fill-brand-strong)', typed against the token list
colorValues['fill-brand-strong'].dark;     // '#ab74e9', resolved hex for canvas, email, OG images
```

The raw source is `@futureskill/design-system/tokens.json`.

### Icons

Pass any icon node to a component's icon prop. A bare Heroicons component is sized to the slot automatically:

```tsx
import { ArrowRightIcon } from '@heroicons/react/24/outline';
<Button iconRight={<ArrowRightIcon />}>ดูรายละเอียดคลาส</Button>
```

When an icon name is data (CMS, config), use `Icon` from `@futureskill/design-system/icon`: `<Icon name="academic-cap" />`. It imports every Heroicons glyph, so keep it out of bundles that don't need it.

### Logos

`@futureskill/design-system/logos/fs-logo-light.png`, `fs-logo-dark.png`, `favicon.png`.

## Components

Current components are on semantic tokens and follow the theme. Legacy components still use the old palette from Figma and look the same in light and dark; use them on light grounds and prefer the current set in new work.

| Component | Set | What it is |
| --- | --- | --- |
| [`Button`](src/components/Button/README.md) | Current | Triggers an action. |
| [`TextLink`](src/components/TextLink/README.md) | Current | An inline text action with no container: a link to another page, or a small action that sits inside or beside body text. |
| [`TextInput`](src/components/TextInput/README.md) | Current | A single-line text field with its label, hint and error message built in. |
| [`Checkbox`, `CheckboxGroup`](src/components/Checkbox/README.md) | Current | A 16px box, with or without a label, for turning one option on or off; use `CheckboxGroup` when the user picks any number of values from a short list of options. |
| [`Toggle`](src/components/Toggle/README.md) | Legacy | A switch between two states, on and off, that takes effect the moment it is flipped (Figma component "Switch"). |
| [`Slider`](src/components/Slider/README.md) | Legacy | Picks a number, or a low–high pair, from a continuous span by dragging a thumb along a track. |
| [`SegmentedControl`](src/components/SegmentedControl/README.md) | Current | A single track holding 2 to 7 tabs, of which exactly one is active. |
| [`Tabs`, `TabsItem`](src/components/Tabs/README.md) | Current | A horizontal row of tabs that switches between views of the same page; one tab is selected at a time. |
| [`NavigationSide`, `NavigationSideItem`](src/components/NavigationSide/README.md) | Current | The app's side navigation: a vertical list of destinations with an optional caption, a top area and a pinned bottom area. |
| [`Stepper`, `StepperStep`](src/components/Stepper/README.md) | Legacy | Shows where the user is in a short, linear sequence: a row of small round indicators joined by a line, each with a label under it. |
| [`Alert`](src/components/Alert/README.md) | Current | A full-width banner that carries one short message, with a leading icon, an optional action button and a close icon. |
| [`Toast`](src/components/Toast/README.md) | Legacy | A small, fixed-width message (313px) that reports the result of an action: a status icon, one line of text, a close icon and an optional progress bar along the bottom edge. |
| [`Badge`](src/components/Badge/README.md) | Current | A small pill that labels the status of the thing next to it: an error, a warning, a success, a piece of information, or a neutral or brand tag. |
| [`OjtMethodBadge`](src/components/OjtMethodBadge/README.md) | Legacy | A coloured pill that names one of the eight on-the-job training (OJT) methods, each with its own colour and icon. |
| [`NotiItem`, `NotiItemHighlight`](src/components/NotiItem/README.md) | Legacy | One row of the notification list: a 66px thumbnail, a bold title, a short message, the relative time, and optionally a red dot, a quoted excerpt, a due-date line or a small button. |
| [`ProgressBar`](src/components/ProgressBar/README.md) | Current | A read-only bar that shows how far along something is, with a round thumb at the current point and a small bubble above it that states the value ("50/100"). |
| [`SkillProgress`](src/components/SkillProgress/README.md) | Legacy | A plain 10px bar that shows a percentage as a purple fill on a pale track. |
| [`SkillGraph`](src/components/SkillGraph/README.md) | Legacy | A radar chart that plots one score per skill on 3 to 8 axes. |
| [`SkillLevel`](src/components/SkillLevel/README.md) | Legacy | Shows which of six skill levels a learner is at: Not start, Novice, Emerging, Intermediate, Above Avg, Excellent. |
| [`SectionTypeItem`](src/components/SectionTypeItem/README.md) | Current | A clickable option for choosing the type of a section in a class: an icon, a title and a one-line description in an outlined box. |
| [`SectionTypeDescription`](src/components/SectionTypeDescription/README.md) | Current | A static outlined box that names a section type of a class and explains it in one line: an icon, a title and a description. |
| [`OutsideLearningCard`](src/components/OutsideLearningCard/README.md) | Current | A selectable row with a title and a helper line, named "Outside learning" in Figma. |
| [`TestSelectionCard`](src/components/TestSelectionCard/README.md) | Current | A radio card for picking a test: a radio, a document tile, the test name and a line of facts. |
| [`SurveySelectionCard`](src/components/SurveySelectionCard/README.md) | Current | A radio card for picking a survey: a radio, a file-search tile, the survey name and a line of facts. |
| [`Input`](src/components/Input/README.md) | Legacy | Single-line text field of the legacy input family, with optional prefix, suffix and addon cells. |
| [`SearchBox`](src/components/SearchBox/README.md) | Legacy | Search field of the legacy input family, with an enter control at the right end, an optional clear button and a suffix slot. |
| [`PasswordInput`](src/components/PasswordInput/README.md) | Legacy | Password field of the legacy input family, with an eye button that shows or hides what was typed. |
| [`Textarea`](src/components/Textarea/README.md) | Legacy | Multi-line text field of the legacy input family, with an optional character count under it. |

Each component's README covers props, sizes, states, what you pass in, and where it differs from Figma. Brand rules (colour, type, spacing, content and voice) are in [docs/GUIDELINES.md](docs/GUIDELINES.md).

## Develop

```bash
npm install          # also builds dist/
npm run dev          # playground at http://localhost:5173, with a light/dark toggle
npm run typecheck
npm run build        # tokens → index → library (dist/) → type declarations → fonts and logos
npm run build:playground   # static gallery in dist-playground/
```

```
tokens/tokens.json          source of truth for every token (same file as the Claude design system)
scripts/build-tokens.mjs    tokens.json → src/styles/tokens.css + src/tokens/generated.ts
src/components/<Name>/      <Name>.tsx, <Name>.css, index.ts, README.md
src/icon/                   name-based Icon (separate entry point)
src/tokens/                 typed token exports (separate entry point)
src/fonts/, src/assets/     brand fonts (OFL) and logos
playground/                 Vite gallery; one file per component in playground/previews/
docs/GUIDELINES.md          brand and usage rules
```

CI (`.github/workflows/ci.yml`) typechecks, checks the generated token files are in sync, and builds. `playground.yml` publishes the gallery to GitHub Pages once Pages is set to "GitHub Actions" in the repo settings.

See [CONTRIBUTING.md](CONTRIBUTING.md) for updating tokens and adding components.
