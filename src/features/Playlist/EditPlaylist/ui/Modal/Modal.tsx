import { Id } from "@/shared/types/Id";
import { useGetPlaylistQuery } from "@/entities/Playlist";
import { FormModal, OnSaveArgs } from "@/features/Playlist/FormModal";

type Props = {
  onClose: () => void;
  visible: boolean;
  id: Id;
};
export const Modal = ({ visible, onClose, id }: Props) => {
  const { data, isLoading } = useGetPlaylistQuery(id);

  const handleEditPlaylist = ({ name }: OnSaveArgs) => {
    console.log(name);
  };

  return (
    <FormModal
      title="Редактирование плейлиста"
      visible={visible}
      onClose={onClose}
      initialValues={{
        name: data?.name,
      }}
      onSave={handleEditPlaylist}
    />
  );
};
