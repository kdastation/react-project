import { ReactNode } from "react";
import { Modal, ModalProps } from "../Modal/Modal";
import { HStack, VStack } from "@/shared/ui/Stack";
import styles from "./InfoDiagol.module.scss";

type Props = Omit<ModalProps, "closeIcon"> & {
  text: ReactNode;
};

export const InfoDialog = ({ text, ...modalProps }: Props) => (
  <Modal {...modalProps} closeIcon={false}>
    <VStack className={styles.container} gap="16">
      <div>{text}</div>
      <HStack max justify="end">
        <button onClick={modalProps.onClose}>OK</button>
      </HStack>
    </VStack>
  </Modal>
);
