import { LabelTheme } from "./Label";

const root = `
  TWUI-Label-root
  is-xs:font-bold is-xs:text-xs 
  is-sm:text-sm 
  is-lg:text-lg 
  is-xl:text-xl
  `;

const required = `
  TWUI-Label-required
`;

export const LabelVariants: LabelTheme = {
  default: {
    classes: {
      root: `${root} font-medium text-gray-700`,
      required: `${required} pl-1 text-error-400`,
    },
  },
};
