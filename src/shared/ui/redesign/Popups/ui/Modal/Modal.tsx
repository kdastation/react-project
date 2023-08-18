import { ReactNode } from "react";
import { Overlay, OverlayProps } from "@/shared/ui/redesign/Popups/ui/Overlay/Overlay";
import styles from "./Modal.module.scss";
import Close from "@/shared/assets/icons/close.svg";

export type ModalProps = Pick<OverlayProps, "isOpen" | "onClose" | "children"> & {
  title?: ReactNode;
  closeIcon?: boolean;
};

// TODO: Add ButtonComponent
export const Modal = ({ children, title, onClose, closeIcon = true, ...props }: ModalProps) => (
  <Overlay {...props} onClose={onClose}>
    <div className={styles.container}>
      {closeIcon && (
        <button onClick={onClose} className={styles.close}>
          <Close width={24} height={24} fill="currentColor" />
        </button>
      )}
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  </Overlay>
);
