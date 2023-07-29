import { ReactNode } from "react";

import { Portal } from "@/shared/components/Portal";
import { classNames } from "@/shared/lib/classNames/classNames";

import styles from "./Overlay.module.scss";

export type OverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

export const Overlay = ({ isOpen, onClose, className, children }: OverlayProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div role="dialog" className={classNames(styles.container, {}, [className])}>
        <div onClick={onClose} className={styles.overlay} />
        {children}
      </div>
    </Portal>
  );
};
