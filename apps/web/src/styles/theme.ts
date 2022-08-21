import { Theme } from "twui";
import { InputDefault, InputLarge, InputSearch } from "./InputTheme";

declare module "twui" {
  export interface InputVariants {
    large: true;
    search: true;
  }
}

export const theme: Theme = {
  Input: {
    default: InputDefault,
    large: InputLarge,
    search: InputSearch,
  },
};
