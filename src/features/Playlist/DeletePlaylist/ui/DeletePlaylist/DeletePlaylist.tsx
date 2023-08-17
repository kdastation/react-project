import { useDeletePlaylistMutation } from "../../model/api";
import { Id } from "@/shared/types/Id";

type Props = {
  id: Id;
};
export const DeletePlaylist = ({ id }: Props) => {
  const [deletePlaylist, { data }] = useDeletePlaylistMutation();

  const handleDeletePlaylist = async () => {
    await deletePlaylist(id);
  };

  return (
    <>
      <button onClick={handleDeletePlaylist}>Удалить плейлист</button>
    </>
  );
};
