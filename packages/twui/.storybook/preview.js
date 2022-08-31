import { themes } from "@storybook/theming";
import "../dist/tkit.css";
const colors = require("tailwindcss/colors");

const backgrounds = [];
Object.entries(colors).forEach(([color, values]) => {
  Object.entries(values).forEach(([key, value]) => {
    backgrounds.push({
      name: `${color}-${key}`,
      value,
    });
  });
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "twitter",
    values: backgrounds,
  },
  darkMode: {
    stylePreview: true,
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black", content: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "white" },
  },
};
