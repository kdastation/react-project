import { createContext } from 'react';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface IThemeValues {
  theme: Theme;
  toggleTheme: () => void;
}

export type ThemeContextProps = IThemeValues | null;

export const ThemeContext = createContext<ThemeContextProps>(null);
