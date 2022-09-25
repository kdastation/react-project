import React, { FC } from "react";
import styles from "./Header.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <div className={classNames(styles.header, [className])}>
      <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to={"/about"}>
        about
      </AppLink>
      <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to={"/"}>
        main
      </AppLink>
    </div>
  );
};

export { Header };
