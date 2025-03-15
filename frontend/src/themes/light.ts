import { type ThemeDefinition } from "vuetify";

export const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#fce38a",
    surface: "#fce38a",
    primary: "#02c39a",
    "primary-darken-1": "#028090",
    secondary: "#003459",
    // 'secondary-darken-1': '#018786',
    error: "#e80020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    mark: "#FFFF00",
  },
  variables: {
    texture:
      "repeating-linear-gradient(140deg, hsla(295,0%,82%,0.12) 0px,transparent 2px,hsla(295,0%,82%,0.12) 7px,transparent 9px,hsla(295,0%,82%,0.12) 14px),repeating-linear-gradient(38deg, hsla(295,0%,82%,0.12) 0px,transparent 2px,hsla(295,0%,82%,0.12) 7px,transparent 9px,hsla(295,0%,82%,0.12) 14px),repeating-linear-gradient(0deg, hsla(295,0%,82%,0.15) 0px, hsla(295,0%,82%,0.15) 0px,transparent 0px, transparent 1px,hsla(295,0%,82%,0.15) 1px, hsla(295,0%,82%,0.15) 4px,transparent 4px, transparent 5px,hsla(295,0%,82%,0.15) 5px, hsla(295,0%,82%,0.15) 8px),repeating-linear-gradient(90deg, hsla(295,0%,82%,0.15) 0px, hsla(295,0%,82%,0.15) 0px,transparent 0px, transparent 1px,hsla(295,0%,82%,0.15) 1px, hsla(295,0%,82%,0.15) 4px,transparent 4px, transparent 5px,hsla(295,0%,82%,0.15) 5px, hsla(295,0%,82%,0.15) 8px),linear-gradient(90deg, rgba(252,227,138, 0.58),rgba(252,227,138, 0.58))",
  },
};
