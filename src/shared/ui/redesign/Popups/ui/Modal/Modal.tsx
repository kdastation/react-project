import { ReactNode } from "react";
import { Overlay, OverlayProps } from "@/shared/ui/redesign/Popups/ui/Overlay/Overlay";
import styles from "./Modal.module.scss";

export type ModalProps = Pick<OverlayProps, "isOpen" | "onClose" | "children"> & {
  title?: ReactNode;
};

export const Modal = ({ children, title, ...props }: ModalProps) => (
  <Overlay {...props}>
    <div className={styles.container}>
      {title && <div className={styles.title}>{title}</div>}
      {children}
    </div>
  </Overlay>
);
