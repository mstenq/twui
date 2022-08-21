import { InputProps } from "twui";

export const InputDefault: InputProps = {
  classes: {
    root: { add: "TEST bg-gray-50 has-text:bg-green-100" },
  },
};

export const InputLarge: InputProps = {
  classes: {
    input: "text-xl has-text:bg-green-100",
  },
};

export const InputSearch: InputProps = {
  baseVariant: "filled",
  startAdornment: "🔎",
  type: "search",
  classes: {
    root: "rounded-full has-text:shadow",
    startAdornment: { root: "pr-0" },
  },
};
