# Contributing

## Change a token

1. Edit `tokens/tokens.json`. It uses the Claude design-system format: every family is a list of `{ name, value, usage }`; colour values are a hex, `{ light, dark }`, or an alias such as `"{brand-light-500}"`.
2. Run `npm run tokens`. This rewrites `src/styles/tokens.css` and `src/tokens/generated.ts`; commit both (CI fails if they are out of date).
3. Keep the semantic layer in step with Figma's "Colors Semantic" collection. Components should only use semantic tokens (`text-`, `icon-`, `stroke-`, `fill-`, `background-`).

## Add a component

1. Create `src/components/<Name>/` with `<Name>.tsx`, `<Name>.css`, `index.ts`, `README.md`. Follow `Button`:
   - typed props interface extending the right DOM attributes, `forwardRef` to the root (or the native input for form controls);
   - class names prefixed `fs-<kebab-name>`, BEM-style elements and modifiers;
   - colours, spacing, radii and shadows from tokens (`var(--…)`), never a hex a token holds;
   - interactive states written twice: the real pseudo-class and `[data-state="…"]` for documentation;
   - icon props take `ReactNode`; size a bare `<svg>` in the slot with CSS.
2. Add `playground/previews/<Name>.tsx` exporting `meta = { group, order }` and a default component.
3. Run `npm run build` (regenerates `src/index.ts`) and `npm run typecheck`.
4. Write the README: first sentence is the summary, then usage, variants, sizes, states, what the caller provides, do/don't, differences from Figma.

## Releases

Bump `version` in `package.json`, add a CHANGELOG entry, tag `v<version>`. Consumers installing from GitHub can pin a tag: `npm install github:<org>/futureskill-design-system#v0.1.0`.
