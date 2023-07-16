import React, { FC, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { LoginModal } from "@/features/LoginByUserName";
import { Button } from "@/shared/ui/Button";
import styles from "./Header.module.scss";
import { getRouteArticle, getRouteProfile } from "@/shared/router";
import { HStack } from "@/shared/ui/Stack";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const [isOpenLoginFormModal, setIsOpenLoginFormModal] = useState(false);

  const handleShowLoginFormModal = () => {
    setIsOpenLoginFormModal(true);
  };

  const handleCloseLoginFormModal = () => {
    setIsOpenLoginFormModal(false);
  };

  return (
    <div className={classNames(styles.header, {}, [className])}>
      <ThemeSwitcher />
      <HStack gap="16">
        <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to="/about">
          about
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to="/">
          main
        </AppLink>

        <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to={getRouteProfile()}>
          profile
        </AppLink>

        <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to={getRouteArticle("1")}>
          article 1
        </AppLink>

        <Button onClick={handleShowLoginFormModal}>войти</Button>
      </HStack>

      <LoginModal isOpen={isOpenLoginFormModal} onClose={handleCloseLoginFormModal} />
    </div>
  );
};

export { Header };
