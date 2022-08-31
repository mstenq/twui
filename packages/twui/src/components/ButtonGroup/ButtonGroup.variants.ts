import { ButtonGroupTheme } from "./ButtonGroup";

const root = `
  TWUI-ButtonGroup-root inline-flex rounded is-vertical:flex-col
  `;

const buttonRootAdd = `rounded-none outline-none dark:border-white/10 focus:ring-[2px] 
  is-horizontal:border-x is-vertical:border-y 
  is-horizontal:first-of-type:border-none is-horizontal:last-of-type:border-none is-horizontal:last-of-type:rounded-r is-horizontal:first-of-type:rounded-l 
  is-vertical:first-of-type:border-none is-vertical:last-of-type:border-none is-vertical:last-of-type:rounded-b is-vertical:first-of-type:rounded-t   
  w-full flex align-center`;

const buttonRootRemove =
  "rounded focus:outline outline-offset-2 outline-primary-600 focus:dark:border-primary-600";

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
      root: `${root} bg-primary-300`,
      button: {
        root: {
          add: `${buttonRootAdd} border-primary-400 ring-primary-600 focus:border-transparent ring-offset-1`,
          remove: `${buttonRootRemove}`,
          ...adornmentOverride,
        },
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd} border-primary-400 ring-primary-600 focus:border-transparent ring-offset-1`,
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
          add: `${buttonRootAdd} border-primary-200 ring-primary-600 focus:border-transparent focus:dark:border-transparent`,
          remove: `${buttonRootRemove}`,
        },
        ...adornmentOverride,
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd} border-primary-200 ring-primary-600 focus:border-transparent`,
          remove: `${buttonRootRemove}`,
        },
      },
    },
  },
  outline: {
    classes: {
      root: `${root} border-2 border-primary-600 dark:border-primary-300`,
      button: {
        root: {
          add: `${buttonRootAdd} border-primary-600 ring-primary-600 focus:border-transparent focus:bg-primary-50 focus:dark:bg-white/10 ring-offset-1 ring-offset-primary-50 dark:ring-offset-white/10 dark:border-primary-300 focus:dark:border-transparent`,
          remove: `${buttonRootRemove} border`,
        },
        ...adornmentOverride,
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd} border-primary-600 ring-primary-600 focus:border-transparent focus:bg-primary-50 focus:dark:bg-white/10 ring-offset-1 ring-offset-primary-50 dark:ring-offset-white/10 dark:border-primary-300 focus:dark:border-transparent`,
          remove: `${buttonRootRemove} border`,
        },
      },
    },
  },
  subtle: {
    classes: {
      root: `${root} border-2 dark:border-white/10`,
      button: {
        root: {
          add: `${buttonRootAdd} ring-primary-600 dark:border-white/10`,
          remove: `${buttonRootRemove}`,
        },
        ...adornmentOverride,
      },
      iconButton: {
        root: {
          add: `${buttonRootAdd} ring-primary-600`,
          remove: `${buttonRootRemove}`,
        },
      },
    },
  },
};
