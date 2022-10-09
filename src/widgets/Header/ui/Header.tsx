import React, { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';
import styles from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleVisibleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
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
        onClick={toggleVisibleModal}
      >
        modal
      </Button>
      <Modal
        isOpen={isOpenModal}
        onClose={handleCloseModal}
      >
        <div>
          asdasdasmdkasmdkasdmaskdmaskamskdasmkdaskdas
        </div>
      </Modal>
    </div>
  );
};

export { Header };
