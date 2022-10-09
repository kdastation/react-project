import React, { FC, MouseEvent } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Modal.module.scss';

type ModalProps = {
  isOpen: boolean,
  onClose?: () => void
}

const Modal: FC<ModalProps> = ({
  onClose,
  isOpen,
  children,
}) => {
  const onClickContent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <div
          className={classNames(styles.overlay)}
          onClick={onClose}
        >
          <div
            className={classNames(styles.content)}
            onClick={onClickContent}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export { Modal };
