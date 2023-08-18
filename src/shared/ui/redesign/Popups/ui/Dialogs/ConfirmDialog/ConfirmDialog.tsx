import { HStack, VStack } from "@/shared/ui/Stack";
import styles from "../Diagol/Diagol.module.scss";
import { Modal } from "@/shared/ui/redesign/Popups";
import { ModalProps } from "@/shared/ui/redesign/Popups/ui/Modal/Modal";

type Props = ModalProps & {
  text: string;
  onConfirm?: () => void;
};
export const ConfirmDialog = ({ text, onConfirm, ...modalProps }: Props) => (
  <Modal {...modalProps}>
    <VStack className={styles.container} gap="16">
      <div>{text}</div>
      <HStack max justify="end">
        <HStack gap="16">
          <button onClick={modalProps.onClose}>Отмена</button>
          <button onClick={onConfirm}>Подтвердить</button>
        </HStack>
      </HStack>
    </VStack>
  </Modal>
);
