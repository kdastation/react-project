import { Overlay, OverlayProps } from "../Overlay/Overlay";
import styles from "./Modal.module.scss";

type ModalProps = Pick<OverlayProps, "isOpen" | "onClose" | "children">;

export const Modal = ({ children, ...props }: ModalProps) => (
  <Overlay {...props}>
    <div className={styles.container}>{children}</div>
  </Overlay>
);
