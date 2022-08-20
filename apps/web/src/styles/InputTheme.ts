import { InputProps, InputSX } from "twui";

declare module "twui" {
  export interface InputVariants {
    large: true;
    search: true;
  }
}

export const InputDefault: InputProps = {
  classes: {
    root: "bg-gray-50 has-text:bg-green-100",
  },
};

export const InputLarge: InputProps = {
  classes: {
    input: "text-xl has-text:bg-green-100",
  },
};

export const InputSearch: InputProps = {
  startAdornment: "🔎",
  type: "search",
  classes: {
    root: "rounded-full has-text:shadow",
    startAdornment: { root: "pr-0" },
  },
};
