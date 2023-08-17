import { useDeletePlaylistMutation } from "../../model/api";
import { Id } from "@/shared/types/Id";

type Props = {
  id: Id;
  onSuccess?: () => void;
};
export const DeletePlaylist = ({ id, onSuccess }: Props) => {
  const [deletePlaylist, { data }] = useDeletePlaylistMutation();

  const handleDeletePlaylist = async () => {
    await deletePlaylist(id);
    onSuccess?.();
  };

  return (
    <>
      <button onClick={handleDeletePlaylist}>Удалить плейлист</button>
    </>
  );
};
