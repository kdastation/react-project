import { EditPlaylistModal } from "@/features/Playlist/EditPlaylist";
import { Id } from "@/shared/types/Id";
import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { DeletePlaylist } from "@/features/Playlist/DeletePlaylist";

type Props = {
  id: Id;
};
export const EditPlaylist = ({ id }: Props) => {
  const [visible, setVisible] = useBoolean();
  return (
    <>
      <button onClick={setVisible.on}>Редактировать</button>
      {visible && (
        <EditPlaylistModal
          onClose={setVisible.off}
          visible={visible}
          id={id}
          leftAddon={<DeletePlaylist id={id} onSuccess={setVisible.off} />}
        />
      )}
    </>
  );
};

console.error('asdasdsa')
