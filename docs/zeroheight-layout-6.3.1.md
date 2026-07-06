# Zeroheight Layout 6.3.1 extraction

Source page: `Layout` (`8566345`)

Zeroheight summary: NEXT uses a responsive, fluid grid system of 4 to 12 columns and a spatial system using multiples of 8.

## Default artboard sizes

- Desktop: 12 columns, `1920×1080`
- Tablet: 8 columns, `768×1024`
- Mobile: 4 columns, `360×800`

## Breakpoints

| Screen size                                 | Breakpoints (dp) | Examples                      | Columns | Gutter | Margins |
| ------------------------------------------- | ---------------: | ----------------------------- | ------: | -----: | ------: |
| XS (Mobile)                                 |          0 - 479 | 360×800, 390×844              |       4 |     24 |      24 |
| S (Larger Mobile Screens / Tablet Portrait) |        480 - 768 | 480x800, 600×960, 768×1024    |       8 |     24 |      24 |
| M (Mobile Landscape / Large Tablets)        |       810 - 1023 | 810x1080, 820×1180, 800×1280  |      12 |     40 |      40 |
| L (Tablet Landscape, Smaller Desktops)      |      1024 - 1439 | 1024×768, 1280×720, 1366×768  |      12 |     40 |      40 |
| XL (Desktops)                               |      1440 and up | 1440×900, 1536×864, 1920×1080 |      12 |     40 |      40 |

## Density

Spacing note from Zeroheight: all heights and widths are calculated from a base unit of `8`. Common NEXT spacing units are:

- Internal spacing inside widgets/components: `8`, `16`, `32`
- External spacing between components/widgets: `40`, `64`, and above

## UI Kit mapping implemented

- `packages/styles/src/tokens/breakpoints.ts` now maps NEXT breakpoints to `0`, `480`, `810`, `1024`, `1440`.
- `packages/styles/src/tokens/space.ts` already uses base unit `8`; named spacing token changes are deferred until component-by-component layout usage is audited, because existing token names are widely consumed and Zeroheight expresses spacing as raw units rather than token names.
