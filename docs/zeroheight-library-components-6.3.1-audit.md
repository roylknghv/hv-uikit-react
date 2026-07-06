# Zeroheight Library component audit — NEXT 6.3.1

Source: `https://zeroheight.com/6c705d900/v/61759`

Covered pages: **78 component/library pages** plus foundation docs already extracted separately.

This audit treats Zeroheight as source of truth. `genai-portal` remains application reference only.

## Summary table

| Zeroheight page                      | Blocks | UI Kit mapping                                                                                                               | Status                                                                                                  |
| ------------------------------------ | -----: | ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Accordion                            |      3 | `packages/core/src/Accordion`                                                                                                | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Action Bar                           |      3 | `packages/core/src/ActionBar`                                                                                                | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| App Launcher / Switcher              |     10 | `packages/core/src/AppSwitcher`                                                                                              | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Asset Inventory                      |      8 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Avatar                               |      7 | `packages/core/src/Avatar`                                                                                                   | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Badge                                |      5 | `packages/core/src/Badge`                                                                                                    | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Bar Chart                            |     12 | `packages/viz/src/BarChart`                                                                                                  | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Breadcrumb                           |     12 | `packages/core/src/BreadCrumb`                                                                                               | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Building Blocks                      |      0 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Bulk Actions                         |      6 | `packages/core/src/BulkActions`                                                                                              | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Bullet Chart                         |      6 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Button                               |     45 | `packages/core/src/Button`                                                                                                   | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Card                                 |     18 | `packages/core/src/Card`                                                                                                     | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Carousel                             |      9 | `packages/core/src/Carousel`                                                                                                 | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Code Editor                          |      4 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Color Picker                         |      5 | `packages/core/src/ColorPicker`                                                                                              | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Comments                             |      8 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Confusion Matrix                     |      5 | `packages/viz/src/ConfusionMatrix`                                                                                           | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Cookie Consent                       |      8 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Cursor                               |      1 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Date Range                           |      7 | `packages/core/src/DatePicker`                                                                                               | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Dialog                               |     10 | `packages/core/src/Dialog`                                                                                                   | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Donut                                |      7 | `packages/viz/src/DonutChart`                                                                                                | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Downloads                            |      0 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Drag & Drop                          |      5 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Empty State                          |      5 | `packages/core/src/EmptyState`                                                                                               | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Error Page                           |      5 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Facet Search                         |      9 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| File Explorer                        |      9 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| File Uploader                        |      8 | `packages/core/src/FileUploader`                                                                                             | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Filter Group                         |      7 | `packages/core/src/FilterGroup`                                                                                              | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Footer                               |      5 | `packages/core/src/Footer`                                                                                                   | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Form                                 |     19 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Galaxy View                          |      8 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Gauge                                |      5 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Header                               |      4 | `packages/core/src/Header`                                                                                                   | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Image / Text Block                   |      4 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Input                                |      9 | `packages/core/src/Input`                                                                                                    | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Installer                            |      5 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| KPI                                  |     15 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Line / Area                          |     10 | `packages/viz/src/LineChart`                                                                                                 | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| List                                 |      8 | `packages/core/src/List`                                                                                                     | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Loading                              |     14 | `packages/core/src/Loading`<br>`packages/core/src/ProgressBar`<br>`packages/core/src/Skeleton`                               | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Login                                |      6 | `packages/core/src/Login`                                                                                                    | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Logs                                 |      3 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Map                                  |      8 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Metadata Group                       |     12 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Micro Visualizations                 |      5 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Misc                                 |      8 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Moved / Deleted Files                |      3 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Multi-Button                         |      8 | `packages/core/src/MultiButton`                                                                                              | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Navigation System                    |     20 | `packages/core/src/Header`<br>`packages/core/src/AppSwitcher`                                                                | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Notification                         |     26 | `packages/core/src/Snackbar`<br>`packages/core/src/Banner`                                                                   | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Pagination                           |     10 | `packages/core/src/Pagination`                                                                                               | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Panel                                |      4 | `packages/core/src/Panel`                                                                                                    | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Query Builder                        |      5 | `packages/lab/src/QueryBuilder`                                                                                              | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Restoring File Storage Configuration |      2 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Rich Text Editor                     |      6 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Scroll To                            |     12 | `packages/core/src/ScrollToHorizontal`<br>`packages/core/src/ScrollToVertical`                                               | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Scrollbar                            |      4 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Search                               |      8 | `packages/core/src/SearchInput`                                                                                              | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Section                              |      8 | `packages/core/src/Section`                                                                                                  | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Selection                            |     11 | `packages/core/src/CheckBox`<br>`packages/core/src/Radio`<br>`packages/core/src/Switch`<br>`packages/core/src/SelectionList` | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Shortcuts                            |      2 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Skip Links                           |      4 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Slider                               |      6 | `packages/core/src/Slider`                                                                                                   | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Solution Review                      |      0 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Stepper                              |     10 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Tab                                  |      9 | `packages/core/src/Tabs`                                                                                                     | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Table                                |     25 | `packages/core/src/Table`                                                                                                    | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Tag                                  |     25 | `packages/core/src/Tag`                                                                                                      | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Time Picker                          |      7 | `packages/core/src/TimePicker`                                                                                               | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Title                                |      3 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Toolbar                              |      9 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Tooltip                              |      8 | `packages/core/src/Tooltip`                                                                                                  | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| Tree View                            |     21 | `packages/core/src/TreeView`                                                                                                 | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |
| User Preferences                     |     10 | —                                                                                                                            | No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope. |
| Wizard                               |      9 | `packages/lab/src/Wizard`                                                                                                    | Implemented in UI Kit; needs Zeroheight state/spec diff.                                                |

## Per-component checklist

### Accordion

- Zeroheight page id: `8566368`
- Design blocks: 3
- UI Kit mapping: `packages/core/src/Accordion`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Accordion | S (`Accordion/Prototype Template | Accordion | S`)
  - Prototype Template | Accordion | XS (`Accordion/Prototype Template | Accordion | XS`)
  - Prototype Template | Accordion | M, L, and XL (`Accordion/Prototype Template | Accordion | M, L, and XL`)
  - Accordion Anatomy (`Accordion/Accordion Anatomy`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Action Bar

- Zeroheight page id: `8566384`
- Design blocks: 3
- UI Kit mapping: `packages/core/src/ActionBar`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Related, Accessibility
- Design-block inventory preview:
  - Action Bar | Vertical Nav (`Action Bar /Action Bar | Vertical Nav`)
  - Action Bar | Example | Usage (`Action Bar /Action Bar | Example | Usage`)
  - ACTION BAR (`Action Bar/ACTION BAR`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### App Launcher / Switcher

- Zeroheight page id: `8566356`
- Design blocks: 10
- UI Kit mapping: `packages/core/src/AppSwitcher`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Related, Accessibility
  - App Launcher: Anatomy, States, Examples
  - App Switcher: Anatomy, States, Examples
- Design-block inventory preview:
  - APP LAUNCHER | Anatomy Launcher (`App Launcher/Switcher /APP LAUNCHER | Anatomy Launcher`)
  - APP SWITCHER | Anatomy Switcher (`App Launcher/Switcher /APP SWITCHER | Anatomy Switcher`)
  - Prototype Template | App Launcher | S (`App Launcher/Switcher /Prototype Template | App Launcher | S `)
  - Prototype Template | App Launcher | XS (`App Launcher/Switcher /Prototype Template | App Launcher | XS`)
  - Prototype Template | App Launcher | M, L, and XL (`App Launcher/Switcher /Prototype Template | App Launcher | M, L, and XL`)
  - .App Launcher Item (`App Launcher / Switcher/.App Launcher Item/State=Focus, Tag=False`)
  - .App Launcher Item (`App Launcher / Switcher/.App Launcher Item/State=Enabled, Tag=False`)
  - .App Launcher Item (`App Launcher / Switcher/.App Launcher Item/State=Hover, Tag=False`)
  - … 13 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Asset Inventory

- Zeroheight page id: `8566381`
- Design blocks: 8
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Asset Inventory List | M, L, and XL (`Asset Inventory/Asset Inventory List | M, L, and XL`)
  - Asset Inventory List | XS (`Asset Inventory/Asset Inventory List | XS`)
  - Asset Inventory List | S (`Asset Inventory/Asset Inventory List | S`)
  - Prototype Template | Asset Inventory | S (`Asset Inventory/Prototype Template | Asset Inventory | S`)
  - Prototype Template | Asset Inventory | XS (`Asset Inventory/Prototype Template | Asset Inventory | XS`)
  - Prototype Template | Asset Inventory | M, L, and XL (`Asset Inventory/Prototype Template | Asset Inventory | M, L, and XL`)
  - Asset List - Image preview thumb (`Asset Inventory/Asset List - Image preview thumb`)
  - Example – 4 (`Asset Inventory / Usage / Example – 4`)
  - … 3 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Avatar

- Zeroheight page id: `8566317`
- Design blocks: 7
- UI Kit mapping: `packages/core/src/Avatar`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Dos and Don'ts, Related, Accessibility
- Design-block inventory preview:
  - Avatar Tooltip (`Avatar/Avatar Tooltip`)
  - Avatar Available Sizes No Lable (`Avatar/Avatar Available Sizes No Lable`)
  - Usage | Avatar Placement (`Avatar/Usage | Avatar Placement`)
  - AVATAR (`Avatar/AVATAR/Image=False, State=Disabled, Size=Medium`)
  - AVATAR (`Avatar/AVATAR/Image=False, State=Enabled, Size=Medium`)
  - AVATAR (`Avatar/AVATAR/Image=False, State=Hover, Size=Medium`)
  - AVATAR (`Avatar/AVATAR/Image=False, State=Selected, Size=Medium`)
  - AVATAR (`Avatar/AVATAR/Image=False, State=Focus, Size=Medium`)
  - … 8 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Badge

- Zeroheight page id: `8566321`
- Design blocks: 5
- UI Kit mapping: `packages/core/src/Badge`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Badge | S (`Badge/Badge | S`)
  - Badge | XS (`Badge/Badge | XS `)
  - Badge | M, L, and XL (`Badge/Badge | M, L, and XL`)
  - Badge | List Alignment (`Badge/Badge | List Alignment`)
  - BADGE (`Badge/BADGE/Type=Number Only`)
  - BADGE (`Badge/BADGE/Type=Non-Numerical`)
  - BADGE (`Badge/BADGE/Type=Percentage`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Bar Chart

- Zeroheight page id: `8566295`
- Design blocks: 12
- UI Kit mapping: `packages/viz/src/BarChart`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Horizontal: States
  - Vertical: States, Examples
- Design-block inventory preview:
  - BAR CHART - Single (`Bar Chart/BAR CHART - Single/Variant=Horizontal`)
  - Bar Single Focus (`Bar/Bar Single Focus`)
  - Bar Single Selected (`Bar/Bar Single Selected`)
  - Bar Single Hor Hover (`Bar/Bar Single Hor Hover`)
  - BAR CHART - Stacked (`Bar Chart/BAR CHART - Stacked/Variant=Horizontal`) — Compares the sums while displaying the relation between parts.
  - BAR CHART - Single (`Bar Chart/BAR CHART - Single/Variant=Horizontal`)
  - Prototype Template | Bar | S (`Bar/Prototype Template | Bar | S`)
  - Prototype Template | Bar | XS (`Bar/Prototype Template | Bar | XS`)
  - … 13 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Breadcrumb

- Zeroheight page id: `8566373`
- Design blocks: 12
- UI Kit mapping: `packages/core/src/BreadCrumb`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Breadcrumb | S (`Breadcrumb /Prototype Template | Breadcrumb | S`)
  - Prototype Template | Breadcrumb | M, L, and XL (`Breadcrumb /Prototype Template | Breadcrumb | M, L, and XL`)
  - Breadcrumb | Don't (`Breadcrumb /Breadcrumb | Don't`)
  - Breadcrumb | Do (`Breadcrumb /Breadcrumb | Do`)
  - Breadcrumb | Non-navigable section (`Breadcrumb /Breadcrumb | Non-navigable section`)
  - Truncated with long Tooltip (`Breadcrumb /Truncated with long Tooltip`)
  - Usage Breadcrumb Segment Closed (`Breadcrumb /Usage Breadcrumb Segment Closed`)
  - Usage Breadcrumb and back (`Breadcrumb /Usage Breadcrumb and back`)
  - … 7 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Building Blocks

- Zeroheight page id: `8566392`
- Design blocks: 0
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Main Blocks, Components, Widgets, Visualizations, Templates, Sub Blocks, Items, Parts
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Bulk Actions

- Zeroheight page id: `8566355`
- Design blocks: 6
- UI Kit mapping: `packages/core/src/BulkActions`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Bulk Actions | S (`Bulk Actions /Prototype Template | Bulk Actions | S`)
  - Prototype Template | Bulk Actions | XS (`Bulk Actions /Prototype Template | Bulk Actions | XS`)
  - Prototype Template | Bulk Actions | M, L, and XL (`Bulk Actions /Prototype Template | Bulk Actions | M, L, and XL`)
  - Critical Action (`Bulk Actions /Critical Action`)
  - Behavior instructions (`Bulk Actions /Behavior instructions`)
  - BULK ACTIONS (`Bulk Actions/BULK ACTIONS/State=Enabled`)
  - BULK ACTIONS (`Bulk Actions/BULK ACTIONS/State=Disabled`)
  - BULK ACTIONS (`Bulk Actions/BULK ACTIONS/State=Full`)
  - … 1 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Bullet Chart

- Zeroheight page id: `8566287`
- Design blocks: 6
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Horizontal Bullet Chart: Variants, States
  - Vertical Bullet Chart: Variants, States
- Design-block inventory preview:
  - BULLET CHART - Simple (`Bullet Chart/BULLET CHART - Simple/Variant=Horizontal`)
  - Bullet Hor Hover (`Bullet/Bullet Hor Hover`)
  - Bullet Hor Selected (`Bullet/Bullet Hor Selected`)
  - Bullet Hor Focus (`Bullet/Bullet Hor Focus`)
  - BULLET CHART - Simple (`Bullet Chart/BULLET CHART - Simple/Variant=Horizontal`) — For a simple but effective answer to "How far below or above target is this data?"
  - BULLET CHART - Scale (`Bullet Chart/BULLET CHART - Scale/Variant=Horizontal`) — Using the horizontal also allows a higher character count in X-axis labels. If you use the vertical format, you might be forced to use slanted labels, which are not as efficient for scanning.
  - BULLET CHART - Simple (`Bullet Chart/BULLET CHART - Simple/Variant=Vertical`)
  - BULLET CHART - Simple (`Bullet Ver Hover/BULLET CHART - Simple/Variant=Vertical`)
  - … 8 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Button

- Zeroheight page id: `8566313`
- Design blocks: 45
- UI Kit mapping: `packages/core/src/Button`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Related, Accessibility
  - Button: Variants, States, Dos and Don'ts
  - Context Button: Variants, States, Dos and Don'ts
  - Dropdown Button: Variants, States, Usage, Examples
  - Mobile: —
  - Split Button: States
  - HE Lumada Button: —
- Design-block inventory preview:
  - BUTTON Split (`Button/BUTTON Split/State=Disabled, Open=False`)
  - BUTTON Split (`Button/BUTTON Split/State=Enabled, Open=False`)
  - Split Button Hover Button (`Button/Split Button Hover Button`)
  - BUTTON Split (`Button/BUTTON Split/State=Focus, Open=False`)
  - BUTTON Split (`Button/BUTTON Split/State=Open, Open=True`)
  - Button DO Title Case (`Button/Button DO Title Case`)
  - Prototype Template | Button Hierarchy (`Button/Prototype Template | Button Hierarchy`)
  - Usage Distance Between Buttons (`Button/Usage Distance Between Buttons`)
  - … 103 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Card

- Zeroheight page id: `8566354`
- Design blocks: 18
- UI Kit mapping: `packages/core/src/Card`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Examples, Related, Accessibility
  - Card: States, Usage, Dos and Don'ts
  - Condensed Card: States, Usage, Dos and Don'ts
- Design-block inventory preview:
  - Card quick actions (`Card/Card quick actions`)
  - Card listing (`Card/Card listing`)
  - Prototype Template | Card | S (`Card/Prototype Template | Card | S`)
  - Prototype Template | Card | XS (`Card/Prototype Template | Card | XS`)
  - Prototype Template | Card | M, L, and XL (`Card/Prototype Template | Card | M, L, and XL`)
  - Alternative Media Dont (`Card/Alternative Media Dont`)
  - Alternative Media (`Card/Alternative Media`)
  - Card | Usage | 2 (`Card/Card | Usage | 2`)
  - … 20 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Carousel

- Zeroheight page id: `8566366`
- Design blocks: 9
- UI Kit mapping: `packages/core/src/Carousel`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, States (Thumbnail), Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Image Map | S (`Carousel/Prototype Template | Image Map | S`)
  - Prototype Template | Image Carousel | XS (`Carousel/Prototype Template | Image Carousel | XS`)
  - Prototype Template | Image Map | M, L, and XL (`Carousel/Prototype Template | Image Map | M, L, and XL`)
  - Edit Album (`Carousel/Edit Album`)
  - Edit Mode (`Carousel/Edit Mode`)
  - Full Screen Image with different aspect ratios 1 (`Carousel/Full Screen Image with different aspect ratios 1`)
  - Full Screen Image with different aspect ratios 2 (`Carousel/Full Screen Image with different aspect ratios 2`)
  - Image Carousel Small with Video (`Carousel/Image Carousel Small with Video`)
  - … 7 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Code Editor

- Zeroheight page id: `8566380`
- Design blocks: 4
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Code Editor | S (`Code Editor /Prototype Template | Code Editor | S`)
  - Prototype Template | Code Editor | XS (`Code Editor /Prototype Template | Code Editor | XS`)
  - Prototype Template | Code Editor | M, L, and XL (`Code Editor /Prototype Template | Code Editor | M, L, and XL`)
  - line highlight example (`Code Editor /line highlight example`)
  - selection example (`Code Editor /selection example`)
  - word highlight example (`Code Editor /word highlight example`)
  - Code Editor Overview (`Code Editor /Code Editor Overview`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Color Picker

- Zeroheight page id: `8566375`
- Design blocks: 5
- UI Kit mapping: `packages/core/src/ColorPicker`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Color Picker | S (`Color Picker /Prototype Template | Color Picker | S`)
  - Prototype Template | Color Picker | XS (`Color Picker /Prototype Template | Color Picker | XS`)
  - Prototype Template | Color Picker | M, L, and XL (`Color Picker /Prototype Template | Color Picker | M, L, and XL`)
  - Screen Size and Dropdown direction (`Color Picker /Screen Size and Dropdown direction`)
  - Color Picker Trigger (`Color Picker /Color Picker Trigger`)
  - Color Chooser Anatomy (`Color Picker /Color Chooser Anatomy`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Comments

- Zeroheight page id: `8566360`
- Design blocks: 8
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Comment Section | S (`Comments/Prototype Template | Comment Section | S`)
  - Prototype Template | Comment Section | XS (`Comments/Prototype Template | Comment Section | XS`)
  - Prototype Template | Comment Section | M, L, and XL (`Comments/Prototype Template | Comment Section | M, L, and XL`)
  - Comment Section | Empty State (`Comments/Comment Section | Empty State`)
  - Toggle Enabled (`Comments/Toggle Enabled`)
  - Toggle Selected (`Comments/Toggle Selected`)
  - Comment Box Tagging (`Comments/Comment Box Tagging`)
  - .Comment Box (`Comments/.Comment Box/States=Focus`)
  - … 6 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Confusion Matrix

- Zeroheight page id: `8566297`
- Design blocks: 5
- UI Kit mapping: `packages/viz/src/ConfusionMatrix`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Confusion Matrix | M, L, and XL (`Confusion Matrix/Confusion Matrix | M, L, and XL`)
  - Confusion Matrix | S (`Confusion Matrix/Confusion Matrix | S`)
  - Confusion Matrix | XS (`Confusion Matrix/Confusion Matrix | XS`)
  - Confusion Matrix | Main diagonal registers (`Confusion Matrix/Confusion Matrix | Main diagonal registers`) — The main diagonal registers the matches between expected and predicted. Here positive values are represented in green. Negative values are bad as they represent a decrease in the performance of the algorithm. Represented in red or orange.
  - Fonfusion Matrix | Predicted and expected values. (`Confusion Matrix/Fonfusion Matrix | Predicted and expected values.`) — Outside the main diagonal, the Matrix displays the mismatch between the predicted and expected values. If there's a positive change in the number, the Matrix displays a negative square, more mismatches. If there's a negative change, then the square is positive, green in this case, as the mismatches have been reduced.
  - CONFUSION MATRIX (`Confusion Matrix/CONFUSION MATRIX/Size=32`)
  - CONFUSION MATRIX (`Confusion Matrix/CONFUSION MATRIX/Size=48`)
  - CONFUSION MATRIX (`Confusion Matrix/CONFUSION MATRIX/Size=32`)
  - … 6 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Cookie Consent

- Zeroheight page id: `8566358`
- Design blocks: 8
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Cookie Preferences: Examples
- Design-block inventory preview:
  - Prototype Template | Cookie Consent | S (`Cookie Consent/Prototype Template | Cookie Consent | S`)
  - Prototype Template | Cookie Consent | XS (`Cookie Consent/Prototype Template | Cookie Consent | XS`)
  - Prototype Template | Cookie Consent | M, L, and XL (`Cookie Consent/Prototype Template | Cookie Consent | M, L, and XL`)
  - Cookie Settings (`Cookie Consent/Cookie Settings`)
  - Usage Padding Non Modal (`Cookie Consent/Usage Padding Non Modal`)
  - Cookie Non-Modal (`Cookie Consent/Cookie Non-Modal`)
  - COOKIE CONSENT (`Non-Modal/COOKIE CONSENT/Type=Non Modal`)
  - Settings (`Cookie Consent/Settings`)
  - … 3 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Cursor

- Zeroheight page id: `8566320`
- Design blocks: 1
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Variants, Related, Accessibility
- Design-block inventory preview:
  - CURSOR (`Cursor/CURSOR/Type=Down Resize`)
  - CURSOR (`Cursor/CURSOR/Type=E Resize`)
  - CURSOR (`Cursor/CURSOR/Type=EW Resize`)
  - CURSOR (`Cursor/CURSOR/Type=Left Sesize`)
  - CURSOR (`Cursor/CURSOR/Type=Col Resize`)
  - CURSOR (`Cursor/CURSOR/Type=N Resize`)
  - CURSOR (`Cursor/CURSOR/Type=NS Resize`)
  - CURSOR (`Cursor/CURSOR/Type=Right Sesize`)
  - … 18 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Date Range

- Zeroheight page id: `8566379`
- Design blocks: 7
- UI Kit mapping: `packages/core/src/DatePicker`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Dos and Don'ts, Related, Accessibility
- Design-block inventory preview:
  - Date Range Do Hide Time Picker (`Date Range /Date Range Do Hide Time Picker`)
  - Month Range (`Date Range /Month Range`)
  - DATE PICKER Selected List time picker open (`Date Range /DATE PICKER Selected List time picker open`)
  - Date Picker Anatomy (`Date Range /Date Picker Anatomy`)
  - .Single Calendar Selected Month (`Date Range /.Single Calendar Selected Month`)
  - DATE RANGE (`Date Range/DATE RANGE/W/ Range=False, Open=False`)
  - DATE RANGE (`Date Range/DATE RANGE/W/ Range=False, Open=True`)
  - Date Picker Focus (`Date Range /Date Picker Focus`)
  - … 4 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Dialog

- Zeroheight page id: `8566357`
- Design blocks: 10
- UI Kit mapping: `packages/core/src/Dialog`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Examples, Related, Accessibility
  - Modal: Variants, Usage
  - Non-modal: —
- Design-block inventory preview:
  - Prototype Template | Dialog | S (`Dialog /Prototype Template | Dialog | S`)
  - Prototype Template | Dialog | XS (`Dialog /Prototype Template | Dialog | XS`)
  - Prototype Template | Dialog | M, L, and XL (`Dialog /Prototype Template | Dialog | M, L, and XL`)
  - Usage Height Modal (`Dialog /Usage Height Modal`)
  - DIALOG Anatomy (`Dialog /DIALOG Anatomy`)
  - DIALOG Positive Modal (`Dialog /DIALOG Positive Modal`)
  - Critical Actions Delete (`Dialog /Critical Actions Delete`) — Warns users about critical and irreversible actions associated with data loss.
  - Critical Actions Remove (`Dialog /Critical Actions Remove`) — Reversible removal of an item from a specific context without data loss, used to rearrange or organize items, possibly temporarily.
  - … 6 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Donut

- Zeroheight page id: `8566294`
- Design blocks: 7
- UI Kit mapping: `packages/viz/src/DonutChart`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Thick: States, Usage
  - Thin: States, Usage, Examples
- Design-block inventory preview:
  - DONUT CHART - Examples Multiple Viz (`Donut/DONUT CHART - Examples Multiple Viz`)
  - DONUT CHART (`Donut/DONUT CHART/Style=Thin`)
  - Donut Thin Focus (`Donut/Donut Thin Focus`)
  - Donut Thin Hover (`Donut/Donut Thin Hover`)
  - Donut Thin Selected (`Donut/Donut Thin Selected`)
  - DONUT CHART (`Donut/DONUT CHART/Style=Thin`)
  - DONUT CHART (`Donut/DONUT CHART/Style=Thick`)
  - Donut Thick Hover (`Donut/Donut Thick Hover`)
  - … 7 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Downloads

- Zeroheight page id: `8566342`
- Design blocks: 0
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Library Link, Figma Library File, Figma File Organizer
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Drag & Drop

- Zeroheight page id: `8566319`
- Design blocks: 5
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Draggable items on a List (`Drag & Drop/ Draggable items on a List`)
  - DRAG & DROP (`Drag & Drop/DRAG & DROP/Type=Drop Target, State=—`)
  - DRAG & DROP (`Drag & Drop/DRAG & DROP/Type=Dropzone, State=Enabled`)
  - DRAG & DROP (`Drag & Drop/DRAG & DROP/Type=Dropzone, State=Hover`)
  - Dragging Single Item (`Drag & Drop/Dragging Single Item`)
  - List Item Enabled Dragg (`Drag & Drop/List Item Enabled Dragg`)
  - List Item Hover Dragg (`Drag & Drop/List Item Hover Dragg`)
  - Dragging Multiple Items (`Drag & Drop/Dragging Multiple Items`)
  - … 1 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Empty State

- Zeroheight page id: `8566315`
- Design blocks: 5
- UI Kit mapping: `packages/core/src/EmptyState`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Empty State | S (`Empty State/Prototype Template | Empty State | S`)
  - Prototype Template | Empty State | XS (`Empty State/Prototype Template | Empty State | XS`)
  - Prototype Template | Empty State | M, L, and XL (`Empty State/Prototype Template | Empty State | M, L, and XL`)
  - Empty State Message and Icon (`Empty State/Empty State Message and Icon`)
  - Empty State Anatomy Centred (`Empty State/Empty State Anatomy Centred`)
  - Empty State Condensed (`Empty State/Empty State Condensed`)
  - Empty State Anatomy Centred (`Empty State/Empty State Anatomy Centred`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Error Page

- Zeroheight page id: `8566359`
- Design blocks: 5
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Error Page | S (`Error Page/Prototype Template | Error Page | S`)
  - Prototype Template | Error Page | XS (`Error Page/Prototype Template | Error Page | XS`)
  - Prototype Template | Error Page | M, L, and XL (`Error Page/Prototype Template | Error Page | M, L, and XL`)
  - 404 Vertical Nav (`Error Page/404 Vertical Nav`)
  - 404 (`Error Page/404`) — Applicable when the server cannot or will not process the request due to an apparent client error.
  - 400 (`Error Page/400`) — Applicable when the server cannot or will not process the request due to an apparent client error.
  - 403 (`Error Page/403`) — Used when&nbsp;a client is forbidden from accessing a valid URL.
  - 500 (`Error Page/500`) — A generic error message is given when an unexpected condition is encountered and no more specific message is suitable.
  - … 1 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Facet Search

- Zeroheight page id: `8566367`
- Design blocks: 9
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Facet Search | S (`Facet Search/Prototype Template | Facet Search | S`)
  - Prototype Template | Facet Search | XS (`Facet Search/Prototype Template | Facet Search | XS`)
  - Prototype Template | Facet Search | M, L, and XL (`Facet Search/Prototype Template | Facet Search | M, L, and XL`)
  - Facet Search | Do 5 (`Facet Search/Facet Search | Do 5`)
  - Facet Search | Do 4 (`Facet Search/Facet Search | Do 4`)
  - Facet Search | Do 1 (`Facet Search/Facet Search | Do 1`)
  - Quick Selection (`Facet Search/Quick Selection`)
  - Facet Search Max Height (`Facet Search/Facet Search Max Height`)
  - … 3 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### File Explorer

- Zeroheight page id: `8566372`
- Design blocks: 9
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Search: —
- Design-block inventory preview:
  - Prototype Template | File Explorer | XS (`File Explorer/Prototype Template | File Explorer | XS`)
  - Prototype Template | File Explorer | S (`File Explorer/Prototype Template | File Explorer | S`)
  - Prototype Template | File Explorer | M, L, and XL (`File Explorer/Prototype Template | File Explorer | M, L, and XL`)
  - Drag Files (`File Explorer/Drag Files`)
  - File Explorer | Drag menu (`File Explorer/File Explorer | Drag menu`)
  - File Explorer | File & Folders Selection (`File Explorer/File Explorer | File & Folders Selection`)
  - Overview | Anatomy (`File Explorer/Overview | Anatomy`)
  - File Explorer | Global Search | Empty State (`File Explorer/ File Explorer | Global Search | Empty State`)
  - … 2 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### File Uploader

- Zeroheight page id: `8566350`
- Design blocks: 8
- UI Kit mapping: `packages/core/src/FileUploader`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
  - Dropzone: States
  - Item: States
- Design-block inventory preview:
  - FILE UPLOADER Dropzone (`File Uploader/FILE UPLOADER Dropzone/State=Disabled`)
  - FILE UPLOADER Dropzone (`File Uploader/FILE UPLOADER Dropzone/State=Error`)
  - FILE UPLOADER Dropzone (`File Uploader/FILE UPLOADER Dropzone/State=Enabled`)
  - FILE UPLOADER Dropzone (`File Uploader/FILE UPLOADER Dropzone/State=Hover`)
  - FILE UPLOADER Dropzone (`File Uploader/FILE UPLOADER Dropzone/State=Focus`)
  - Prototype Template | File Uploader | S (`File Uploader/Prototype Template | File Uploader | S`)
  - Prototype Template | File Uploader | XS (`File Uploader/Prototype Template | File Uploader | XS`)
  - Prototype Template | File Uploader | M, L, and XL (`File Uploader/Prototype Template | File Uploader | M, L, and XL`)
  - … 11 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Filter Group

- Zeroheight page id: `8566353`
- Design blocks: 7
- UI Kit mapping: `packages/core/src/FilterGroup`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Filter Group | S (`Filter Group  /Prototype Template | Filter Group | S`)
  - Prototype Template | Filter Group | XS (`Filter Group  /Prototype Template | Filter Group | XS`)
  - Prototype Template | Filter Group | M, L,and XL (`Filter Group  /Prototype Template | Filter Group | M, L,and XL`)
  - DONT (`FILTER GROUP /  Usage / DONT`)
  - DO (`FILTER GROUP /  Usage /  DO`)
  - Edges (`FILTER GROUP /  Usage / Edges`)
  - FIlter Group Overview Anatomy Extended (`Filter Group  /FIlter Group Overview Anatomy Extended`) — Filter Group extended allows users to load or save a new preset.
  - Filter Group My Filters (`Filter Group  /Filter Group My Filters`) — Users can select and load the panel with a predetermined set of filters by clicking on the 'Load...' action in the Default view.
  - … 3 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Footer

- Zeroheight page id: `8566323`
- Design blocks: 5
- UI Kit mapping: `packages/core/src/Footer`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Responsive, Related, Accessibility
- Design-block inventory preview:
  - Footer | M, L, and XL (`Footer/Footer | M, L, and XL`)
  - Footer | S (`Footer/Footer | S`)
  - Footer | XS (`Footer/Footer | XS`)
  - Prototype Template | Footer | S (`Footer/Prototype Template | Footer | S`)
  - Prototype Template | Footer | XS (`Footer/Prototype Template | Footer | XS`)
  - Prototype Template | Footer | M, L, and XL (`Footer/Prototype Template | Footer | M, L, and XL`)
  - Usage Footer Placement (`Footer/Usage Footer Placement`)
  - Footer Overview (`Footer/Footer Overview`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Form

- Zeroheight page id: `8566382`
- Design blocks: 19
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Form | XS (`Form/Prototype Template | Form | XS`)
  - Prototype Template | Form | S (`Form/Prototype Template | Form | S`)
  - Prototype Template | Form | Fixed Action Bar | M, L, and XL (`Form/Prototype Template | Form | Fixed Action Bar | M, L, and XL`)
  - Form Inside Dialog (`Form/Form Inside Dialog`) — Use a Form inside a Dialog when the action is quick, lightweight, and secondary to the main page, involves a simple form with only a few fields, and is context-specific, allowing the user to return to the main page immediately after completing it.
  - Side by Side One Group DO Full Width (`Form/Side by Side One Group DO Full Width`)
  - Side by Side One Group | Dos Height (`Form/Side by Side One Group | Dos Height `)
  - Scanning Horizontal Zig Zag (`Form/Scanning Horizontal Zig Zag`)
  - Scanning Vertical Zig Zag (`Form/Scanning Vertical Zig Zag`)
  - … 14 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Galaxy View

- Zeroheight page id: `8566286`
- Design blocks: 8
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Node: States
- Design-block inventory preview:
  - .Node (`Galaxy View/.Node/Status View Mode=True, Size=XL, State=Focus, Status=None`)
  - .Node (`Galaxy View/.Node/Status View Mode=True, Size=XL, State=Enabled, Status=None`)
  - .Node (`Galaxy View/.Node/Status View Mode=True, Size=XL, State=Hover, Status=None`)
  - Size XL (`Galaxy View/Galaxy Nodes/Size XL`)
  - Size L (`Galaxy View/Galaxy Nodes/Size L`)
  - Size M (`Galaxy View/Galaxy Nodes/Size M`)
  - Size S (`Galaxy View/Galaxy Nodes/Size S`)
  - Size XS (`Galaxy View/Galaxy Nodes/Size XS`)
  - … 10 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Gauge

- Zeroheight page id: `8566292`
- Design blocks: 5
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Gauge | S (`Gauge/Prototype Template | Gauge | S`)
  - Prototype Template | Gauge | XS (`Gauge/Prototype Template | Gauge | XS`)
  - Prototype Template | Gauge | M, L, and XL (`Gauge/Prototype Template | Gauge | M, L, and XL`)
  - GAUGE (`Gauge/GAUGE/Type=Semi-Circle, Background=False`)
  - Semi-Circle Hover (`Gauge/Semi-Circle Hover`)
  - Semi-Circle Focus (`Gauge/Semi-Circle Focus`)
  - Semi-Circle Selected (`Gauge/Semi-Circle Selected`)
  - GAUGE (`Gauge/GAUGE/Type=Circle, Background=False`)
  - … 2 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Header

- Zeroheight page id: `8566352`
- Design blocks: 4
- UI Kit mapping: `packages/core/src/Header`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Header | S (`Header/Prototype Template | Header | S`)
  - Prototype Template | Header | XS (`Header/Prototype Template | Header | XS`)
  - Prototype Template | Header | M, L, and XL (`Header/Prototype Template | Header | M, L, and XL`)
  - Example dropdown control (`Header/Example dropdown control`)
  - Header Anatomy (`Header/Header Anatomy`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Image / Text Block

- Zeroheight page id: `8566312`
- Design blocks: 4
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Image Text Block | S (`Image Text Block/Prototype Template | Image Text Block | S`)
  - Prototype Template | Image Text Block | XS (`Image Text Block/Prototype Template | Image Text Block | XS`)
  - Prototype Template | Image Text Block | M, L, and XL (`Image Text Block/Prototype Template | Image Text Block | M, L, and XL`)
  - Image Usage Image Text (`Image Text Block/Image Usage Image Text`)
  - TEXT Block (`Image & Text Block/TEXT Block`)
  - Image Overview (`Image Text Block/Image Overview`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Input

- Zeroheight page id: `8566308`
- Design blocks: 9
- UI Kit mapping: `packages/core/src/Input`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Related, Accessibility
  - Text Input: States, Usage
  - Text Area: States, Usage
- Design-block inventory preview:
  - Usage Option Infomation (`Input/Usage Option Infomation`)
  - Usage Input Text Mandatory (`Input/Usage Input Text Mandatory`)
  - INPUT (`Input/INPUT/State=Enabled, Autocomplete=False`)
  - INPUT Text Area (`Input/INPUT Text Area/States=Enabled`)
  - INPUT Anatomy (`Input/INPUT Anatomy`)
  - INPUT Text Area (`Input/INPUT Text Area/States=Focus`)
  - INPUT Text Area (`Input/INPUT Text Area/States=Enabled`)
  - INPUT Text Area (`Input/INPUT Text Area/States=Hover`)
  - … 14 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Installer

- Zeroheight page id: `8566369`
- Design blocks: 5
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Installer | S (`Installer/Prototype Template | Installer | S`)
  - Prototype Template | Installer | XS (`Installer/Prototype Template | Installer | XS`)
  - Prototype Template | Installer | M, L, and XL (`Installer/Prototype Template | Installer | M, L, and XL`)
  - .Installer Determined Loading (`Installer/.Installer Determined Loading/Step=1 - Destination`)
  - .Installer Determined Loading (`Installer/.Installer Determined Loading/Step=2 - Account`)
  - .Installer Determined Loading (`Installer/.Installer Determined Loading/Step=3 - Progress 15%`)
  - .Installer Determined Loading (`Installer/.Installer Determined Loading/Step=3 - Progress 100%`)
  - .Installer Determined Loading (`Installer/.Installer Determined Loading/Step=4 - Success Trigger`)
  - … 4 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### KPI

- Zeroheight page id: `8566293`
- Design blocks: 15
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Examples, Related, Accessibility
  - Value + Trend: Read Only, Clickable
  - Gauge: Read Only, Clickable
  - Train: Read Only, Clickable
  - Value: Read Only, Clickable
- Design-block inventory preview:
  - .Gauge Link To (`KPI/.Gauge Link To/State=Enabled, Status=True`)
  - .Gauge Selectable (`KPI/.Gauge Selectable/State=Enabled, Status=True`)
  - .Gauge Read-Only (`KPI/.Gauge Read-Only/Status=True`)
  - .Gauge Read-Only (`KPI/.Gauge Read-Only/Status=False`)
  - .Train Link To (`KPI/.Train Link To/State=Enabled`)
  - .Train Selectable (`KPI/.Train Selectable/State=Enabled`)
  - KPI (`KPI/KPI/Type=Train, Modes=Read-Only`)
  - KPI (`Train/Medium Train/KPI/Type=Train, Modes=Read-Only`)
  - … 26 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Line / Area

- Zeroheight page id: `8566296`
- Design blocks: 10
- UI Kit mapping: `packages/viz/src/LineChart`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Line: States, Examples
  - Area: States
- Design-block inventory preview:
  - Line | M, L, and XL (`Line / Area/Line | M, L, and XL`)
  - Line | S (`Line / Area/Line | S`)
  - Line | XS (`Line / Area/Line | XS`)
  - Shared x-axis value (`Line / Area/Shared x-axis value`) — Compares all lines at the same x-axis value, using a vertical line through their intersection. The Tooltip shows values for all data series at that point.
  - Single data point (`Line / Area/Single data point`) — Focuses on a single data point in one series while keeping other series visible for context. Ideal for analyzing one value without losing the broader dataset.
  - Individual exploration (`Line / Area/Individual exploration`) — The Tooltip appears above the selected data point and shows its exact value only for that line, hiding labels for other lines. Use it to examine a single data point or explore one line in detail.
  - Line Anatomy (`Line / Area/Overview/Line Anatomy`)
  - Multiple Area and Line Charts (`Line / Area/Examples/Multiple Area and Line Charts`)
  - … 13 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### List

- Zeroheight page id: `8566301`
- Design blocks: 8
- UI Kit mapping: `packages/core/src/List`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Related, Accessibility
- Design-block inventory preview:
  - List Expandable Padding (`List/List Expandable Padding`)
  - Usage Horizontal List (`List/Usage Horizontal List`)
  - LIST Item Expandable (`List/LIST Item Expandable/Item Type=🍃 Child, Item with Selector=True, State=Dragging (Single Item)`)
  - List Quick Selection (`List/List Quick Selection`)
  - LIST Item Simple (`List/LIST Item Simple/Selectable=True, ↳ Selection Item=True, State=Enabled`)
  - .List Item Simple RadioButton (`.List Item Simple RadioButton/Selectable=True, State=Enabled, Size=◼︎ Medium`)
  - .List Item Simple Toggle Switch (`.List Item Simple Toggle Switch/Selectable=True, State=Enabled, Size=◼︎ Medium`)
  - LIST Item Simple (`List/LIST Item Simple/Selectable=True, ↳ Selection Item=True, State=Enabled`)
  - … 9 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Loading

- Zeroheight page id: `8566302`
- Design blocks: 14
- UI Kit mapping: `packages/core/src/Loading`, `packages/core/src/ProgressBar`, `packages/core/src/Skeleton`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Related, Accessibility
  - Loading Indicator: Variants, Examples
  - Progress Bar: States, Examples
  - Skeleton Loader: Variants, Usage
- Design-block inventory preview:
  - Loading | KPI S (`Loading/Loading | KPI S`)
  - Loading | KPI XS (`Loading/Loading | KPI XS`)
  - Loading | KPI M, L, and XL (`Loading/Loading | KPI M, L, and XL`)
  - Loading | Card S (`Loading/Loading | Card S`)
  - Loading | Card XS (`Loading/Loading | Card XS`)
  - Loading | Card M, L, and XL (`Loading/Loading | Card M, L, and XL`)
  - Loading | Indicator on top of Overlay (`Loading/Loading | Indicator on top of Overlay`)
  - LOADING Loading Indicator (`Loading/LOADING Loading Indicator/Over Dark Background=False, Size=Medium`)
  - … 18 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Login

- Zeroheight page id: `8566348`
- Design blocks: 6
- UI Kit mapping: `packages/core/src/Login`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Responsive, Related, Accessibility
- Design-block inventory preview:
  - Login Page | M, L, and XL (`Login Page/Login Page | M, L, and XL`)
  - Login Page | S (`Login Page/Login Page | S`)
  - Login Page | XS (`Login Page/Login Page | XS`)
  - Login SSO (`Login Page/Login SSO`)
  - Login Error (`Login Page/Login Error`)
  - .Password Requirements (`Input/.Password Requirements/Meet=None`)
  - .Password Requirements (`Input/.Password Requirements/Meet=2 of 4`)
  - .Password Requirements (`Input/.Password Requirements/Meet=All`)
  - … 2 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Logs

- Zeroheight page id: `8566378`
- Design blocks: 3
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Logs | S (`Logs/Prototype Template | Logs | S`)
  - Prototype Template | Logs | XS (`Logs/Prototype Template | Logs | XS`)
  - Prototype Template | Logs | M, L, XL, and XXL (`Logs/Prototype Template | Logs | M, L, XL, and XXL`)
  - LOGS (`LOGS`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Map

- Zeroheight page id: `8566289`
- Design blocks: 8
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
  - Map Info Panel: Anatomy, Usage
- Design-block inventory preview:
  - MAP Info Panel Usage Position (`Map/MAP Info Panel Usage Position`)
  - MAP Info Panel Usage Map Marker (`Map/MAP Info Panel Usage Map Marker`)
  - MAP Info Panel (`Map/MAP Info Panel`)
  - Prototype Template | Map | S (`Map/Prototype Template | Map | S`)
  - Prototype Template | Map | XS (`Map/Prototype Template | Map | XS`)
  - Prototype Template | Map | M, L, and XL (`Map/Prototype Template | Map | M, L, and XL`)
  - MAP markers (`Map/MAP markers`)
  - MAP Embed title ver (`Map/MAP Embed title ver`)
  - … 3 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Metadata Group

- Zeroheight page id: `8566371`
- Design blocks: 12
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Dos and Don'ts, Examples, Related, Accessibility
  - Edit: Examples
- Design-block inventory preview:
  - METADATA Section Edit (`Metadata Group/METADATA Section Edit`)
  - METADATA Section Editable (`Metadata Group/METADATA Section Editable`)
  - Edit METADATA (`Metadata Group/Edit METADATA `)
  - Metadata | M, L, and XL (`Metadata Group/Metadata | M, L, and XL`)
  - Metadata | S (`Metadata Group/Metadata | S`)
  - Metadata | XS (`Metadata Group/Metadata | XS`)
  - Do Full Widht one row (`Metadata Group/Do Full Widht one row`)
  - Don't METADATA Widget (`Metadata Group/Don't METADATA Widget`)
  - … 12 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Micro Visualizations

- Zeroheight page id: `8566298`
- Design blocks: 5
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - MICRO VIZ - Card - Example (`Micro Viz/MICRO VIZ - Card - Example`)
  - MICRO VIZ - KPI - Example (`Micro Viz/MICRO VIZ - KPI - Example`)
  - MICRO VIZ - Usage (`Micro Viz/MICRO VIZ - Usage`)
  - MICRO VIZ - Types table (`Micro Viz/MICRO VIZ - Types table`)
  - MICRO VIZ (`MICRO VIZ Donut Details/MICRO VIZ/Type=Donut`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Misc

- Zeroheight page id: `8566288`
- Design blocks: 8
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Examples, Related, Accessibility
  - Bubble: States
  - Chord: States
  - Sankey: States
- Design-block inventory preview:
  - Bubble | M, L, and XL (`Misc/Bubble | M, L, and XL`)
  - Bubble | S (`Misc/Bubble | S`)
  - Bubble | XS (`Misc/Bubble | XS`)
  - MISC Bubble (`Misc/MISC Bubble/Series=2`)
  - MISC Chord (`Misc/MISC Chord`)
  - MISC Sankey (`Misc/MISC Sankey`)
  - MISC Bubble (`Misc/MISC Bubble/Series=2`)
  - Bubble Hover (`Misc/Bubble Hover`)
  - … 14 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Moved / Deleted Files

- Zeroheight page id: `8566335`
- Design blocks: 3
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Illustrations: —
  - Examples: —
- Design-block inventory preview:
  - Example - File deleted (`Moved / Deleted Files/Example - File deleted`)
  - Example - File moved (`Moved / Deleted Files/Example - File moved`)
  - File moved (`Illustrations/File moved`) — Moved file
  - File deleted (`Illustrations/File deleted`) — Deleted file
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Multi-Button

- Zeroheight page id: `8566303`
- Design blocks: 8
- UI Kit mapping: `packages/core/src/MultiButton`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Related, Accessibility
- Design-block inventory preview:
  - Multi-Button | Min Max Width (`Multi-Button/Multi-Button | Min Max Width`)
  - Multi-Button | Multiselect (`Multi-Button/Multi-Button | Multiselect`)
  - Multi-Button | Set (`Multi-Button/Multi-Button | Set`)
  - MULTI BUTTON Horizontal (`Multi-Button/MULTI BUTTON Horizontal/W/ Status Buttons=True, State=Enabled, Style=♦︎ Icon & Label`)
  - .Multi-Button Item (`Multi-Button/.Multi-Button Item/State=Selected, Style=Icon Only`)
  - .Multi-Button Item (`Multi-Button/.Multi-Button Item/State=Selected, Style=Icon + Label`)
  - .Multi-Button Item (`Multi-Button/.Multi-Button Item/State=Selected, Style=Label Only`)
  - .Multi-Button Item (`Multi-Button/.Multi-Button Item/State=Enabled, Style=Label Only`)
  - … 7 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Navigation System

- Zeroheight page id: `8566351`
- Design blocks: 20
- UI Kit mapping: `packages/core/src/Header`, `packages/core/src/AppSwitcher`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Usage, Examples, Related, Accessibility
  - Vertical Navigation: Anatomy, States, Usage, Examples
  - Horizontal Navigation: Anatomy, States, Usage, Examples
- Design-block inventory preview:
  - Vertical Nav | S (`Navigation System/Examples/Vertical Nav | S`)
  - Vertical Nav | XS (`Navigation System/Examples/Vertical Nav | XS`)
  - Vertical Nav Expanded | M, L,and XL (`Navigation System/Examples/Vertical Nav Expanded | M, L,and XL`)
  - Vertical Nav Collapsed | M, L, and XL (`Navigation System/Examples/Vertical Nav Collapsed | M, L, and XL`)
  - Vertical Min and Max Width (`Navigation System/Vertical Min and Max Width`) — The minimum width for the Vertical Navigation container is 270px. The maximum width is 320px.
  - Vertical Nav Long Labels (`Navigation System/Vertical Nav Long Labels`) — When the item has a label bigger than the container the text will get truncated, and a Tooltip should be displayed.
  - Vertical Nav Two lines (`Navigation System/Vertical Nav Two lines`) — Avoid using two-line Titles. Use the truncated text with Tooltips whenever the title is too long.
  - Vertical Nav Height (`Navigation System/Vertical Nav Height`) — Maximize the space by extending the Panel as much as possible to avoid using scrolls.
  - … 33 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Notification

- Zeroheight page id: `8566365`
- Design blocks: 26
- UI Kit mapping: `packages/core/src/Snackbar`, `packages/core/src/Banner`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Variants, Usage, Related, Accessibility
  - Snackbar: Anatomy, Usage, Responsive
  - Banner: Anatomy, Usage, Dos and Don'ts
  - Notification Panel: Anatomy, Variants, Usage, Dos and Don'ts, Examples
- Design-block inventory preview:
  - Notification Banner | M, L, and XL (`Notification/Notification Banner | M, L, and XL`)
  - Notification Banner | S (`Notification/Notification Banner | S`)
  - Notification Banner | XS (`Notification/Notification Banner | XS`)
  - Snackbar Position (`Notification/Snackbar Position`)
  - Snackbar Maximum size (`Notification/Snackbar Maximum size`)
  - Snackbar Single Action (`Notification/Snackbar Single Action`)
  - Notification Hierarchy (`Notification/Notification Hierarchy`)
  - Snackbar Informational (`Notification/Snackbar Informational`)
  - … 31 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Pagination

- Zeroheight page id: `8566300`
- Design blocks: 10
- UI Kit mapping: `packages/core/src/Pagination`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Pagination: Anatomy, Usage, Dos and Don'ts, Examples, Related, Accessibility
  - Dot-Pagination: Anatomy, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Pagination | S (`Pagination/Prototype Template | Pagination | S`)
  - Prototype Template | Pagination | XS (`Pagination/Prototype Template | Pagination | XS`)
  - Prototype Template | Pagination | M, L, and XL (`Pagination/Prototype Template | Pagination | M, L, and XL`)
  - PAGINATION Usage Dont one page (`Pagination/PAGINATION Usage Dont one page`)
  - Usage Pagination Alignment (`Pagination/Usage Pagination Alignment`)
  - Usage Pagination Low Cardinality (`Pagination/Usage Pagination Low Cardinality`)
  - PAGINATION Numeric (`Pagination/PAGINATION Numeric/Small Screens=False`)
  - Prototype Template | Pagination Dot | S (`Pagination/Prototype Template | Pagination Dot | S`)
  - … 7 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Panel

- Zeroheight page id: `8566310`
- Design blocks: 4
- UI Kit mapping: `packages/core/src/Panel`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Dos and Don'ts, Related, Accessibility
- Design-block inventory preview:
  - Space DOs (`Panel/Space DOs`)
  - Usage Push Content Grid (`Panel/Usage Push Content Grid`)
  - Type Push Panel (`Panel/Type Push Panel`)
  - Type Overlap Panel (`Panel/Type Overlap Panel`)
  - Type Overlap Side Panel (`Panel/Type Overlap Side Panel`)
  - PANEL (`Panel/PANEL/Minimise=True, ↳ State=Open`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Query Builder

- Zeroheight page id: `8566361`
- Design blocks: 5
- UI Kit mapping: `packages/lab/src/QueryBuilder`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Query Builder | S (`Query Builder/Prototype Template | Query Builder | S`)
  - Prototype Template | Query Builder | XS (`Query Builder/Prototype Template | Query Builder | XS`)
  - Prototype Template | Query Builder | M, L, and XL (`Query Builder/Prototype Template | Query Builder | M, L, and XL`)
  - QB Empty State (`Query Builder/QB Empty State`)
  - .Condition Item (`Query Builder/.Condition Item/State=3rd Input`)
  - .Condition Item (`Query Builder/.Condition Item/State=1st Input`)
  - Query Builder Overview Anatomy (`Query Builder/Query Builder Overview Anatomy`)
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Restoring File Storage Configuration

- Zeroheight page id: `8566341`
- Design blocks: 2
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Illustration: —
  - Example: —
- Design-block inventory preview:
  - Restoring File Storage Configuration (`Restoring File Storage Configuration/Restoring File Storage Configuration`)
  - Restoring File Storage Configuration Option E (`Restoring File Storage Configuration/Restoring File Storage Configuration Option E`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Rich Text Editor

- Zeroheight page id: `8566376`
- Design blocks: 6
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Rich Text Editor | S (`Rich Text Editor/Prototype Template | Rich Text Editor | S`)
  - Prototype Template | Rich Text Editor | XS (`Rich Text Editor/Prototype Template | Rich Text Editor | XS`)
  - Prototype Template | Rich Text Editor | M, L, and XL (`Rich Text Editor/Prototype Template | Rich Text Editor | M, L, and XL`)
  - Rich Text Editor DO Formatting Option (`Rich Text Editor/Rich Text Editor DO Formatting Option`)
  - Active (`Rich Text Editor/Rich Text Editor DO Enabled/Active`)
  - RICH TEXT EDITOR (`Rich Text Editor/RICH TEXT EDITOR/State=Enabled`)
  - RICH TEXT EDITOR (`Rich Text Editor/RICH TEXT EDITOR/State=Hover`)
  - RICH TEXT EDITOR (`Rich Text Editor/RICH TEXT EDITOR/State=Focus`)
  - … 4 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Scroll To

- Zeroheight page id: `8566305`
- Design blocks: 12
- UI Kit mapping: `packages/core/src/ScrollToHorizontal`, `packages/core/src/ScrollToVertical`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Horizontal: Anatomy, States, Usage, Related, Accessibility
  - Vertical: Anatomy, States, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Scroll To | Horizontal Flow (`Scroll To/Scroll To | Horizontal Flow`)
  - Scroll To | Horizontal Overview (`Scroll To/Scroll To | Horizontal Overview`)
  - .Item Horizontal (`Scroll To/.Item Horizontal/Variant=Horizontal, State=Selected`)
  - .Item Horizontal (`Scroll To/.Item Horizontal/Variant=Horizontal, State=Enabled`)
  - .Item Horizontal (`Scroll To/.Item Horizontal/Variant=Horizontal, State=Hover`)
  - .Item Horizontal (`Scroll To/.Item Horizontal/Variant=Horizontal, State=Focus`)
  - SCROLL TO (`Scroll To/SCROLL TO/Type=Horizontal`)
  - Scroll To | S (`Scroll To/Scroll To | S`)
  - … 11 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Scrollbar

- Zeroheight page id: `8566311`
- Design blocks: 4
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Scrollbar | S (`Scrollbar/Prototype Template | Scrollbar | S`)
  - Prototype Template | Scrollbar | XS (`Scrollbar/Prototype Template | Scrollbar | XS`)
  - Prototype Template | Scrollbar | M, L, and XL (`Scrollbar/Prototype Template | Scrollbar | M, L, and XL`)
  - SCROLLBAR (`Scrollbar/SCROLLBAR/Variant=Vertical, Show=True`)
  - SCROLLBAR (`Scrollbar/SCROLLBAR/Variant=Horizontal, Show=True`)
  - Scrollbar Anatomy (`Scrollbar/Scrollbar Anatomy`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Search

- Zeroheight page id: `8566306`
- Design blocks: 8
- UI Kit mapping: `packages/core/src/SearchInput`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Search Box | S (`Search/Prototype Template | Search Box | S`)
  - Prototype Template | Search Box | XS (`Search/Prototype Template | Search Box | XS`)
  - Prototype Template | Search Box | M, L, and XL (`Search/Prototype Template | Search Box | M, L, and XL`)
  - Search Box Width Do (`Search/Search Box Width Do`)
  - Search Flow Dynamic (`Search/Search Flow Dynamic`)
  - Search Flow Basic (`Search/Search Flow Basic`)
  - Search Box Scoped (`Search/Search Box Scoped`)
  - Search Box Scoped Input Enabled (`Search/Search Box Scoped Input Enabled`)
  - … 13 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Section

- Zeroheight page id: `8566362`
- Design blocks: 8
- UI Kit mapping: `packages/core/src/Section`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Section | M, L, and XL (`Section/Section | M, L, and XL`)
  - Section | S (`Section/Section | S`)
  - Section | XS (`Section/Section | XS`)
  - SECTION | Don'ts (`Section/SECTION | Don'ts`)
  - SECTION | Do's (`Section/SECTION | Do's`)
  - DONT (`SECTION / DONT`)
  - DO (`SECTION / DO`)
  - Section distribution (`Section/Section distribution`)
  - … 3 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Selection

- Zeroheight page id: `8566307`
- Design blocks: 11
- UI Kit mapping: `packages/core/src/CheckBox`, `packages/core/src/Radio`, `packages/core/src/Switch`, `packages/core/src/SelectionList`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Variants, Usage, Related, Accessibility
  - Checkbox: States, Usage
  - Radio Button: States
  - Toggle Switch: Variants, States, Usage, Dos and Don'ts
- Design-block inventory preview:
  - Usage Selection List (`Selection/Usage Selection List`)
  - .Radio Button (`Selection/.Radio Button/Type=Unselected, State=Enabled`) — Use to limit the user’s choice to a single option.
  - .Checkbox (`Selection/.Checkbox/Type=Unselected, State=Enabled`) — Use to present options where the user can select any number.
  - .Toggle Switch (`Selection/.Toggle Switch/Active=False, State=Enabled, Style=No Icon`) — Use toggles for binary choices, such as enabling or disabling a feature.
  - Usage Selection Order Global Behavior (`Selection/Usage Selection Order Global Behavior`)
  - .Checkbox (`Selection/.Checkbox/Type=Unselected, State=Enabled`)
  - .Checkbox (`Selection/.Checkbox/Type=Unselected, State=Hover`)
  - .Checkbox (`Selection/.Checkbox/Type=Selected, State=Enabled`)
  - … 23 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Shortcuts

- Zeroheight page id: `8566316`
- Design blocks: 2
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Usage, Related, Accessibility
- Design-block inventory preview:
  - Shortcuts Type (`Shortcuts/Shortcuts Type`)
  - Shortcuts Overview (`Shortcuts/Shortcuts Overview`)
  - Tooltip (`Shortcuts/Shortcuts Type/Frame 1/Tooltip`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Skip Links

- Zeroheight page id: `8566318`
- Design blocks: 4
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Skip Links | M, L, and XL (`Skip Links/Prototype Template | Skip Links | M, L, and XL`)
  - Skip Links Usage Mapping (`Skip Links/Skip Links Usage Mapping`)
  - Skip Links Usage Header (`Skip Links/Skip Links Usage Header`)
  - SKIP LINKS (`Skip Links/SKIP LINKS`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Slider

- Zeroheight page id: `8566346`
- Design blocks: 6
- UI Kit mapping: `packages/core/src/Slider`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Related, Accessibility
- Design-block inventory preview:
  - 1 – 1 (`Slider / Usage / 1 – 1`)
  - SLIDER Range (`Slider ( ⚠️ deprecated)/Slider Usage Range/SLIDER Range`)
  - 1 (`Slider / Usage / 1 `)
  - .Bar (`Slider/.Bar/State=Disabled, Type=Basic`)
  - .Bar (`Slider/.Bar/State=Error, Type=Basic`)
  - .Line (`Slider/.Line/State=Enabled`)
  - .Line (`Slider/.Line/State=Hover`)
  - .Handle (`Slider/.Handle/State=Focus`)
  - … 4 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Solution Review

- Zeroheight page id: `8566326`
- Design blocks: 0
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Stepper

- Zeroheight page id: `8566347`
- Design blocks: 10
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, Related, Accessibility
  - Horizontal: States, Usage, Examples
  - Vertical: States, Usage, Examples
- Design-block inventory preview:
  - Prototype Template | Ver Stepper | S (`Stepper/Prototype Template | Ver Stepper | S`)
  - Prototype Template | Ver Stepper | XS (`Stepper/Prototype Template | Ver Stepper | XS`)
  - Prototype Template | Ver Stepper | M, L, and XL (`Stepper/Prototype Template | Ver Stepper | M, L, and XL`)
  - Stepper Vertical Spacing (`Stepper/Stepper Vertical Spacing`) — Description block must be 240px to 360px wide. Avoid using more than 3 lines of text. Resize the step indicator according to the description size, respecting the 16px spacing after the Description.
  - .Vertical Step Item (`Stepper/.Vertical Step Item/State=Completed`)
  - .Vertical Step Item (`Stepper/.Vertical Step Item/State=Upcoming`)
  - .Vertical Step Item (`Stepper/.Vertical Step Item/State=Upcoming Hover`)
  - .Vertical Step Item (`Stepper/.Vertical Step Item/State=Current`)
  - … 16 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Tab

- Zeroheight page id: `8566314`
- Design blocks: 9
- UI Kit mapping: `packages/core/src/Tabs`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Tab | S (`Tab/Prototype Template | Tab | S`)
  - Prototype Template | Tab | XS (`Tab/Prototype Template | Tab | XS`)
  - Prototype Template | Tab | M, L, and XL (`Tab/Prototype Template | Tab | M, L, and XL`)
  - Variants | Mix tab styles (`Tab/Variants | Mix tab styles`)
  - TITLE (`Title/TITLE/Container Title=False, Type=Tabs, Extra Options=False`)
  - TITLE (`Title/TITLE/Type=Title + 2nd  Row Tab`)
  - .Tab Item (`Tab/.Tab Item/State=Enabled, Size=◼︎Medium, Style=No Icon`) — This is the most commonly used layout for Tabs without Icons.
  - .Tab Item (`Tab/.Tab Item/State=Enabled, Size=◼︎Medium, Style=♦︎ Leading Icon`) — This is the most commonly used layout for Tabs with Icons.
  - … 10 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Table

- Zeroheight page id: `8566290`
- Design blocks: 25
- UI Kit mapping: `packages/core/src/Table`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Related, Accessibility
  - Comfortable Table: Comfortable Table
  - Balanced Table: Balanced Table
  - Compact Table: Compact Table
  - Edit & Filter: Edit, Filter
- Design-block inventory preview:
  - Table Overview | Filter Panel (`Table/Table Overview | Filter Panel`)
  - Table Overview | Filter Hidden (`Table/Table Overview | Filter Hidden`)
  - Table Overview | Filter Bar Active (`Table/Table Overview | Filter Bar Active`)
  - Table Edit Column Order Fix (`Table/Table Edit Column Order Fix`)
  - Table Overview | Edit Mandatory (`Table/Table Overview | Edit Mandatory`)
  - Example | Admin Activity (`Table/Example | Admin Activity`)
  - Table | Table 48 Comfortable (`Table/Table | Table 48 Comfortable`)
  - Example | Features Access (`Table/Example | Features Access`)
  - … 18 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Tag

- Zeroheight page id: `8566322`
- Design blocks: 25
- UI Kit mapping: `packages/core/src/Tag`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Related, Accessibility
  - Status Tag: Status, Dos and Don'ts, Examples
  - Categorical Tag: States, Usage, Dos and Don'ts, Examples
- Design-block inventory preview:
  - Prototype Template | Tag | S (`Tag/Prototype Template | Tag | S`)
  - Prototype Template | Tag | XS (`Tag/Prototype Template | Tag | XS`)
  - Prototype Template | Tag Status | M, L, and XL (`Tag/Prototype Template | Tag Status  | M, L, and XL`)
  - Status DON'T (`Tag/Status DON'T`)
  - Status DO (`Tag/Status DO`)
  - TAG STATUS Success (`Tag/TAG STATUS Success `) — Indicates a successful, completed, or desirable state to positively reinforce the user.
  - TAG STATUS Warning (`Tag/TAG STATUS Warning `) — Indicates that attention or action is needed, signalling a potential system change. An intermediate state.
  - TAG STATUS Error (`Tag/TAG STATUS Error `) — Indicates critical, time‑sensitive issues requiring attention; use only when truly necessary.
  - … 32 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Time Picker

- Zeroheight page id: `8566370`
- Design blocks: 7
- UI Kit mapping: `packages/core/src/TimePicker`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, States, Usage, Dos and Don'ts, Examples, Related, Accessibility
- Design-block inventory preview:
  - Time Picker Selected List time picker open (`Time Picker/Time Picker Selected List time picker open`)
  - Time Picker | Same type (`Time Picker/Time Picker | Same type`)
  - Time Picker | Change labels (`Time Picker/Time Picker | Change labels`)
  - Time Picker Usage Do Text Cursor (`Time Picker/Time Picker Usage Do Text Cursor`)
  - Time Picker Anatomy (`Time Picker/Time Picker Anatomy`)
  - Time Picker Anatomy (`Time Picker/Time Picker Anatomy`)
  - Time Picker | Responsive (`Time Picker/Time Picker | Responsive`)
  - TIME PICKER (`Time Picker/TIME PICKER/Open=False`)
  - … 4 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Title

- Zeroheight page id: `8566364`
- Design blocks: 3
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Title | S (`Title/Prototype Template | Title | S`)
  - Prototype Template | Title | XS (`Title/Prototype Template | Title | XS`)
  - TITLE (`Title/TITLE/Container Title=False, Type=Tabs, Extra Options=False`)
  - TITLE (`Title/TITLE/Type=Title + 2nd  Row Tab`)
  - TITLE (`Title/TITLE/Type=Title + Tabs`)
  - Title Anatomy (`Title/Title Anatomy`)
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Toolbar

- Zeroheight page id: `8566363`
- Design blocks: 9
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | Toolbar | S (`Toolbar/Prototype Template | Toolbar | S`)
  - Prototype Template | Toolbar | XS (`Toolbar/Prototype Template | Toolbar | XS`)
  - Prototype Template | Toolbar | M, L, and XL (`Toolbar/Prototype Template | Toolbar | M, L, and XL`)
  - Prototype Template | Toolbar 2 | M, L, and XL (`Toolbar/Prototype Template | Toolbar 2 | M, L, and XL`)
  - TOOLBAR Image Carousel (`Toolbar/TOOLBAR Image Carousel`)
  - TOOLBAR Low-cardinality (`Toolbar/TOOLBAR Low-cardinality`)
  - TOOLBAR Grouping (`Toolbar/TOOLBAR Grouping`)
  - Toolbar Usage Groups (`Toolbar/Toolbar Usage Groups`)
  - … 3 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Tooltip

- Zeroheight page id: `8566299`
- Design blocks: 8
- UI Kit mapping: `packages/core/src/Tooltip`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Examples, Accessibility
- Design-block inventory preview:
  - Tooltip Shared x-axis value (`Tooltip/Tooltip Shared x-axis value`) — Compares all lines at the same x-axis value, using a vertical line through their intersection. The Tooltip shows values for all data series at that point.
  - Tooltip Individual exploration (`Tooltip/Tooltip Individual exploration`) — The Tooltip appears above the selected data point and shows its exact value only for that line, hiding labels for other lines. Use it to examine a single data point or explore one line in detail.
  - Tooltip Dos 2 (`Tooltip/Tooltip Dos 2`)
  - Tooltip Donts 2 (`Tooltip/Tooltip Donts 2`)
  - Tooltip Donts 1 (`Tooltip/Tooltip Donts 1`)
  - Tooltip Dos 1 (`Tooltip/Tooltip Dos 1`)
  - Tooltip centering (`Tooltip/Tooltip centering`)
  - Tooltip micro-animation (`Tooltip/Tooltip micro-animation`)
  - … 2 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### Tree View

- Zeroheight page id: `8566349`
- Design blocks: 21
- UI Kit mapping: `packages/core/src/TreeView`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Dos and Don'ts, Examples, Related, Accessibility
  - Tree View Item: States, Usage
- Design-block inventory preview:
  - Usage | Chevron (`Tree View/Usage | Chevron`)
  - Usage | Leaf Item (`Tree View/Usage | Leaf Item`)
  - Usage | Selection Indicator (`Tree View/Usage | Selection Indicator`)
  - Usage | Preserved exploration (`Tree View/Usage | Preserved exploration`)
  - Usage | Select Expanded Branches (`Tree View/Usage | Select Expanded Branches`)
  - Usage | Select Expanded Branches 2 (`Tree View/Usage | Select Expanded Branches 2`)
  - Usage | Items without content (`Tree View/Usage | Items without content`)
  - .Item 32 (`Tree View/.Item 32/State=Enabled, Selected Child=False`)
  - … 20 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

### User Preferences

- Zeroheight page id: `8566377`
- Design blocks: 10
- UI Kit mapping: —
- Status: No direct UI Kit implementation found; decide whether to add, map to app pattern, or mark out of scope.
- Zeroheight sections:
  - Overview: Anatomy, Variants, States, Usage, Dos and Don'ts, Responsive, Examples, Related, Accessibility
- Design-block inventory preview:
  - Prototype Template | User Preferences | S (`User Preferences/Prototype Template | User Preferences | S`)
  - Prototype Template | User Preferences | XS (`User Preferences/Prototype Template | User Preferences | XS `)
  - Prototype Template | User Preferences | M, L, and XL (`User Preferences/Prototype Template | User Preferences | M, L, and XL`)
  - User Preferences Responsive (`User Preferences/User Preferences Responsive`)
  - User Prerences Log Off (`User Preferences/User Prerences Log Off`)
  - User Prerences Profile Image (`User Preferences/User Prerences Profile Image`)
  - User Preferences Panel Only (`User Preferences/User Preferences Panel Only`)
  - User Preferences Open Panels (`User Preferences/User Preferences Open Panels`)
  - … 5 more block versions
- Required audit actions:
  - Confirm whether this page should become a reusable UI Kit component, remain app-specific, or be documented as out of scope.
  - If reusable, create implementation issue after design/product confirmation.

### Wizard

- Zeroheight page id: `8566374`
- Design blocks: 9
- UI Kit mapping: `packages/lab/src/Wizard`
- Status: Implemented in UI Kit; needs Zeroheight state/spec diff.
- Zeroheight sections:
  - Overview: Anatomy, Usage, Examples, Related, Accessibility
  - Horizontal: —
  - Vertical: —
- Design-block inventory preview:
  - Wizard Hor Summary (`Wizard/Wizard Hor Summary`)
  - Wizard Hor Summary Open (`Wizard/Wizard Hor Summary Open`)
  - Hor Wizard | XS (`Wizard/Hor Wizard | XS`)
  - Hor Wizard | M, L, and XL (`Wizard/Hor Wizard | M, L, and XL`)
  - Hor Wizard | S (`Wizard/Hor Wizard | S`)
  - Wizard Feedback (`Wizard/Wizard Feedback`)
  - Hor Wizard | Mandatory Step | not filled (`Wizard/Hor Wizard | Mandatory Step | not filled `) — The Next Button starts in a Disabled state when there are mandatory fields to complete.
  - Hor Wizard | Mandatory Step | Last Step Filled (`Wizard/Hor Wizard | Mandatory Step | Last Step Filled`) — The Submit Button changes to a Primary Button when the Last Step is filled.
  - … 7 more block versions
- Required audit actions:
  - Compare anatomy/variants/states/usage/accessibility against the mapped implementation files.
  - Implement only values/states confirmed by Zeroheight; avoid portal-specific overrides.
  - Add or update stories/tests for changed variants/states.

## Foundation/resource pages handled separately

- \_\_\_cover (`8566393`)
- Collaboration (`8566327`)
- Contribute (`8566325`)
- Dawn Theme (`8566329`)
- Energy Theme (`8566338`)
- Guides (`8566334`)
- Icons (`8566343`)
- Layout (`8566345`)
- License (`8566390`)
- Migration (`8566340`)
- Server Setup (`8566336`)
- Starter Kit (`8566385`)
- Typography (`8566331`)
- Version 6.3 (`8566391`)
- We're Listening (`8566328`)
- Wicked Theme (`8566330`)
