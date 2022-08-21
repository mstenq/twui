import React, { createContext, useContext } from "react";
import { Theme } from "./ThemeType";

const defaultTheme: Theme = {};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({
  theme = defaultTheme,
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
