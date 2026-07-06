# Zeroheight Typography 6.3.1 extraction

Source page: `Typography` (`8566331`)

Font family: `Hitachi Sans`, `Noto Sans`, `Verdana`, `sans-serif`

Note from Zeroheight: all typographic classes may assume different colors to indicate links, errors, and other relevant elements, depending on the use case.

Inline link guidance: use the Body Link or Caption 1 Link typography with the `Text Link` color.

## Extracted styles

### Desktop

| Style           | Size | Line height | Weight | Letter spacing | Decoration | Notes               |
| --------------- | ---: | ----------: | -----: | -------------: | ---------- | ------------------- |
| Display         | 42px |        56px |    700 |            0px | none       |                     |
| Title 1         | 32px |        48px |    700 |            0px | none       |                     |
| Title 2 Label   | 24px |        36px |    700 |            0px | none       |                     |
| Title 2         | 24px |        36px |    400 |            0px | none       |                     |
| Title 3 Label   | 20px |        30px |    700 |            0px | none       |                     |
| Title 3         | 20px |        30px |    400 |            0px | none       |                     |
| Title 4 Label   | 16px |        24px |    700 |            0px | none       |                     |
| Title 4         | 16px |        24px |    400 |            0px | none       |                     |
| Label           | 14px |        21px |    600 |            0px | none       |                     |
| Body            | 14px |        24px |    400 |            0px | none       |                     |
| Body Link       | 14px |        21px |    400 |            0px | underline  |                     |
| Caption 1 Label | 12px |        18px |    600 |            0px | none       | Add Text Link color |
| Caption 1       | 12px |        20px |    400 |            0px | none       |                     |
| Caption 1 Link  | 12px |        18px |    400 |            0px | underline  |                     |

### Mobile

| Style           | Size | Line height | Weight | Letter spacing | Decoration | Notes                  |
| --------------- | ---: | ----------: | -----: | -------------: | ---------- | ---------------------- |
| Display         | 36px |        54px |    700 |            0px | none       |                        |
| Title 1         | 28px |        42px |    700 |            0px | none       |                        |
| Title 2 Label   | 22px |        33px |    700 |            0px | none       |                        |
| Title 2         | 22px |        33px |    400 |            0px | none       |                        |
| Title 3 Label   | 19px |        29px |    700 |            0px | none       |                        |
| Title 3         | 19px |        29px |    400 |            0px | none       |                        |
| Title 4 Label   | 17px |        26px |    700 |            0px | none       |                        |
| Title 4         | 17px |        26px |    400 |            0px | none       |                        |
| Body            | 14px |        24px |    400 |            0px | none       |                        |
| Body Link       | 14px |        21px |    400 |            0px | underline  | Color textLink #2064B4 |
| Label           | 14px |        14px |    700 |            0px | none       |                        |
| Caption 1       | 12px |        20px |    400 |            0px | none       |                        |
| Caption 1 Label | 12px |        18px |    700 |            0px | none       |                        |
| Caption 1 Link  | 12px |        18px |    400 |            0px | underline  | Color textLink #2064B4 |
| Caption 2       | 10px |        12px |    400 |            0px | none       |                        |
| Caption 2 Label | 10px |        12px |    700 |            0px | none       |                        |
| Caption 2 Link  | 10px |        12px |    400 |            0px | underline  |                        |

## UI Kit mapping implemented

- `packages/styles/src/tokens/typography.ts`: font family already aligned to Zeroheight.
- `packages/styles/src/themes/next.ts`: desktop NEXT typography now uses Zeroheight weights, line heights, and `0px` letter spacing for existing UI Kit variants.
- `packages/core/src/Typography/Typography.styles.ts`: `link` typography now uses `textLink` and `textLinkHover`, matching Zeroheight inline link guidance.

Current UI Kit exposes a smaller variant set than Zeroheight. Existing heading variants (`title2`, `title3`, `title4`) are mapped to the bold “Label” title styles to preserve heading semantics. The regular title variants and mobile-specific responsive mapping remain candidates for a later API expansion.
