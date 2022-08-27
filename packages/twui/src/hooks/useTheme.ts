import { useContext } from "react";
import { ThemeContext } from "..";

export const useTheme = () => useContext(ThemeContext);
