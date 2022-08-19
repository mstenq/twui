/**
 * defaultTheme first
 * customTheme second
 * componentSpecific overides takes priority
 */

/*

<Input override={{root: "bg-gray-200"}} sx={{input: "p-2"}} />

*/

export const defaultTheme = {
  colors: {
    inputBorder: "gray",
  },
  components: {
    Input: {
      root: "",
      startAdornment: "",
      endAdornment: "",
      input: "",
    },
    Adornment: {
      root: "",
    },
  },
};
