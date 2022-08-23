import { IconButtonTheme } from "./IconButton";

const root = `
  TWUI-IconButton-root
  rounded transition-all duration-150 focus:outline outline-primary-600 outline-offset-2 outline-2
  is-xl:w-12 is-xl:h-12 is-xl:p-2
  is-lg:w-10 is-lg:h-10 is-lg:p-1
  is-md:w-10 is-md:h-10 is-md:p-1.5
  is-sm:w-8 is-sm:h-8 is-sm:p-1.5
  is-xs:w-6 is-xs:h-6 is-xs:p-0.5
  is-disabled:opacity-50 is-disabled:cursor-not-allowed 
  active:translate-y-px
  `;

export const IconButtonVariants: IconButtonTheme = {
  default: {
    classes: {
      root: `${root} bg-primary-600 text-white hover:bg-primary-700 hover:shadow`,
    },
  },
  light: {
    classes: {
      root: `${root} bg-primary-300/30 text-primary-600 hover:bg-primary-300/50`,
    },
  },
  outline: {
    classes: {
      root: `${root} border border-primary-600 text-primary-600 hover:bg-primary-100`,
    },
  },
  subtle: {
    classes: {
      root: `${root} text-primary-600 hover:bg-primary-100`,
    },
  },
};
