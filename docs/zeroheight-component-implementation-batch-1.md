# Zeroheight component alignment batch 1

This batch applies low-risk component styling changes that are directly supported by Zeroheight NEXT 6.3.1 foundation/component guidance.

## Source rules used

- Default borders use `Border` / atmosphere border tokens.
- Hover and selected borders use `BorderHover&Selected` / `Accent.hover_border` via `theme.colors.borderStrong`.
- Focus visuals use `BorderFocusState` and focus halo tokens via `theme.colors.borderFocus` and `theme.colors.focus`.
- Disabled containers use `ContainerDisabledBackground` via `theme.colors.bgDisabled`.
- Color picker recommended colors use Zeroheight categorical preferred colors.
- Tags should maintain at least 28px height per Zeroheight Tag usage guidance.

## Implemented changes

| Area                           | Files                                                                                                                  | Change                                                                                                                                |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Dropdown/Input-like controls   | `packages/core/src/BaseDropdown/BaseDropdown.styles.tsx`                                                               | Default border now uses `border`; hover/open uses `borderStrong`; disabled background uses `bgDisabled`.                              |
| Inline editor                  | `packages/core/src/InlineEditor/InlineEditor.styles.tsx`                                                               | Hover/focus/active border now uses `borderStrong` instead of primary text color.                                                      |
| File uploader drop zone        | `packages/core/src/FileUploader/DropZone/DropZone.styles.tsx`                                                          | Hover uses `borderStrong`; focus uses `borderFocus`; drag state uses `borderStrong`.                                                  |
| Tags input                     | `packages/core/src/TagsInput/TagsInput.styles.tsx`                                                                     | Default border uses `border`; hover uses `borderStrong`.                                                                              |
| Card selectable/selected state | `packages/core/src/Card/Card.styles.tsx`                                                                               | Hover/selected outline now uses `borderStrong`.                                                                                       |
| Slider focus state             | `packages/core/src/Slider/Slider.styles.tsx`                                                                           | Removed hardcoded blue focus ring; now uses `borderFocus` and `focus`.                                                                |
| Toggle switch selected state   | `packages/core/src/BaseSwitch/BaseSwitch.styles.tsx`                                                                   | Checked track now uses `borderStrong`, matching selection checked assets using hover/selected border color.                           |
| NEXT component overrides       | `packages/core/src/themes/next.ts`                                                                                     | Multi-button selected border uses `borderStrong`; radio selected fill uses `borderStrong`; Tag `xs`/`sm` heights set to 28px minimum. |
| Color picker                   | `packages/core/src/ColorPicker/ColorPicker.tsx`                                                                        | Recommended colors updated to Zeroheight categorical preferred colors.                                                                |
| Color picker tests             | `packages/core/src/ColorPicker/ColorPicker.test.tsx`                                                                   | Test expectations updated to new categorical defaults.                                                                                |
| Table resize affordance        | `packages/core/src/Table/TableHeader/TableHeader.styles.tsx`, `packages/core/src/Table/TableCell/TableCell.styles.tsx` | Resize indicator uses `borderStrong`.                                                                                                 |

## Validation

- `npm run typecheck`
- `npm run test -w packages/styles -- --run`
- `npm run test -w packages/core -- ColorPicker --run`
