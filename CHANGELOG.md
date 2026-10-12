# Changelog

## 0.1.0 — 2026-10-12

First release, ported from the FutureSkill design system in Claude (synced from Figma "Design System (V.2)" on 2026-10-03).

- Tokens: 455 colours (91 semantic with light and dark), 39 text styles, 11 spacing, 7 radius, 10 shadow, 6 layout. Generated CSS variables, typed TypeScript exports, JSON source.
- Fonts: Noto Sans Thai (variable), Poppins 400/500/600, Sarabun 400/600.
- 28 components in TypeScript React, rendering identically to the published design system in light and dark.
- `Icon` (name-based Heroicons) and `tokens` as separate entry points.
- Themes via `data-theme="light" | "dark" | "system"`.
- API change from the Claude design system: icon props take a React node instead of an icon name.
