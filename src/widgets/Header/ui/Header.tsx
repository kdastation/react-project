import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button';
import { LoginModal } from 'features/LoginByUserName';
import styles from './Header.module.scss';

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
    <div
      className={classNames(
        styles.header,
        {},
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
      <Button
        onClick={handleShowLoginFormModal}
      >
        войти
      </Button>
      <LoginModal
        isOpen={isOpenLoginFormModal}
        onClose={handleCloseLoginFormModal}
      />

    </div>
  );
};

export { Header };
