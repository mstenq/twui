import { ButtonGroupTheme } from "./ButtonGroup";

const root = `
  TWUI-ButtonGroup-root bg-primary-600 text-white p-6 rounded
  `;

export const ButtonGroupVariants: ButtonGroupTheme = {
  default: {
    classes: {
      root: `${root}`,
    },
  },
};
