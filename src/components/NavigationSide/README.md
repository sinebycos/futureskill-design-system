# NavigationSide

The app's side navigation: a vertical list of destinations with an optional caption, a top area and a pinned bottom area. Use `NavigationSide` for the shell and `NavigationSideItem` for every row inside it; on phones the same content moves into the `mobile-open` drawer behind the `mobile-closed` top bar.

`NavigationSide` only builds the shell and the rows. The alert, button, search field, badge and avatar that Figma nests in the sidebar are other components of this system: pass them in through `header`, `footer`, `children`, or inside a `NavigationSideItem variant="slot"`. They are not re-implemented here.

## Usage

```tsx
import { NavigationSide, NavigationSideItem } from '@futureskill/design-system';
import { HomeIcon, BookOpenIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';

<div style={{ height: '100vh' }}>
  <NavigationSide
    title="การเรียนของฉัน"
    footer={<>
      <NavigationSideItem icon={<Cog6ToothIcon />} href="/settings">Settings</NavigationSideItem>
      <NavigationSideItem variant="expand" aria-label="Collapse" onClick={collapse} />
    </>}
  >
    <NavigationSideItem icon={<HomeIcon />} href="/" selected>Home</NavigationSideItem>
    <NavigationSideItem icon={<BookOpenIcon />} submenu>Courses</NavigationSideItem>
  </NavigationSide>
</div>
```

`icon`: pass any icon node; a bare Heroicons component is sized to 24px automatically in a row and to 16px in `expand`, and takes the row's icon colour, e.g. `<CheckCircleIcon />` from `@heroicons/react/24/outline` (for `expand`, the 16px solid set `@heroicons/react/16/solid` matches the default glyph). Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size. The ref goes to the root element: the `div` of `NavigationSide`; for `NavigationSideItem`, the `button` or `a` of a `default` row and the `div` of every other variant.

## When to use which

| `variant` (Figma "Type") | Use for |
| --- | --- |
| `desktop` | Default. Full-height sidebar, 256px wide, on `background-raised` with a 1px `stroke-weak` line on its right edge. |
| `learner` | Figma "Sirebar Learner" (sic). The learner area's sidebar: a 268px card (`radius-12`, 1px `stroke-weak` outline) inside a 300px column with 16px padding. Rows in its middle use the taller learner metrics. |
| `mobile-closed` | The 72px top bar on phones: menu button, logo, avatar. |
| `mobile-open` | The drawer on phones: the panel takes the full width minus 48px, over a `fill-overlay` scrim. Starts with a close button. |

Regions, top to bottom. `desktop`: `title`, `header`, `children`, `footer`. `learner` and `mobile-open`: `header`, `title`, `children`, `footer`.

| `NavigationSideItem` `variant` (Figma "Type") | What it is |
| --- | --- |
| `default` | A clickable row: 24px icon, label, optional chevron (`submenu`), optional `badge` / `badgeCount`. A `button`, or an `a` when you pass `href`. |
| `header` | Caption above a group of rows. 14/19 SemiBold, `text-weak`. |
| `divider` | 1px `stroke-weak` line with 24px padding on all sides. |
| `divider-full` | The same line edge to edge (24px above and below only). |
| `slot` | A row with 12/24 padding that holds another component. `alert`, `button` and `search` are aliases with the same padding, named after what Figma puts in them. Empty, it shows Figma's dashed placeholder. |
| `avatar` | A row without padding for the account trigger (the nested component brings its own 12/24 padding). |
| `expand` | The 40px collapse / expand button. `align="end"` puts it on the right, as in the learner sidebar. |

## Sizes

| Part | Size | Padding | Radius | Type |
| --- | --- | --- | --- | --- |
| `desktop` shell | 256 x 100% (1024 in Figma) | 12 top | — | — |
| `learner` shell | 300 wide, card 268 | 16 around the card | `radius-12` | — |
| `mobile-closed` bar | 100% x 72 (375 in Figma) | 0 / 32, gap 24 | — | menu 24px, logo 146 x 48, avatar 32px |
| `mobile-open` drawer | 100% wide, panel = width − 48 (327 of 375) | close row 12 | — | close button 48px, 24px icon |
| `title` row | 42 tall (46 in `learner`) | 12 / 24 (14 / 24 in `learner`) | — | `th-p6` 12/18 Regular, `text-weak` |
| `header` and `footer` areas | hug | 12 top and bottom; footer 12 bottom only | — | — |
| `learner` middle | — | 16 | — | — |
| Item `default` | 48 tall | 12 / 24, gap 12 | — | `th-p4` 16/24 Regular, icon 24px |
| Item `default` + `learner` | 56 tall | 16 / 24, gap 12 | `radius-4` | `th-p4` 16/24 Regular, icon 24px |
| Item `header` | 39 tall | 16 / 24 / 4 / 24 | — | `th-subtitle-6` 14/19 SemiBold |
| Item `divider` | 49 tall | 24 (`divider-full`: 24 / 0) | — | — |
| Item `slot` | hug | 12 / 24 | placeholder `radius-8`, padding 24 / 32 | placeholder `th-p5` 14/22 |
| Item `expand` | 64 tall, button 40 x 40 | row 12 / 24, button 12 | `radius-8` | icon 16px |

A 1px `stroke-weak` hairline sits under the `title` row, above the `header` area and above the `footer` area. The `mobile-open` drawer has no hairlines between its areas.

## States

Only the `default` item has states.

| State | Look |
| --- | --- |
| default | No ground. Label `text-strong`, icon `icon-neutral`. |
| hover | Ground `fill-hover`. |
| press | Ground `fill-click`. |
| selected (`selected`) | Ground `fill-brand-weak`, a 4px `stroke-selected` bar inside the left edge, label `text-brand`, icon `icon-brand`. Sets `aria-current="page"`. |
| focus | 2px `stroke-focus` ring inside the row. |

Hover, press and keyboard focus work on their own; `state="hover" | "press" | "focus"` pins one for documentation. A selected row keeps its selected look while hovered.

## You provide

- `NavigationSide`: the rows as `children`; optionally `title` (Figma copy: "การเรียนของฉัน"), `header` and `footer`. In Figma the footer holds, in order: plain rows, an alert, a primary button, a free slot, the account row and the expand button. Each of the first four sits in a `NavigationSideItem variant="slot"`.
- `mobile-closed`: `logo`, `avatar` (32px in Figma), `onMenuClick`; `hamburger={false}` hides the menu button.
- `mobile-open`: `onClose`, called by the close button and by the scrim. Position it yourself: the root fills its parent (`width: 100%; height: 100%`), so put it in a fixed full-screen container.
- `NavigationSideItem`: the label as children, `icon` as an icon node (sized to 24px automatically), `selected` for the current page, `href` or `onClick`. `badge` and `badgeCount` take the Badge and BadgeCount components. For `expand`, pass `onClick` and an `aria-label`.
- The account row: Figma nests "Dropdown menu / Trigger=Avatar side navigation" there (72px tall, 12 / 24 padding, 48px avatar, name 16/24 `text-strong`, e-mail 14/20 `text-weak`, a 24px "more" icon). Put that component in `variant="avatar"`.
- The sidebar's height comes from its parent. Give the parent a height; the middle list scrolls inside it.

## Do / don't

- Do mark exactly one row `selected`.
- Do keep labels short; a long label wraps onto a second line, it is not truncated.
- Do put secondary destinations (settings, help) in `footer` so they stay pinned to the bottom.
- Don't put raw alerts, buttons or inputs straight into the sidebar; wrap them in `variant="slot"` so they get the 12/24 row padding.
- Don't use the learner row metrics (`learner`) in the `desktop` sidebar, or the reverse. Figma keeps the two item sets apart.
- Don't nest a `NavigationSide` inside a card with its own padding: `desktop` is drawn edge to edge.

## Differences from Figma

- **Mobile variants are bound to another library's variables.** "Mobile closed" and "Mobile open" still use the source kit's remote variables, which have the same names as this system's tokens but other values: `background-raised` #ffffff, `background-base` #ffffff, `stroke-weak` #0011661a, `fill-overlay` #000d4d73, `icon-neutral` #000d4d73, and inside the rows `text-strong` #000626e5, `text-weak` #000933a6, `fill-hover` #0015800a (ground of the selected row), `stroke-selected` #4c64d9, `fill-brand-strong` #4c64d9, `fill-weaker` #00158005, `stroke-strong` #000d4d73, `fill-inverse-strong` #ffffff, `text-inverse-strong` #ffffff. Writing those hexes would give a drawer that stays white in dark mode under token-coloured rows, so the mobile shell uses the local tokens of the same name (`background-raised`, `stroke-weak`, `fill-overlay`, `icon-neutral`), exactly as the Desktop variant of the same set binds them. The rows in the drawer are the normal `NavigationSideItem`, so a selected row is `fill-brand-weak` with a brand label, not the grey ground with a blue bar drawn in the mobile frame.
- The hidden Badge and Badge count instances in every item variant are also bound to remote variables (`fill-brand-weak` #5975ff0d, `stroke-brand-weak` #4c64d933, `fill-weak` #0015800a, `stroke-weak` #0011661a). They are slots here, so none of these values is used.
- Unbound hexes in the file, none used: #ffffff as the fill of the placeholder icon glyph in every row (the visible ink is the `icon-neutral` / `icon-brand` stroke); #000000 and #00000080 in two loose "collapse" / "expand" instances on the page that belong to no component set; #9747ff is Figma's own outline around the component sets.
- Fonts: Inter and Roboto Mono appear only in nested or leftover layers: the search placeholder "Search" (Inter 16), the account name and e-mail "John Smith" / "john@practical-ui.com" (Inter 16 and 14), every row label, the alert text and the button label inside "Mobile open" (Inter), and the slot placeholder inside "Mobile open" (Roboto Mono 14). Everything built here uses `font-thai`.
- "_Navigation side item" is a broken component set in Figma (its properties cannot be read; one variant is named "Expand" instead of "Type=Expand"). Variants were read by name. Its Icon / Label / Submenu / Badge / Badge count switches were read from the hidden layers and from the Learner set, which has the same layers.
- Submenu chevron: the layer is hidden in every variant and its component's default ink is a raw #ffffff, so its real colour could not be read. It takes the row's icon ink (`icon-neutral`, `icon-brand` when selected). Figma shows no open state for a submenu and no nested rows; none were built.
- Icons: Figma uses the in-house "Icon Style" set. Substitutions: "Arrows / Arrow twoway" (the placeholder row icon, drawn as `<>`) → `code-bracket` in the preview; "Arrows / down arrow02" → `chevron-down`; "Arrows / left expand" (an arrow pointing at a bar) → `arrow-left-start-on-rectangle` (micro, 16px); "Menu" → `bars-3`; "X" → `x-mark`. In code these are the `@heroicons/react` components `CodeBracketIcon`, `ChevronDownIcon`, `ArrowLeftStartOnRectangleIcon` (from `16/solid`), `Bars3Icon` and `XMarkIcon`.
- The close button in the drawer is Figma's nested "Button icon" (Tertiary, Neutral, Medium, Square: 48px, `radius-8`, 24px icon). It is drawn by the shell with those values; its hover and press grounds (`fill-hover`, `fill-click`) follow Button's text variant and were not read on this page.
- The slot placeholder's dashed border is 4px dash / 4px gap in Figma; CSS `dashed` is close but not identical.
- Added, not in Figma: the middle list scrolls when it overflows; a 2px `stroke-focus` outline on the menu, close and expand buttons for keyboard users. The expand button has no hover or press state in Figma and none was added.
- In the Desktop variant the "Top" area (logo, search, slots) is hidden in Figma, so how its top hairline meets the hairline under the caption was not seen; both are drawn as specified.
- The mobile bar and the mobile drawer show a "Practical UI" logo and a stock photo in Figma. Both are leftovers of the source kit; pass your own logo and avatar.
- All colours used are semantic tokens, so the sidebar follows light and dark. No legacy palette tokens are used.
