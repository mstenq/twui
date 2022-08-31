import { IconButtonTheme } from "./IconButton";

const root = `
  TWUI-IconButton-root
  rounded transition-all duration-150 focus:outline outline-primary-600 outline-offset-2 outline-2
  is-disabled:opacity-50 is-disabled:cursor-not-allowed 
  active:translate-y-px is-vertical:w-full
  `;

const svg = `
  TWUI-IconButton-svg
  mx-auto
  is-xl:w-12 is-xl:h-12 is-xl:p-3
  is-lg:w-10 is-lg:h-10 is-lg:p-2
  is-md:w-10 is-md:h-10 is-md:p-2
  is-sm:w-8 is-sm:h-8 is-sm:p-1.5
  is-xs:w-6 is-xs:h-6 is-xs:p-1
  `;

export const IconButtonVariants: IconButtonTheme = {
  default: {
    classes: {
      root: `${root} bg-primary-600 text-white hover:bg-primary-700 hover:shadow`,
      svg: `${svg}`,
    },
  },
  light: {
    classes: {
      root: `${root} bg-primary-200/30 text-primary-600 hover:bg-primary-200/60 dark:bg-primary-600/10 dark:text-primary-300 hover:dark:bg-primary-600/20`,
      svg: `${svg}`,
    },
  },
  outline: {
    classes: {
      root: `${root} border-2 border-primary-600 text-primary-600 hover:bg-primary-100 dark:text-primary-300 hover:dark:bg-primary-600/20 dark:border-primary-300 focus:dark:border-primary-600`,
      svg: `${svg}`,
    },
  },
  subtle: {
    classes: {
      root: `${root} text-primary-600 hover:bg-primary-100 dark:text-primary-300 hover:dark:bg-primary-600/10`,
      svg: `${svg}`,
    },
  },
};
