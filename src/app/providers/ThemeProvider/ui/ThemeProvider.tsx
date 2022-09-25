import {
  Theme,
  IThemeValues,
  ThemeContext,
  ThemeContextProps,
} from "../lib/ThemeContext";
import { FC, useMemo, useState } from "react";

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
  };

  const providerValues: IThemeValues = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={providerValues}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
