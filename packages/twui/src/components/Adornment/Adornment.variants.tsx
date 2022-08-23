import { AdornmentTheme } from "./Adornment";

export const AdornmentVariants: AdornmentTheme = {
  default: {
    classes: {
      root: `TWUI-Adornment-root 
      px-2 flex items-center text-neutral-600 
      has-error:text-error-600 
      is-xs:text-xs 
      is-sm:text-sm 
      is-lg:text-xl 
      is-xl:text-2xl is-xl:max-w-2`,
      icon: `w-6 h-6 
      is-xl:w-8 is-xl:h-8 
      is-lg:w-7 is-lg:h-7 
      is-sm:w-5 is-sm:h-5 
      is-xs:w-4 is-xs:h-4`,
    },
  },
};
