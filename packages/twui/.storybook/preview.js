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

// const zinc = Object.entries(colors.zinc).map(([key, value]) => ({
//   name: `zinc-${key}`,
//   value,
// }));
// const slate = Object.entries(colors.slate).map(([key, value]) => ({
//   name: `slate-${key}`,
//   value,
// }));
// const gray = Object.entries(colors.gray).map(([key, value]) => ({
//   name: `gray-${key}`,
//   value,
// }));
// const neutral = Object.entries(colors.neutral).map(([key, value]) => ({
//   name: `neutral-${key}`,
//   value,
// }));
// const stone = Object.entries(colors.stone).map(([key, value]) => ({
//   name: `stone-${key}`,
//   value,
// }));

// const backgrounds = [...zinc, ...slate, ...gray, ...neutral, ...stone];

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
