import { FieldErrorTheme } from "./FieldError";

const root = `
  TWUI-FieldError-root
  is-xs:text-xs 
  is-sm:text-sm 
  is-lg:text-base 
  is-xl:text-lg 
  `;

export const FieldErrorVariants: FieldErrorTheme = {
  default: {
    classes: {
      root: `${root} text-error-600`,
    },
  },
};
