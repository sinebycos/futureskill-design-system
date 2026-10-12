# Stepper

Shows where the user is in a short, linear sequence: a row of small round indicators joined by a line, each with a label under it. Use it at the top of a multi-step flow of 3 to 5 steps; it reports progress and is not clickable.

## Usage

```tsx
import { Stepper, StepperStep } from '@futureskill/design-system';

<Stepper aria-label="Enrolment" steps={['Account', 'Payment', 'Confirm']} current={1} style={{ width: 618 }} />

// Or set each step yourself:
<Stepper aria-label="Enrolment">
  <StepperStep state="done" position="start">Account</StepperStep>
  <StepperStep state="active" position="middle">Payment</StepperStep>
  <StepperStep position="end">Confirm</StepperStep>
</Stepper>
```

The ref of `Stepper` goes to the `ol`; the ref of `StepperStep` goes to its `li`.

## How it is built

`Stepper` lays out equal-width steps in a row. Each step (`StepperStep`) is a 16px indicator with a 2px line on either side, and a label centred below. The line runs from one indicator to the next, so the row reads as one track.

## Step states

| `state` | Use for | Indicator | Lines | Label |
| --- | --- | --- | --- | --- |
| `default` | A step not reached yet. | 16px `#ffffff` disc with an 8px `#e0e0e7` dot | before and after `#e0e0e7` | `#898f8f` |
| `active` | The step the user is on. One at a time. | 16px `primary-purple-500` disc with an 8px `#ffffff` dot | before `primary-purple-500`, after `#e0e0e7` | `primary-purple-500` |
| `done` | A completed step. | 16px `primary-purple-500` disc with a `#ffffff` check | before and after `primary-purple-500` | `#898f8f` |

| `position` | Use for |
| --- | --- |
| `start` | The first step: no line before the indicator. |
| `middle` | Any step in between: a line on both sides. |
| `end` | The last step: no line after the indicator. |

With `steps` and `current`, `Stepper` sets both for you: steps before `current` are `done`, the step at `current` is `active`, the rest are `default`. This is Figma's "Amount" (3, 4, 5) and "Complete steps" (None, 1, 2, 3, 4, All Done): `current={0}` is "None", `current={steps.length}` is "All Done".

## Sizes

One size. A step is 34px tall: a 16px indicator row and an 18px label line, with no gap between them. The indicator is 16px with an 8px inner dot; the line is 2px thick, centred on the indicator. The label is 12px / 18px Regular with 16px padding left and right, centred. The check is a 6×2 and a 10×2 bar with 1px corners, joined at 45°.

Steps share the width of the stepper equally. In Figma the stepper frame is 618px wide (206, 154.5 or 123.6px per step) and a single Step is 127px; here the stepper fills its container, so set a width on it or on its parent.

## States

There are no hover, press, focus or disabled states in Figma. The stepper is a status display.

## You provide

- `steps`: an array of labels, one per step. A number draws that many steps without labels.
- `current`: how many steps are complete (0-based index of the active step). Default 0.
- Or pass `StepperStep` children and set `state`, `position` and the label on each yourself.
- An `aria-label` naming the flow. The root is an `ol`, steps are `li`, and the active step gets `aria-current="step"`. Other attributes pass through to the root.

## Do / don't

- Do keep labels to a word or two; each step only has its share of the width minus 32px of padding.
- Do place it on a ground that is not pure white if the "not reached" indicators should show as discs. On `background-base` in the light theme the white disc disappears: only the 8px grey dot shows, with a 4px gap to the line on each side.
- Don't use it as navigation or tabs; nothing in it responds to clicks.
- Don't use more than 5 steps or fewer than 3; Figma has no other amounts.

## Differences from Figma

- Legacy palette: purple is bound to `primary-purple-500` ("Color Styles"), not to a semantic token, so it stays `#842cdd` in the dark theme.
- Colours with no token, written as literals: `#e0e0e7` (inactive line, paint style "content-disabled"; inner dot of the default indicator, unbound), `#898f8f` (default and done label, paint style "content-secondary"), `#ffffff` (default indicator disc, active inner dot, check; all unbound). None of these change with the theme.
- Font: the label layer is set in Salesforce Sans Regular 12/18 with no text style, a leftover from an imported kit. It is rendered in `font-thai` at the same size, line height and weight.
- Copy: the Figma labels are placeholders ("Placeholder 1" to "Placeholder 5", "Step placeholder"); the preview uses them as they are.
- The component set is spelled "Steper" in Figma.
- The check is drawn from the Figma geometry (two bars), not an icon from the icon set, so no icon was substituted.
- Labels wrap when they do not fit their step. In Figma the label is a single auto-width line.
- `steps` as a number renders steps without labels. Every Figma variant has a label.
- Figma has no state with no active step other than "All Done", and no amounts other than 3, 4 and 5. Other counts work here but were not designed.
