import { ButtonGroupTheme } from "./ButtonGroup";

const root = `
  TWUI-ButtonGroup-root inline-flex rounded 
  `;

const buttonRootAdd = `-mt-px rounded-none border-r outline-offset-[-2px] outline-[3px]
  last-of-type:border-none last-of-type:rounded-r
  first-of-type:rounded-l`;

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
          add: `${buttonRootAdd} border-primary-400 outline-primary-900`,
          remove: `${buttonRootRemove}`,
          ...adornmentOverride,
        },
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd} border-primary-400 outline-primary-900`,
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
