# TextInput

A single-line text field with its label, hint and error message built in. Use it for any short free-text answer in a form: name, email, a code, a search term inside a form.

It renders a real `<input>` tied to a real `<label>`, so normal input attributes (`type`, `name`, `value`, `defaultValue`, `placeholder`, `onChange`, `autoComplete`, `maxLength`…) work as usual.

## Usage

```tsx
import { TextInput } from '@futureskill/design-system';
import { EyeSlashIcon } from '@heroicons/react/16/solid';

<TextInput label="อีเมล" required type="email" placeholder="name@company.com" />
<TextInput label="ชื่อเล่น" optional hint="ใช้แสดงบนใบรับรอง" />
<TextInput label="อีเมล" required error="กรอกอีเมลให้ถูกต้อง" defaultValue="name@" />
<TextInput label="รหัสผ่าน" type="password" icon={<EyeSlashIcon />} />
```

A `ref` goes to the `<input>`.

## Parts

From top to bottom, 4px apart (`space-4`):

| Part | Prop | What it looks like |
| --- | --- | --- |
| Label row | `label` | `th-p4` 16/24 Regular, `text-strong`. Marks follow the label, 4px apart, on the same baseline. |
| Required mark | `required` | "*" in 16/24, `text-weak` (it is grey in Figma, not red). Also sets the input's `required` attribute. |
| Optional mark | `optional` | "(optional)" in `th-p5` 14/22, `text-weak`. Pass a string to change the wording. |
| Hint | `hint` | One line under the label, above the field. 14/22, `text-weak`. |
| Error message | `error` | 24px icon in `icon-error` + text 14/19 SemiBold in `text-error`, 8px apart, 4px padding above and below (32px tall). It sits **between the label and the field**, not under the field. |
| Field | — | 48px tall, `radius-8`, `fill-inverse-strong` ground, 1px inside border in `stroke-weak`, 16px side padding. |
| Value | `value` / `defaultValue` | 16/24 Regular, `text-strong`. This is Figma's "Filled". |
| Placeholder | `placeholder` | 14/22 Regular, `text-weak` (smaller than the value). |
| Icon | `icon` | 16px, at the **end** of the field, 8px after the text. |

## Valid and invalid

| State | Field | Extra |
| --- | --- | --- |
| Valid (default) | `fill-inverse-strong`, 1px `stroke-weak` | — |
| Invalid (`error="…"` or `invalid`) | `fill-error-weak`, **2px** `stroke-error-strong` | The error message row appears above the field, so the block grows from 76px to 112px. |

The label, required mark, value and placeholder keep their normal colours when invalid; only the field and the message turn red.

## Sizes

One size only: the field is 48px tall. The component is drawn 364px wide in Figma and that is the default width; it shrinks to fit a narrower container. Set `fullWidth` to fill the container instead.

| Layout | Height |
| --- | --- |
| Field alone (no label) | 48px |
| Label + field | 76px |
| Label + hint + field | 98px |
| Label + error + field | 112px |

## States

| State | What changes |
| --- | --- |
| Hover | `fill-hover` laid over the field. |
| Press | `fill-click` laid over the field. |
| Focus | Border becomes `stroke-strong` (stays red when invalid), plus a 2px `stroke-focus` ring with a 2px gap around the field (outer radius 12px). |
| Disabled | Border `stroke-disabled`; label, required mark and value turn `text-disabled`. Hint, "(optional)" and placeholder stay `text-weak`. No hover, no error styling. |

`state="hover" | "press" | "focus" | "disabled"` pins a state for documentation. Real hover, press, focus and `disabled` work without it.

## You provide

- `label`: always, unless the field has an `aria-label`. `required` or `optional` for the mark; use one, not both.
- `hint` for a format or a rule the user needs before typing.
- `error`: the message to show. Passing it also switches on the invalid styling and links the message to the input (`aria-invalid`, `aria-describedby`). Use `invalid` alone only when the message is shown somewhere else.
- `icon`: pass any icon node; a bare Heroicons component is sized to 16px automatically, e.g. `<EyeSlashIcon />` from `@heroicons/react/16/solid` (the solid 16px set matches the design), or your own node (for example a button that shows or hides a password; a node that is not a bare `<svg>` is drawn as passed). Width and height attributes on the node are overridden by the slot; use `style` to draw it at another size.
- Any other prop goes to the `<input>`. `className` and `style` go to the outer wrapper. `ref` gives you the input element (`inputRef` does the same and is kept for compatibility).

## Do / don't

- Do write the error as what to fix ("กรอกอีเมลให้ถูกต้อง"), not just "ผิดพลาด".
- Do keep the hint to one line.
- Don't use the placeholder as the label: it disappears on typing and is smaller and lighter than the label.
- Don't show an error on a disabled field; the component hides it, as Figma does.
- Don't use it for multi-line text, search with a button, or prefixed and suffixed fields. Those are other components on the same Figma page.

## Differences from Figma

- Built from the "Text input (New)" set only (`6498:5082`). The older Input, Search-Box, Password, Textarea, Input-Affix and Input-Addon sets on the same page are separate components.
- Copy: the Figma layers hold generic English text ("Label", "Hint text", "Error message", "Value", "Placeholder", "(optional)"). The preview uses it as is. "(optional)" is the only built-in string.
- Error icon: Figma uses an "X octagon" icon (24px box, 2px stroke, `icon-error`). Heroicons has no octagon, so `XCircleIcon` (outline, 24px, 2px stroke) stands in.
- Field icon: the Figma slot is a 16px instance of "Icon Style / User Interface / No Preview" that is hidden by default, and no instance in the file turns it on. Its ink colour could not be read: the shared icon is plain white (`#ffffff`, unbound) and the hidden slot exposes no override. Here the icon takes the field's text colour (`text-strong`, `text-disabled` when disabled); treat that as a choice, not a Figma value. The preview uses Heroicons `EyeSlashIcon` from the 16px solid (`micro`) set for "No Preview", matched by name only.
- The disabled variants in Figma have no icon layer at all. Here a disabled field keeps its icon, in `text-disabled`.
- In Figma the hint lives inside the label block, so turning the label off hides the hint too. Here a hint without a label still renders.
- Figma lets Required and Optional be on together. Nothing stops that here either, but it has no meaning.
- `invalid` without `error` shows the red field with no message row. Figma's Valid=False always shows the message.
- Focus and hover together: Figma draws them as separate variants. Here a focused field drops the hover tint, so it looks like the Focus variant while the pointer is over it.
- `fullWidth` is not a Figma property; it stands for resizing the instance.
- The page background of the component set uses a 5px corner radius; that belongs to the Figma frame, not to the component.
