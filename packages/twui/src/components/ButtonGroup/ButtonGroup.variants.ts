import { ButtonGroupTheme } from "./ButtonGroup";

const root = `
  TWUI-ButtonGroup-root inline-flex rounded-lg overflow-hidden
  `;

const buttonRootAdd =
  "rounded-none border-r last-of-type:border-none first-of-type:rounded-l last-of-type:rounded-r";
const buttonRootRemove = "rounded outline-offset-2";

const adornmentOverride = {
  startAdornment: {
    root: { add: "-ml-1", remove: "px-2" },
  },
  endAdornment: {
    root: { add: "-mr-1", remove: "px-2" },
  },
};

export const ButtonGroupVariants: ButtonGroupTheme = {
  default: {
    classes: {
      root: `${root}`,
      button: {
        root: {
          add: `${buttonRootAdd} border-primary-400`,
          remove: `${buttonRootRemove}`,
          ...adornmentOverride,
        },
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd} border-primary-400`,
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
          add: `${buttonRootAdd} border-primary-200`,
          remove: `${buttonRootRemove}`,
        },
        ...adornmentOverride,
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd} border-primary-200`,
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
        ...adornmentOverride,
      },
      iconButton: {
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
        ...adornmentOverride,
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd}`,
          remove: `${buttonRootRemove}`,
        },
      },
    },
  },
};
