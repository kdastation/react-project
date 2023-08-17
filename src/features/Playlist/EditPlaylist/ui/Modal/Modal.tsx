import { ReactNode } from "react";
import { Id } from "@/shared/types/Id";
import { useGetPlaylistQuery } from "@/entities/Playlist";
import { FormModal, OnSaveArgs } from "@/features/Playlist/FormModal";
import { useEditPlaylistMutation } from "../../model/api/api";

type Props = {
  onClose: () => void;
  visible: boolean;
  id: Id;
  leftAddon?: ReactNode;
};
export const Modal = ({ visible, onClose, leftAddon, id }: Props) => {
  const { data, isLoading } = useGetPlaylistQuery(id);
  const [editPlaylist] = useEditPlaylistMutation();

  const handleEditPlaylist = async (args: OnSaveArgs) => {
    await editPlaylist({
      ...args,
      id,
    });
  };

  if (!data) {
    return null;
  }

  return (
    <FormModal
      title="Редактирование плейлиста"
      visible={visible}
      onClose={onClose}
      initialValues={{
        name: data?.name,
      }}
      leftAddon={leftAddon}
      onSave={handleEditPlaylist}
    />
  );
};
