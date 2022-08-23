import { ButtonTheme } from "./Button";

const root = `
  TWUI-Button-root
  rounded py-2 px-4 h-10 flex items-center gap-2 transition-all duration-150 focus:outline outline-primary-600 outline-offset-2 outline-2
  is-xl:text-xl is-xl:py-3 is-xl:px-6 is-xl:h-12
  is-lg:text-lg is-lg:h-10
  is-sm:text-sm is-sm:h-8 is-sm:py-1.5
  is-xs:text-xs is-xs:h-6 is-xs:py-0.5 is-xs:px-1.5
  is-disabled:opacity-50 is-disabled:cursor-not-allowed 
  active:translate-y-px
  `;

export const ButtonVariants: ButtonTheme = {
  default: {
    classes: {
      root: `${root} bg-primary-600 text-white hover:bg-primary-700 hover:shadow`,
      startAdornment: { root: { replace: "text-white" } },
    },
  },
  light: {
    classes: {
      root: `${root} bg-primary-200/30 text-primary-600 hover:bg-primary-200/60 shadow-sm hover:shadow`,
      startAdornment: { root: { replace: "text-primary-600" } },
    },
  },
  outline: {
    classes: {
      root: `${root} border border-primary-600 text-primary-600 hover:bg-primary-50`,
      startAdornment: { root: { replace: "text-primary-600" } },
    },
  },
  subtle: {
    classes: {
      root: `${root} text-primary-600 hover:bg-primary-50`,
      startAdornment: { root: { replace: "text-primary-600" } },
    },
  },
};
