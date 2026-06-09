export type HvRadius = "none" | "base" | "round" | "large" | "full";

/** @experimental */
export interface HvThemeRadii extends Record<HvRadius, string> {}

export const radii: HvThemeRadii = {
  none: "0px",
  base: "2px",
  round: "8px",
  large: "8px",
  full: "9999px",
};
