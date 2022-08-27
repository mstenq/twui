import { ButtonGroupTheme } from "./ButtonGroup";

const root = `
  TWUI-ButtonGroup-root inline-flex rounded-lg
  `;

export const ButtonGroupVariants: ButtonGroupTheme = {
  default: {
    classes: {
      root: `${root}`,
      button: {
        root: {
          add: "rounded-none border-r border-primary-200 last-of-type:border-none first-of-type:rounded-l last-of-type:rounded-r",
          remove: "rounded outline-offset-2",
        },
      },
    },
  },
  light: {
    classes: {
      root: `${root}`,
      button: {
        root: {
          add: "rounded-none border-r border-primary-100 last-of-type:border-none first-of-type:rounded-l last-of-type:rounded-r",
          remove: "rounded outline-offset-2",
        },
      },
    },
  },
  outline: {
    classes: {
      root: `${root} border border-primary-600`,
      button: {
        root: {
          add: "rounded-none border-r border-primary-600 last-of-type:border-none first-of-type:rounded-l last-of-type:rounded-r",
          remove: "rounded border outline-offset-2",
        },
      },
    },
  },
  subtle: {
    classes: {
      root: `${root} border`,
      button: {
        root: {
          add: "rounded-none border-r last-of-type:border-none first-of-type:rounded-l last-of-type:rounded-r",
          remove: "rounded",
        },
      },
    },
  },
};
