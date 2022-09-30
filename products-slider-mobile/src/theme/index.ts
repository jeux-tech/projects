import colors from "./colors";
import shadows from "./shadows";

const breaks = { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 };

export default {
  colors,
  breakpoints: {
    ...breaks,
    down: (breakpoint: keyof typeof breaks) =>
      `@media (max-width:${breaks[breakpoint]}px)`,
    up: (breakpoint: keyof typeof breaks) =>
      `@media (min-width:${breaks[breakpoint]}px)`,
  },
  fontSizes: {
    h1: 56,
    h2: 48,
    h3: 40,
    h4: 32,
    h5: 24,
    h6: 20,
    p: 16,
    span: 14,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  spacing: (
    factor1?: number,
    factor2?: number,
    factor3?: number,
    factor4?: number
  ) => {
    const unit = 4;
    const factors = [factor1, factor2, factor3, factor4];
    return factors.map((factor) => factor && `${factor * unit}px`).join(" ");
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "inherit",
    monospace: "Menlo, monospace",
  },
  borderRadius: {
    sm: "6px",
    md: "8px",
    lg: "12px",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows,
  size: {
    headerHeight: 90,
    footerHeight: 60,
    sidebarWidth: 300,
    sidebarCollapsedWidth: 60,
    sidebarCollapsedWidthMobile: 60,
    containerMaxWidth: 1200,
  },
  variants: {},
  text: {},
};
