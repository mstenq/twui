import { InputTheme } from "./Input";

const root = `
  TWUI-Input-root
  border flex items-stretch
  focus-within:outline outline-primary-600 outline-offset-2 
  is-disabled:opacity-50 is-disabled:cursor-not-allowed 
  is-xs:p-px
  `;

const input = `
  TWUI-Input-input
  p-2 w-full bg-transparent block border-none
  focus:outline-none 
  is-disabled:cursor-not-allowed
  has-startadornment:pl-0 has-endadornment:pr-0 
  is-xl:text-xl is-xl:py-3 is-xl:px-4 
  is-lg:px-3 is-lg:text-lg 
  is-sm:text-sm is-sm:p-1.5 
  is-xs:text-xs is-xs:px-1 is-xs:py-0.5
  selection:bg-primary-100 selection:text-primary-900
  `;

export const InputVariants: InputTheme = {
  default: {
    classes: {
      root: `${root} rounded-md border-neutral-300 has-error:border-error-400 shadow-sm focus-within:border-primary-600`,
      input: `${input}`,
    },
  },
  filled: {
    classes: {
      root: `${root} bg-neutral-100 border-neutral-100 rounded shadow-sm has-error:border-error-50 has-error:bg-error-50`,
      input: `${input} placeholder:text-neutral-500`,
    },
  },
};
