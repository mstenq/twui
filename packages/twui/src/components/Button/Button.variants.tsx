import { ButtonTheme } from "./Button";

const root = `
  TWUI-Button-root
  rounded py-2 px-4
  is-xl:text-xl is-xl:py-3 is-xl:px-6
  is-lg:text-lg
  is-sm:text-sm is-sm:py-1.5
  is-xs:text-xs is-xs:py-0.5 is-xs:px-1.5
  `;

export const ButtonVariants: ButtonTheme = {
  default: {
    classes: {
      root: `${root} bg-primary-600 text-white hover:bg-primary-700`,
    },
  },
  light: {
    classes: {
      root: `${root} bg-primary-200/40 text-primary-600 hover:bg-primary-200/60`,
    },
  },
  outline: {
    classes: {
      root: `${root} border border-primary-600 text-primary-600 hover:bg-primary-50`,
    },
  },
  text: {
    classes: {
      root: `${root} text-primary-600`,
    },
  },
};
