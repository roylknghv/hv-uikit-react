# Zeroheight component alignment batch 2

This batch closes the clearest remaining Dawn/Wicked theme-token gaps and removes additional legacy/hardcoded colors from core/viz implementation paths.

## Implemented changes

| Area                            | Files                                                                                                | Change                                                                                                                                                                                           |
| ------------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Dark informative semantic alias | `packages/styles/src/tokens/colors.ts`                                                               | Dark `info`, `infoDeep`, and `infoStrong` now use Zeroheight `informative` instead of `neutral`.                                                                                                 |
| Slider base styles              | `packages/core/src/Slider/base.ts`                                                                   | Replaced legacy rc-slider blues/grays/whites with Dawn/Wicked tokens: `border`, `borderStrong`, `borderFocus`, `focus`, `bgPage`, `bgDisabled`, `borderDisabled`, `textSubtle`, and `textLight`. |
| Heatmap default scale           | `packages/viz/src/Heatmap/Heatmap.tsx`                                                               | Default heatmap scale now uses Zeroheight categorical Cat1 values (`cat1`, `cat1_60`, `cat1_20`) with Zeroheight fallbacks. Shadow uses `bgOverlay`.                                             |
| Color picker internals          | `packages/core/src/ColorPicker/Picker/Picker.styles.tsx`, `packages/core/src/ColorPicker/Swatch.tsx` | Replaced hardcoded picker focus/handle shadows and white borders with `bgPage`, `focus`, and `bgOverlay`.                                                                                        |
| Vertical navigation shadow      | `packages/core/src/VerticalNavigation/Navigation/Navigation.styles.tsx`                              | Replaced hardcoded shadow color with `theme.colors.shad1`.                                                                                                                                       |

## Remaining hardcoded implementation colors after this batch

The remaining hardcoded implementation colors are either intentional values or belong to areas without exact Zeroheight coverage:

- `packages/core/src/ColorPicker/ColorPicker.tsx`: Zeroheight categorical defaults and `#000000` fallback for react-color behavior.
- `packages/viz/src/Heatmap/Heatmap.tsx`: Zeroheight categorical fallback values and overlay fallback.
- `packages/core/src/Slider/base.ts`: transparent tap-highlight reset values only.
- `packages/lab/src/Flow/*`, `packages/lab/src/Dashboard/*`: lab/no-exact-Zeroheight areas; keep scoped for a separate product/design decision.

## Validation

- `npm run typecheck`
- `npm run test -w packages/styles -- --run`
- `npm run test -w packages/core -- Slider ColorPicker Button --run`
- `npm run lint`

Note: `npm run test -w packages/viz -- Heatmap --run` was attempted, but the package has no Heatmap test file matching the filter, so Vitest exits with `No test files found`.
