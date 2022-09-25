import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const values = useContext(ThemeContext);

  return values;
};
