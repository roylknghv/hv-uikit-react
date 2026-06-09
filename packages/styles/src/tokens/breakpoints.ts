export type HvBreakpoints = "xs" | "sm" | "md" | "lg" | "xl";

/** @experimental extendable theme breakpoints */
export interface HvThemeBreakpoints {
  unit: string;
  step: number;
  values: Record<HvBreakpoints, number>;
}

export const breakpoints = {
  unit: "px",
  step: 5,
  values: {
    xs: 0,
    sm: 480,
    md: 810,
    lg: 1024,
    xl: 1440,
  },
} satisfies HvThemeBreakpoints;
