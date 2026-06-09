import { makeColors, makeTheme } from "../makeTheme";

const next = makeTheme((theme) => ({
  name: "next",
  colors: makeColors({}),
  typography: {
    display: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.xl4,
      lineHeight: "56px",
      letterSpacing: "0px",
    },
    title1: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.xl3,
      lineHeight: theme.lineHeights.xl3,
      letterSpacing: "0px",
    },
    title2: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.xl2,
      lineHeight: theme.lineHeights.xl2,
      letterSpacing: "0px",
    },
    title3: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.xl,
      lineHeight: theme.lineHeights.xl,
      letterSpacing: "0px",
    },
    title4: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.bold,
      fontSize: theme.fontSizes.lg,
      lineHeight: theme.lineHeights.lg,
      letterSpacing: "0px",
    },
    label: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.base,
      lineHeight: theme.lineHeights.base,
      letterSpacing: "0px",
    },
    body: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.base,
      lineHeight: theme.lineHeights.lg,
      letterSpacing: "0px",
    },
    captionLabel: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.semibold,
      fontSize: theme.fontSizes.sm,
      lineHeight: theme.lineHeights.sm,
      letterSpacing: "0px",
    },
    caption1: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.sm,
      lineHeight: "20px",
      letterSpacing: "0px",
    },
    caption2: {
      color: theme.colors.text,
      fontWeight: theme.fontWeights.normal,
      fontSize: theme.fontSizes.xs,
      lineHeight: "12px",
      letterSpacing: "0px",
    },
  },
  header: {
    height: "64px",
    secondLevelHeight: "56px",
  },
  form: {
    errorColor: theme.colors.negative_120,
  },
  snackbar: {
    actionButtonVariant: "semantic",
  },

  bulkActions: {
    actionButtonVariant: "primaryGhost",
  },
  stepNavigation: {
    separatorMargin: "4px",
    defaultSeparatorHeight: 1,
    simpleSeparatorHeight: 1,
  },
  filterGroup: {
    applyButtonVariant: "primary",
    cancelButtonVariant: "secondarySubtle",
  },
  colorPicker: {
    hueDirection: "horizontal",
  },
}));

export default next;
