# Zeroheight Icons 6.3.1 extraction

Source page: `Icons` (`8566343`)

## Source and construction guidance

Zeroheight defines NEXT icons as Phosphor Light-style SVGs, imported from `phosphoricons.com` when possible, then normalized in Figma using the NEXT icon grids.

Build rules:

- Use geometric, consistent shapes.
- Use outlined icons for a light, clean style in dense UIs.
- Use round edges for a Phosphor-like style at smaller scales.
- Keep icons front-facing; do not tilt, rotate, or make them dimensional.
- Simplify icons for clarity and legibility.
- Export icons as SVG.
- Naming convention: `IconName.XS`, `IconName.S`, `IconName.M`, `IconName.L`.

## Size rules

| Size | Icon content area |   Container | Stroke |
| ---- | ----------------: | ----------: | -----: |
| XS   |         `12×12px` |   `32×32px` |  `1px` |
| S    |         `16×16px` |   `32×32px` |  `1px` |
| M    |         `32×32px` |   `48×48px` |  `2px` |
| L    |         `96×96px` | `112×112px` |  `6px` |

## Library inventory from Zeroheight

| Tab | Count | Notes                                                             |
| --- | ----: | ----------------------------------------------------------------- |
| XS  |    31 | directions, actions, controls, KPIs, pagination, selectors, tools |
| S   |   479 | largest icon library, broad category coverage                     |
| M   |   186 | icons plus pictograms                                             |
| L   |    58 | large pictograms/icons                                            |

## UI Kit mapping status

No code changes needed in this batch. Current UI Kit icon sizing already matches Zeroheight in `packages/icons/src/utils.ts`:

- `XS` / `xs`: `12px` SVG in `32px` container
- `S` / `sm` / default: `16px` SVG in `32px` container
- `M` / `md`: `32px` SVG in `48px` container
- `L` / `lg`: `96px` SVG in `112px` container

Remaining work is an icon-name inventory diff between Zeroheight and `packages/icons/assets`, not a sizing-token change.
