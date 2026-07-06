# UI Kit additional component coverage against Zeroheight NEXT 6.3.1

This is the inverse of `zeroheight-library-components-6.3.1-audit.md`: it starts from every UI Kit component directory/export and records where it is covered in Zeroheight, whether directly or via an umbrella/foundation page.

Coverage categories:

- `direct`: Zeroheight has a page with the same component intent.
- `umbrella`: covered by a broader Zeroheight page or component family.
- `internal`: implementation primitive; validate through consuming components rather than standalone design specs.
- `foundation`: governed by foundation pages such as Typography, Layout, Icons, Dawn, or Wicked.
- `utility`: non-visual or helper-like component.
- `no-zh`: no exact Zeroheight page found in this crawl; requires product/design scope decision.

## Exhaustive UI Kit component coverage

| Package              | Component            | Coverage   | Zeroheight source                        | Action                                                                           |
| -------------------- | -------------------- | ---------- | ---------------------------------------- | -------------------------------------------------------------------------------- |
| `packages/core/src`  | `Accordion`          | direct     | Accordion                                | audit against Zeroheight page                                                    |
| `packages/core/src`  | `ActionBar`          | direct     | Action Bar                               | audit against Zeroheight page                                                    |
| `packages/core/src`  | `ActionsGeneric`     | internal   | Action Bar / Toolbar / Bulk Actions      | shared action primitive; keep driven by consuming components                     |
| `packages/core/src`  | `AppSwitcher`        | direct     | App Launcher / Switcher                  | audit launcher and switcher variants                                             |
| `packages/core/src`  | `Avatar`             | direct     | Avatar                                   | audit variants/states                                                            |
| `packages/core/src`  | `AvatarGroup`        | umbrella   | Avatar                                   | covered as avatar composition; verify group behavior if present in page examples |
| `packages/core/src`  | `Badge`              | direct     | Badge                                    | audit variants                                                                   |
| `packages/core/src`  | `Banner`             | umbrella   | Notification                             | notification family component                                                    |
| `packages/core/src`  | `BaseCheckBox`       | internal   | Selection                                | base primitive for checkbox                                                      |
| `packages/core/src`  | `BaseDropdown`       | internal   | Input / Search / Select                  | base primitive for popup input controls                                          |
| `packages/core/src`  | `BaseInput`          | internal   | Input / Form                             | base primitive; already updated border/focus token usage                         |
| `packages/core/src`  | `BaseRadio`          | internal   | Selection                                | base primitive for radio                                                         |
| `packages/core/src`  | `BaseSwitch`         | internal   | Selection                                | base primitive for switch                                                        |
| `packages/core/src`  | `BreadCrumb`         | direct     | Breadcrumb                               | audit variants/states                                                            |
| `packages/core/src`  | `BulkActions`        | direct     | Bulk Actions                             | audit action states                                                              |
| `packages/core/src`  | `Button`             | direct     | Button                                   | high-priority state/variant diff                                                 |
| `packages/core/src`  | `ButtonBase`         | internal   | Button / Multi-Button / Icon Button      | shared primitive; do not design independently                                    |
| `packages/core/src`  | `Calendar`           | umbrella   | Date Range / Time Picker                 | date range calendar primitive                                                    |
| `packages/core/src`  | `Card`               | direct     | Card                                     | audit anatomy/variants                                                           |
| `packages/core/src`  | `Carousel`           | direct     | Carousel                                 | audit anatomy/responsive                                                         |
| `packages/core/src`  | `CheckBox`           | umbrella   | Selection                                | selection family                                                                 |
| `packages/core/src`  | `CheckBoxGroup`      | umbrella   | Selection / Form                         | group pattern                                                                    |
| `packages/core/src`  | `ColorPicker`        | direct     | Color Picker                             | audit variants                                                                   |
| `packages/core/src`  | `Container`          | foundation | Layout / Dawn Theme / Wicked Theme       | generic layout primitive; token driven                                           |
| `packages/core/src`  | `Controls`           | umbrella   | Navigation System / Carousel / Scroll To | navigation controls primitive                                                    |
| `packages/core/src`  | `DatePicker`         | umbrella   | Date Range                               | date range maps here                                                             |
| `packages/core/src`  | `Dialog`             | direct     | Dialog                                   | audit sizes/actions/accessibility                                                |
| `packages/core/src`  | `DotPagination`      | umbrella   | Pagination / Carousel                    | pagination primitive                                                             |
| `packages/core/src`  | `Drawer`             | umbrella   | Panel / Navigation System                | no exact page; verify against panel/navigation usage                             |
| `packages/core/src`  | `DropDownMenu`       | umbrella   | Input / Search / Navigation System       | menu popup primitive                                                             |
| `packages/core/src`  | `Dropdown`           | umbrella   | Input / Search / Selection               | dropdown primitive                                                               |
| `packages/core/src`  | `DropdownButton`     | umbrella   | Button / Dropdown / Action Bar           | button/dropdown composite                                                        |
| `packages/core/src`  | `EmptyState`         | direct     | Empty State                              | audit illustrations/actions                                                      |
| `packages/core/src`  | `FileUploader`       | direct     | File Uploader                            | audit dropzone/states                                                            |
| `packages/core/src`  | `FilterGroup`        | direct     | Filter Group                             | audit responsive panels                                                          |
| `packages/core/src`  | `Focus`              | foundation | Dawn Theme / Wicked Theme                | focus utility; already moved to borderFocus/focus tokens                         |
| `packages/core/src`  | `Footer`             | direct     | Footer                                   | audit layout                                                                     |
| `packages/core/src`  | `FormElement`        | umbrella   | Form / Input / Selection                 | form wrapper/messages/labels                                                     |
| `packages/core/src`  | `GlobalActions`      | umbrella   | Header / Navigation System / Action Bar  | global header actions                                                            |
| `packages/core/src`  | `Grid`               | foundation | Layout                                   | layout primitive                                                                 |
| `packages/core/src`  | `Header`             | direct     | Header / Navigation System               | audit navigation variants                                                        |
| `packages/core/src`  | `IconButton`         | umbrella   | Button / Icons                           | button plus icon sizing                                                          |
| `packages/core/src`  | `IconContainer`      | foundation | Icons                                    | sizing already matches Zeroheight                                                |
| `packages/core/src`  | `InlineEditor`       | umbrella   | Input / Rich Text Editor                 | inline edit pattern; no exact Zeroheight component page                          |
| `packages/core/src`  | `Input`              | direct     | Input                                    | audit text input/text area states                                                |
| `packages/core/src`  | `List`               | direct     | List                                     | audit variants/states                                                            |
| `packages/core/src`  | `ListContainer`      | internal   | List / Tree View / Selection             | shared list primitive                                                            |
| `packages/core/src`  | `Loading`            | direct     | Loading                                  | loading indicator page                                                           |
| `packages/core/src`  | `LoadingContainer`   | umbrella   | Loading                                  | container overlay primitive                                                      |
| `packages/core/src`  | `Login`              | direct     | Login                                    | audit layout/branding                                                            |
| `packages/core/src`  | `MultiButton`        | direct     | Multi-Button                             | audit variants/orientation                                                       |
| `packages/core/src`  | `NumberInput`        | umbrella   | Input / Form                             | numeric input pattern                                                            |
| `packages/core/src`  | `OverflowTooltip`    | internal   | Tooltip                                  | overflow-specific tooltip helper                                                 |
| `packages/core/src`  | `Pagination`         | direct     | Pagination                               | audit states                                                                     |
| `packages/core/src`  | `Panel`              | direct     | Panel                                    | audit anatomy                                                                    |
| `packages/core/src`  | `ProgressBar`        | umbrella   | Loading                                  | progress bar tab                                                                 |
| `packages/core/src`  | `QueryBuilder`       | direct     | Query Builder                            | core export plus lab source needs sync                                           |
| `packages/core/src`  | `Radio`              | umbrella   | Selection                                | selection family                                                                 |
| `packages/core/src`  | `RadioGroup`         | umbrella   | Selection / Form                         | group pattern                                                                    |
| `packages/core/src`  | `ScrollToHorizontal` | direct     | Scroll To                                | horizontal variant                                                               |
| `packages/core/src`  | `ScrollToVertical`   | direct     | Scroll To                                | vertical variant                                                                 |
| `packages/core/src`  | `SearchInput`        | direct     | Search                                   | audit states                                                                     |
| `packages/core/src`  | `Section`            | direct     | Section                                  | audit spacing/header actions                                                     |
| `packages/core/src`  | `Select`             | umbrella   | Input / Form / Selection                 | select pattern                                                                   |
| `packages/core/src`  | `SelectionList`      | umbrella   | Selection / List                         | selection list pattern                                                           |
| `packages/core/src`  | `SimpleGrid`         | foundation | Layout                                   | layout primitive                                                                 |
| `packages/core/src`  | `Skeleton`           | umbrella   | Loading                                  | skeleton loader tab                                                              |
| `packages/core/src`  | `Slider`             | direct     | Slider                                   | audit states                                                                     |
| `packages/core/src`  | `Snackbar`           | umbrella   | Notification                             | notification family                                                              |
| `packages/core/src`  | `SnackbarProvider`   | internal   | Notification                             | runtime provider, no visual spec                                                 |
| `packages/core/src`  | `Stack`              | foundation | Layout                                   | layout primitive                                                                 |
| `packages/core/src`  | `StatusIcon`         | umbrella   | Icons / Notification / Selection         | semantic icon usage                                                              |
| `packages/core/src`  | `Switch`             | umbrella   | Selection                                | selection family                                                                 |
| `packages/core/src`  | `Table`              | direct     | Table                                    | audit dense states/sorting/filtering                                             |
| `packages/core/src`  | `Tabs`               | direct     | Tab                                      | audit variants/states                                                            |
| `packages/core/src`  | `Tag`                | direct     | Tag                                      | audit semantic/categorical variants                                              |
| `packages/core/src`  | `TagsInput`          | umbrella   | Tag / Input                              | tag input composite                                                              |
| `packages/core/src`  | `TextArea`           | umbrella   | Input                                    | text area tab                                                                    |
| `packages/core/src`  | `TimeAgo`            | utility    | Typography                               | text/date utility, no visual component page                                      |
| `packages/core/src`  | `TimePicker`         | direct     | Time Picker                              | audit units/states                                                               |
| `packages/core/src`  | `ToggleButton`       | umbrella   | Button / Selection                       | toggle button composite                                                          |
| `packages/core/src`  | `Tooltip`            | direct     | Tooltip                                  | audit placement/accessibility                                                    |
| `packages/core/src`  | `TreeView`           | direct     | Tree View                                | audit item states                                                                |
| `packages/core/src`  | `Typography`         | foundation | Typography                               | foundation already updated                                                       |
| `packages/core/src`  | `VerticalNavigation` | umbrella   | Navigation System / Action Bar           | navigation primitive                                                             |
| `packages/lab/src`   | `Blade`              | no-zh      | —                                        | no Zeroheight page found; decide scope                                           |
| `packages/lab/src`   | `Blades`             | no-zh      | —                                        | no Zeroheight page found; decide scope                                           |
| `packages/lab/src`   | `Dashboard`          | no-zh      | —                                        | no Zeroheight page found; likely app/layout pattern                              |
| `packages/lab/src`   | `Flow`               | no-zh      | —                                        | no Zeroheight page found; lab component                                          |
| `packages/lab/src`   | `StepNavigation`     | umbrella   | Wizard / Stepper                         | stepper page maps to step navigation/wizard                                      |
| `packages/lab/src`   | `Wizard`             | direct     | Wizard                                   | audit horizontal/vertical variants                                               |
| `packages/viz/src`   | `BarChart`           | direct     | Bar Chart                                | audit horizontal/vertical states                                                 |
| `packages/viz/src`   | `BaseChart`          | internal   | Visualization pages                      | shared viz primitive                                                             |
| `packages/viz/src`   | `Boxplot`            | no-zh      | Micro Visualizations                     | no exact page; verify under micro visualizations or out of scope                 |
| `packages/viz/src`   | `ConfusionMatrix`    | direct     | Confusion Matrix                         | audit states                                                                     |
| `packages/viz/src`   | `DonutChart`         | direct     | Donut                                    | audit chart states                                                               |
| `packages/viz/src`   | `Heatmap`            | no-zh      | Micro Visualizations                     | no exact page; verify under micro visualizations or out of scope                 |
| `packages/viz/src`   | `LineChart`          | direct     | Line / Area                              | audit line and area variants                                                     |
| `packages/viz/src`   | `ScatterPlot`        | no-zh      | Micro Visualizations                     | no exact page; verify under micro visualizations or out of scope                 |
| `packages/viz/src`   | `Treemap`            | no-zh      | Micro Visualizations                     | no exact page; verify under micro visualizations or out of scope                 |
| `packages/icons/src` | `IconBase`           | foundation | Icons                                    | base icon rendering                                                              |
| `packages/icons/src` | `IconContainer`      | foundation | Icons                                    | sizing already matches Zeroheight                                                |
| `packages/icons/src` | `IconSprite`         | foundation | Icons                                    | sprite runtime                                                                   |
| `packages/icons/src` | `icons`              | foundation | Icons                                    | generated icon exports                                                           |
| `packages/icons/src` | `pictograms`         | foundation | Icons                                    | generated pictogram exports                                                      |

## Summary

- direct: 41
- foundation: 12
- internal: 11
- no-zh: 8
- umbrella: 32
- utility: 1

## No exact Zeroheight page found — decisions needed

- `packages/lab/src/Blade` — no Zeroheight page found; decide scope
- `packages/lab/src/Blades` — no Zeroheight page found; decide scope
- `packages/lab/src/Dashboard` — no Zeroheight page found; likely app/layout pattern
- `packages/lab/src/Flow` — no Zeroheight page found; lab component
- `packages/viz/src/Boxplot` — no exact page; verify under micro visualizations or out of scope
- `packages/viz/src/Heatmap` — no exact page; verify under micro visualizations or out of scope
- `packages/viz/src/ScatterPlot` — no exact page; verify under micro visualizations or out of scope
- `packages/viz/src/Treemap` — no exact page; verify under micro visualizations or out of scope

## Implementation rule

When changing code, prefer source order:

1. Zeroheight component/foundation page
2. Current UI Kit component architecture
3. `genai-portal` only as an application reference, never as base-design source of truth without Zeroheight confirmation
