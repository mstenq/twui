import { InputControlTheme } from "./InputControl";

const root = `TWUI-InputControl-root flex flex-col`;

const description = `TWUI-InputControl-description 
  text-xs is-lg:font-thin is-lg:text-sm is-xl:font-thin is-xl:text-base text-neutral-500`;

export const InputControlVariants: InputControlTheme = {
  default: {
    classes: {
      root: `${root}`,
      description: `${description} pb-1`,
    },
  },
  filled: {
    inputVariant: "filled",
    classes: {
      root: `${root}`,
      description: `${description} pb-1`,
    },
  },
  descriptionBelow: {
    classes: {
      root: `${root}`,
      label: { root: "order-1" },
      input: { root: "order-2" },
      description: `${description} order-3 pt-1 has-error:hidden`,
      fieldError: { root: "order-4" },
    },
  },
};
