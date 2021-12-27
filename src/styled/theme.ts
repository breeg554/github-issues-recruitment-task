export type ThemeType = typeof theme; // This is the type definition for my theme object.

export const theme = {
  colors: {
    core: {
      primary: "#24292F",
      secondary: "#166CD7",
      tertiary: "#6F7781",
    },
  },
  mediaQ: {
    sm: "@media(min-width: 576px)",
    md: "@media(min-width: 768px)",
    lg: "@media(min-width: 992px)",
    xl: "@media(min-width: 1200px)",
  },
};
