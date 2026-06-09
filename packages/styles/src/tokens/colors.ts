import type { Property } from "csstype";

import { ds5Colors as dsColors, getColors, oldVizColors } from "./colorsCompat";

type SemanticTypes =
  | "primary"
  | "accent"
  | "positive"
  | "warning"
  | "negative"
  | "info";

type SemanticKeys<Prefix extends string> =
  | `${Prefix}`
  | `${Prefix}Strong`
  | `${Prefix}Dimmed`
  | `${Prefix}Subtle`
  | `${Prefix}Deep`;
// 🔎: border tokens don't exist for "primary"

type VizKeys = `cat${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`;

export interface HvColorTokens
  extends Record<SemanticKeys<SemanticTypes>, string>, Record<VizKeys, string> {
  // #region semantic
  // 🔎: border tokens don't exist for "primary"
  accentBorder: string;
  positiveBorder: string;
  warningBorder: string;
  negativeBorder: string;
  infoBorder: string;
  // #endregion

  // #region text
  /** primary text color */
  text: string;
  /** secondary text color */
  textSubtle: string;
  /** disabled text color */
  textDisabled: string;
  /** dimmed text, close to the bgColor, used for contrasting with semantic backgrounds */
  textDimmed: string;
  /** light-only text */
  textLight: string;
  /** dark-only text */
  textDark: string;
  /** link text color */
  textLink: string;
  /** link text color on hover */
  textLinkHover: string;
  /** highlighted text background color */
  textHighlight: string;
  /** annotation text color */
  textAnnotation: string;
  // #endregion

  // #region borders
  border: string;
  borderSubtle: string;
  borderStrong: string;
  borderDisabled: string;
  /** focus border/outline color */
  borderFocus: string;
  /** focus halo color */
  focus: string;
  // #endregion

  // #region backgrounds
  /** default page background */
  bgPage: string;
  /** secondary page background (also for :active action). */ // 🔎 weird use-cases?
  bgPageSecondary: string;
  /** default surface background for containers */
  bgContainer: string;
  /** secondary surface background for containers */
  bgContainerSecondary: string;
  /** background for :hover actions */
  bgHover: string;
  /** background for disabled elements */
  bgDisabled: string;
  /** overlay background (for Dialog, dropdowns, etc.) */
  bgOverlay: string;
  /** primary interactive background */
  bgInteractive: string;
  /** secondary interactive background */
  bgSecondaryInteractive: string;
  /** color to use for opacity */
  dimmer: string;
  // #endregion

  // #region others
  /** shadow color */
  shad1: string;
  /** box shadow */
  shadow: string;
  /** product brand color */
  brand: string;
  /** product brand text color */
  brandText: string;
  // #endregion
}

const base = {
  /** @deprecated use `textLight` instead */
  base_light: "#FBFCFC",
  /** @deprecated use `textDark` instead */
  base_dark: "#222222",
};

const categorical = {
  cat1: "#5B78BE",
  cat2: "#CE6F1D",
  cat3: "#5F903C",
  cat4: "#984020",
  cat5: "#404B8C",
  cat6: "#A98F0F",
  cat7: "#257F9D",
  cat8: "#7B4B6B",
  cat9: "#BE8546",
  cat10: "#5F3DA4",
  cat11: "#CD5A6E",
  cat12: "#328871",
};

const categoricalDark = {
  cat1: "#BFCDED",
  cat2: "#E8AF7D",
  cat3: "#A3C78A",
  cat4: "#D98768",
  cat5: "#A6A9C3",
  cat6: "#F0E29E",
  cat7: "#85D0EA",
  cat8: "#D1AFC6",
  cat9: "#F5D5A1",
  cat10: "#A38DCE",
  cat11: "#E7BBC3",
  cat12: "#A9D3C7",
};

const common = {
  ...base,
  ...categorical,
  ...oldVizColors,
} satisfies Partial<HvColorTokens>;

// #region Light palette
const light = {
  ...getColors(dsColors, "light"),

  primary: dsColors.primary[0],
  primaryDeep: dsColors.primary_80[0],
  primaryStrong: dsColors.primary_80[0],
  primarySubtle: dsColors.primary_20[0],
  primaryDimmed: dsColors.primary_20[0],
  positive: dsColors.positive[0],
  positiveDeep: dsColors.positive_120[0],
  positiveStrong: dsColors.positive_80[0],
  positiveDimmed: dsColors.positive_20[0],
  positiveSubtle: dsColors.positive_20[0],
  positiveBorder: dsColors.positive_20[0],
  warning: dsColors.warning[0],
  warningDeep: dsColors.warning_140[0],
  warningStrong: dsColors.warning_120[0],
  warningDimmed: dsColors.warning_20[0],
  warningSubtle: dsColors.warning_20[0],
  warningBorder: dsColors.warning_20[0],
  negative: dsColors.negative[0],
  negativeDeep: dsColors.negative_120[0],
  negativeStrong: dsColors.negative_80[0],
  negativeDimmed: dsColors.negative_20[0],
  negativeSubtle: dsColors.negative_20[0],
  negativeBorder: dsColors.negative_20[0],
  info: dsColors.informative[0],
  infoDeep: dsColors.cat1_140,
  infoStrong: dsColors.cat1_140,
  infoDimmed: dsColors.informative_20[0],
  infoSubtle: dsColors.informative_20[0],
  infoBorder: dsColors.informative_20[0],
  accent: dsColors.link[0],
  accentDeep: dsColors.link[0],
  accentStrong: dsColors.link_hover[0],
  accentSubtle: dsColors.interactive_primary[0],
  accentDimmed: dsColors.interactive_primary[0],
  accentBorder: dsColors.cat1_60,

  text: dsColors.primary[0],
  textSubtle: dsColors.secondary_80[0],
  textDisabled: dsColors.secondary_60[0],
  textDimmed: dsColors.atmo1[0],
  textLight: base.base_light,
  textDark: base.base_dark,
  textLink: dsColors.link[0],
  textLinkHover: dsColors.link_hover[0],
  textHighlight: dsColors.text_highlight[0],
  textAnnotation: "#FF00FF",

  border: dsColors.atmo4[0],
  borderSubtle: dsColors.atmo3[0],
  borderStrong: dsColors.hover_border[0],
  borderDisabled: dsColors.secondary_60[0],
  borderFocus: dsColors.cat1_140,
  focus: dsColors.focus[0],

  bgPage: dsColors.atmo0[0],
  bgContainer: dsColors.atmo2[0],
  bgPageSecondary: dsColors.atmo1[0],
  bgContainerSecondary: dsColors.atmo1[0],
  bgHover: dsColors.hover_container[0],
  bgDisabled: dsColors.atmo3[0],
  bgOverlay: dsColors.overlay[0],
  bgInteractive: dsColors.interactive_primary[0],
  bgSecondaryInteractive: dsColors.cat3_20,
  dimmer: "#FFFFFF",

  shad1: "rgba(65, 65, 65, 0.12)",
  shadow: "0 2px 12px rgba(34, 34, 34, 0.12)",
  brand: dsColors.brand[0],
  brandText: dsColors.brand_text[0],

  ...categorical,
} satisfies HvColorTokens & Record<string, string>;
// #endregion

// #region Dark palette
const dark = {
  ...getColors(dsColors, "dark"),

  primary: dsColors.primary[1],
  primaryDeep: dsColors.primary_80[1],
  primaryStrong: dsColors.primary_80[1],
  primarySubtle: dsColors.primary_20[1],
  primaryDimmed: dsColors.primary_20[1],
  positive: dsColors.positive[1],
  positiveDeep: dsColors.positive_120[1],
  positiveStrong: dsColors.positive_80[1],
  positiveDimmed: dsColors.positive_20[1],
  positiveSubtle: dsColors.positive_20[1],
  positiveBorder: dsColors.positive_20[1],
  warning: dsColors.warning[1],
  warningDeep: dsColors.warning_140[1],
  warningStrong: dsColors.warning_120[1],
  warningDimmed: dsColors.warning_20[1],
  warningSubtle: dsColors.warning_20[1],
  warningBorder: dsColors.warning_20[1],
  negative: dsColors.negative[1],
  negativeDeep: dsColors.negative_120[1],
  negativeStrong: dsColors.negative_80[1],
  negativeDimmed: dsColors.negative_20[1],
  negativeSubtle: dsColors.negative_20[1],
  negativeBorder: dsColors.negative_20[1],
  info: dsColors.neutral[1],
  infoDeep: dsColors.neutral[1],
  infoStrong: dsColors.neutral[1],
  infoDimmed: dsColors.informative_20[1],
  infoSubtle: dsColors.informative_20[1],
  infoBorder: dsColors.informative_20[1],
  accent: dsColors.link[1],
  accentDeep: dsColors.link[1],
  accentStrong: dsColors.link_hover[1],
  accentSubtle: dsColors.interactive_primary[1],
  accentDimmed: dsColors.interactive_primary[1],
  accentBorder: dsColors.cat1_60,

  text: dsColors.secondary[1],
  textSubtle: dsColors.secondary_80[1],
  textDisabled: dsColors.secondary_60[1],
  textDimmed: dsColors.atmo1[1],
  textLight: base.base_light,
  textDark: base.base_dark,
  textLink: dsColors.link[1],
  textLinkHover: dsColors.link_hover[1],
  textHighlight: dsColors.text_highlight[1],
  textAnnotation: "#FF00FF",

  border: dsColors.atmo4[1],
  borderSubtle: dsColors.atmo3[1],
  borderStrong: dsColors.hover_border[1],
  borderDisabled: dsColors.secondary_60[1],
  borderFocus: dsColors.cat1_140,
  focus: dsColors.focus[1],

  bgPage: dsColors.atmo0[1],
  bgContainer: dsColors.atmo2[1],
  bgPageSecondary: dsColors.atmo1[1],
  bgContainerSecondary: dsColors.atmo1[1],
  bgHover: dsColors.hover_container[1],
  bgDisabled: dsColors.atmo3[1],
  bgOverlay: dsColors.overlay[1],
  bgInteractive: dsColors.interactive_primary[1],
  bgSecondaryInteractive: dsColors.cat3_20,
  dimmer: "#000000",

  shad1: "rgba(0,0,0,.16)",
  shadow: "0 3px 5px rgba(0,0,0,.16)",
  brand: dsColors.brand[1],
  brandText: dsColors.brand_text[1],

  ...categoricalDark,
} satisfies HvColorTokens & Record<string, string>;
// #endregion

export const colors = {
  common,
  light,
  dark,
};

/** @deprecated replace with standard UI Kit ColorTokens in v6 */
type AllColors = typeof colors.common & typeof colors.light;

/** @experimental extendable theme colors */
export interface HvThemeColors extends HvColorTokens, AllColors {}

/** A type with all the accepted colors from the color palette */
export type HvColor = keyof HvThemeColors;

/**
 * A type representing an `HvColor` from the palette or any other color string
 * @example "primary" "bgPage" "#FF0000" "purple" "inherit"
 * */
export type HvColorAny = HvColor | Property.Color;
