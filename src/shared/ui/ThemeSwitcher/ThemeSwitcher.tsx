import React, { FC } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();
  return (
    <button
      type="button"
      className={classNames(
        styles.theme_switcher,
        {},
        [className],
      )}
      onClick={toggleTheme}
    >
      <ThemeIcon />
    </button>
  );
};

export { ThemeSwitcher };
