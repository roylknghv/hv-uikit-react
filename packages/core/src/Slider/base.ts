import type { CSSInterpolation } from "@emotion/serialize";
import { theme } from "@hitachivantara/uikit-styles";

export default {
  "& .rc-slider": {
    position: "relative",
    width: "100%",
    height: "14px",
    padding: " 5px 0",
    touchAction: "none",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  },
  "& .rc-slider *": {
    boxSizing: "border-box",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  },
  "& .rc-slider-rail": {
    position: "absolute",
    width: "100%",
    height: "4px",
    backgroundColor: theme.colors.border,
  },
  "& .rc-slider-track": {
    position: "absolute",
    height: "4px",
    backgroundColor: theme.colors.borderStrong,
  },
  "& .rc-slider-handle": {
    position: "absolute",
    width: "14px",
    height: "14px",
    marginTop: "-5px",
    backgroundColor: theme.colors.bgPage,
    border: `solid 2px ${theme.colors.borderFocus}`,
    borderRadius: theme.radii.full,
    cursor: "grab",
    opacity: 0.8,
    touchAction: "pan-x",
  },
  "& .rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging":
    {
      borderColor: theme.colors.borderStrong,
      boxShadow: `0 0 0 5px ${theme.colors.focus}`,
    },
  "& .rc-slider-handle:focus": {
    outline: "none",
    boxShadow: "none",
  },
  "& .rc-slider-handle:focus-visible": {
    borderColor: theme.colors.borderFocus,
    boxShadow: `0 0 0 3px ${theme.colors.focus}`,
  },
  "& .rc-slider-handle-click-focused:focus": {
    borderColor: theme.colors.borderFocus,
    boxShadow: "unset",
  },
  "& .rc-slider-handle:hover": {
    borderColor: theme.colors.borderStrong,
  },
  "& .rc-slider-handle:active": {
    borderColor: theme.colors.borderStrong,
    boxShadow: `0 0 5px ${theme.colors.focus}`,
    cursor: "grabbing",
  },
  "& .rc-slider-mark": {
    position: "absolute",
    top: "18px",
    left: 0,
    width: "100%",
    fontSize: "12px",
  },
  "& .rc-slider-mark-text": {
    position: "absolute",
    display: "inline-block",
    color: theme.colors.textDisabled,
    textAlign: "center",
    verticalAlign: "middle",
    cursor: "pointer",
  },
  "& .rc-slider-mark-text-active": {
    color: theme.colors.textSubtle,
  },
  "& .rc-slider-step": {
    position: "absolute",
    width: "100%",
    height: "4px",
    background: "transparent",
    pointerEvents: "none",
  },
  "& .rc-slider-dot": {
    position: "absolute",
    bottom: "-2px",
    width: "8px",
    height: "8px",
    verticalAlign: "middle",
    backgroundColor: theme.colors.bgPage,
    border: `2px solid ${theme.colors.border}`,
    borderRadius: theme.radii.full,
    cursor: "pointer",
  },
  "& .rc-slider-dot-active": {
    borderColor: theme.colors.borderFocus,
  },
  "& .rc-slider-dot-reverse": {
    marginRight: "-4px",
  },
  "& .rc-slider-disabled": {
    backgroundColor: theme.colors.bgDisabled,
  },
  "& .rc-slider-disabled .rc-slider-track": {
    backgroundColor: theme.colors.borderDisabled,
  },
  "& .rc-slider-disabled .rc-slider-handle": {
    backgroundColor: theme.colors.bgPage,
    borderColor: theme.colors.borderDisabled,
    boxShadow: "none",
    cursor: "not-allowed",
  },
  "&.rc-slider-disabled .rc-slider-dot": {
    backgroundColor: theme.colors.bgPage,
    borderColor: theme.colors.borderDisabled,
    boxShadow: "none",
    cursor: "not-allowed",
  },
  "& .rc-slider-disabled .rc-slider-mark-text": {
    cursor: "not-allowed !important",
  },
  "& .rc-slider-disabled .rc-slider-dot": {
    cursor: "not-allowed !important",
  },
  "& .rc-slider-vertical": {
    width: "14px",
    height: "100%",
    padding: "0 5px",
  },
  "& .rc-slider-vertical .rc-slider-rail": {
    width: "4px",
    height: "100%",
  },
  "& .rc-slider-vertical .rc-slider-track": {
    bottom: 0,
    left: "5px",
    width: "4px",
  },
  "& .rc-slider-vertical .rc-slider-handle": {
    marginTop: 0,
    marginLeft: "-5px",
    touchAction: "pan-y",
  },
  "& .rc-slider-vertical .rc-slider-mark": {
    top: 0,
    left: "18px",
    height: "100%",
  },
  "& .rc-slider-vertical .rc-slider-step": {
    width: "4px",
    height: "100%",
  },
  "& .rc-slider-vertical .rc-slider-dot": {
    marginLeft: "-2px",
  },
  "& .rc-slider-tooltip-zoom-down-enter": {
    display: "block !important",
    animationDuration: "0.3s",
    animationFillMode: "both",
    animationPlayState: "paused",
    transform: "scale(0, 0)",
    animationTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
  },
  "& .rc-slider-tooltip-zoom-down-appear": {
    display: "block !important",
    animationDuration: "0.3s",
    animationFillMode: "both",
    animationPlayState: "paused",
  },
  "& .rc-slider-tooltip-zoom-down-leave": {
    display: "block !important",
    animationDuration: "0.3s",
    animationFillMode: "both",
    animationPlayState: "paused",
    animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  },
  "& .rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active":
    {
      animationName: "rcSliderTooltipZoomDownIn",
      animationPlayState: "running",
    },
  "& .rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active":
    {
      animationName: "rcSliderTooltipZoomDownIn",
      animationPlayState: "running",
    },
  "& .rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active":
    {
      animationName: "rcSliderTooltipZoomDownOut",
      animationPlayState: "running",
    },
  "&. .rc-slider-tooltip-zoom-down-appear": {
    transform: "scale(0, 0)",
    animationTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
  },
  "& .rc-slider-tooltip": {
    position: "absolute",
    top: "-9999px",
    left: "-9999px",
    visibility: "visible",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  },
  "& .rc-slider-tooltip *": {
    boxSizing: "border-box",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  },
  "& .rc-slider-tooltip-hidden": {
    display: "none",
  },
  "& .rc-slider-tooltip-placement-top": {
    padding: "4px 0 8px 0",
  },
  "& .rc-slider-tooltip-inner": {
    minWidth: "24px",
    height: "24px",
    padding: "6px 2px",
    color: theme.colors.textLight,
    fontSize: "12px",
    lineHeight: 1,
    textAlign: "center",
    textDecoration: "none",
    backgroundColor: theme.colors.textSubtle,
    borderRadius: theme.radii.round,
    boxShadow: `0 0 4px ${theme.colors.border}`,
  },
  "& .rc-slider-tooltip-arrow": {
    position: "absolute",
    width: 0,
    height: 0,
    borderColor: "transparent",
    borderStyle: "solid",
  },
  "& .rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow": {
    bottom: "4px",
    left: "50%",
    marginLeft: "-4px",
    borderWidth: "4px 4px 0",
    borderTopColor: theme.colors.textSubtle,
  },
} satisfies CSSInterpolation;
