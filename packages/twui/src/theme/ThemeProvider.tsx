import React, { createContext, useContext } from "react";
import { InputAdornmentSX, InputProps, InputVariants } from "../components";

export type Theme = {
  components?: {
    Input?: Record<keyof InputVariants, Omit<InputProps, "variant">>;
    InputAdornment?: {
      default?: InputAdornmentSX;
    };
  };
};

const ThemeContext = createContext<Theme>({});

export const ThemeProvider = ({
  theme = {},
  children,
}: {
  theme?: Theme;
  children: React.ReactNode;
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
