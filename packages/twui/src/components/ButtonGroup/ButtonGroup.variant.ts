import { ButtonGroupTheme } from "./ButtonGroup";

const root = `
  TWUI-ButtonGroup-root inline-flex rounded-lg
  `;

const buttonRootAdd =
  "rounded-none border-r last-of-type:border-none first-of-type:rounded-l last-of-type:rounded-r";
const buttonRootRemove = "rounded outline-offset-2";

export const ButtonGroupVariants: ButtonGroupTheme = {
  default: {
    classes: {
      root: `${root}`,
      button: {
        root: {
          add: `${buttonRootAdd} border-primary-200`,
          remove: `${buttonRootRemove}`,
        },
      },
    },
  },
  light: {
    classes: {
      root: `${root}`,
      button: {
        root: {
          add: `${buttonRootAdd} border-primary-100`,
          remove: `${buttonRootRemove}`,
        },
      },
    },
  },
  outline: {
    classes: {
      root: `${root} border border-primary-600`,
      button: {
        root: {
          add: `${buttonRootAdd} border-primary-600`,
          remove: `${buttonRootRemove} border`,
        },
      },
    },
  },
  subtle: {
    classes: {
      root: `${root} border`,
      button: {
        root: {
          add: `${buttonRootAdd}`,
          remove: `${buttonRootRemove}`,
        },
      },
    },
  },
};
