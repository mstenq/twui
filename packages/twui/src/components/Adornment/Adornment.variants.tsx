import { AdornmentTheme } from "./Adornment";

export const AdornmentVariants: AdornmentTheme = {
  default: {
    classes: {
      root: `TWUI-Adornment-root 
      flex items-center
      has-error:text-error-600 
      is-xs:text-xs
      is-sm:text-sm 
      is-lg:text-xl 
      is-xl:text-2xl is-xl:max-w-2`,
      icon: `w-[23px] h-[23px] 
      is-sm:w-[19px] is-sm:h-[19px] 
      is-xs:w-[15px] is-xs:h-[15px]`,
    },
  },
};
