import { FC } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { LoginForm } from '@/features/LoginByUserName/ui/LoginForm/LoginForm';

type LoginModalProps = {
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal: FC<LoginModalProps> = ({
  onClose,
  isOpen,
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
  >
    <LoginForm
      onSuccess={onClose}
    />
  </Modal>
);
