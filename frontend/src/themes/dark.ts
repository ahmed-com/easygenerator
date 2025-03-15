import { type ThemeDefinition } from "vuetify";

export const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    primary: "#6200EE",
    "primary-darken-1": "#3700B3",
    secondary: "#03DAC6",
    "secondary-darken-1": "#018786",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    mark: "#FFD600",
  },
  variables: {
    texture:
      "repeating-linear-gradient(140deg, hsla(295,0%,82%,0.12) 0px,transparent 2px,hsla(295,0%,82%,0.12) 7px,transparent 9px,hsla(295,0%,82%,0.12) 14px),repeating-linear-gradient(38deg, hsla(295,0%,82%,0.12) 0px,transparent 2px,hsla(295,0%,82%,0.12) 7px,transparent 9px,hsla(295,0%,82%,0.12) 14px),repeating-linear-gradient(0deg, hsla(295,0%,82%,0.15) 0px, hsla(295,0%,82%,0.15) 0px,transparent 0px, transparent 1px,hsla(295,0%,82%,0.15) 1px, hsla(295,0%,82%,0.15) 4px,transparent 4px, transparent 5px,hsla(295,0%,82%,0.15) 5px, hsla(295,0%,82%,0.15) 8px),repeating-linear-gradient(90deg, hsla(295,0%,82%,0.15) 0px, hsla(295,0%,82%,0.15) 0px,transparent 0px, transparent 1px,hsla(295,0%,82%,0.15) 1px, hsla(295,0%,82%,0.15) 4px,transparent 4px, transparent 5px,hsla(295,0%,82%,0.15) 5px, hsla(295,0%,82%,0.15) 8px),linear-gradient(90deg, rgb(17,17,17),rgb(17,17,17))",
  },
};
