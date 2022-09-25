import React, { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./ThemeSwitcher.module.scss";
import ThemeIcon from "shared/assets/icons/theme.svg";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      className={classNames(styles.theme_switcher, [className])}
      onClick={toggleTheme}
    >
      <ThemeIcon />
    </button>
  );
};

export { ThemeSwitcher };
