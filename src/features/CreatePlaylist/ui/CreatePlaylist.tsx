import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { Modal } from "@/shared/ui/redesign/Modal";

import { Form } from "./Form/Form";

export const CreatePlaylist = () => {
  const [visible, setVisible] = useBoolean(false);

  return (
    <>
      <button data-testid="CreatePlaylistButton" onClick={setVisible.on}>
        create playlist
      </button>

      <Modal isOpen={visible} onClose={setVisible.off}>
        <Form onSuccess={setVisible.off} />
      </Modal>
    </>
  );
};
