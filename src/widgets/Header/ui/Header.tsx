import React, { FC, useState } from "react";

import { LoginModal } from "@/features/LoginByUserName";
import { classNames } from "@/shared/lib/classNames/classNames";
import { getRouteArticle, getRouteProfile } from "@/shared/router";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { Button } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";

import styles from "./Header.module.scss";

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

        <AppLink
          data-testid="ProfileLink"
          theme={AppLinkTheme.INVERTED_PRIMARY}
          to={getRouteProfile()}
        >
          profile
        </AppLink>

        <AppLink theme={AppLinkTheme.INVERTED_PRIMARY} to={getRouteArticle("1")}>
          article 1
        </AppLink>

        <Button data-testid="SYKA" onClick={handleShowLoginFormModal}>
          войти
        </Button>
      </HStack>

      <LoginModal isOpen={isOpenLoginFormModal} onClose={handleCloseLoginFormModal} />
    </div>
  );
};

export { Header };
