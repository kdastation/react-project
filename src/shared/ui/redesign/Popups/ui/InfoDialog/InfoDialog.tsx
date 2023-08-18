import { ReactNode } from "react";
import { Modal, ModalProps } from "../Modal/Modal";

type Props = ModalProps & {
  text: ReactNode;
};

export const InfoDialog = ({ text, ...modalProps }: Props) => (
  <Modal {...modalProps}>
    <div>
      {text}
      <div>
        <button onClick={modalProps.onClose}>OK</button>
      </div>
    </div>
  </Modal>
);
