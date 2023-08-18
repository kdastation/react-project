import { useDeletePlaylistMutation } from "@/features/Playlist/DeletePlaylist/model/api";
import { Id } from "@/shared/types/Id";
import { ConfirmDialog } from "@/shared/ui/redesign/Popups";

type Props = {
  onSuccess?: () => void;
  visible: boolean;
  onClose: () => void;
  id: Id;
};
export const Dialog = ({ visible, onClose, id, onSuccess }: Props) => {
  const [deletePlaylist, { data }] = useDeletePlaylistMutation();

  const handleDeletePlaylist = async () => {
    await deletePlaylist(id);
    onSuccess?.();
  };

  return (
    <ConfirmDialog
      title="Удаление плейлиста"
      isOpen={visible}
      onClose={onClose}
      text="Вы действительно хотите удалить плейлист?"
      onConfirm={handleDeletePlaylist}
    />
  );
};
