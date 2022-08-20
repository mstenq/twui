import { Theme } from "twui";
import { InputDefault, InputLarge, InputSearch } from "./InputTheme";

export const theme: Theme = {
  components: {
    Input: {
      default: InputDefault,
      large: InputLarge,
      search: InputSearch,
    },
  },
};
