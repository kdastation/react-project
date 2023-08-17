import { Id } from "@/shared/types/Id";
import { Modal } from "../Modal/Modal";
import { useBoolean } from "@/shared/lib/hooks/useBoolean";

type Props = {
  id: Id;
};
export const EditPlaylist = ({ id }: Props) => {
  const [visible, setVisible] = useBoolean(false);

  return (
    <>
      <button onClick={setVisible.on}>Редактировать</button>
      <Modal visible={visible} onClose={setVisible.off} id={id} />
    </>
  );
};
