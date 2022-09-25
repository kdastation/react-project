import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => (
  <div
    className={classNames(
      styles.header,
      [className],
    )}
  >
    <ThemeSwitcher />
    <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to="/about">
      about
    </AppLink>
    <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to="/">
      main
    </AppLink>
  </div>
);

export { Header };
