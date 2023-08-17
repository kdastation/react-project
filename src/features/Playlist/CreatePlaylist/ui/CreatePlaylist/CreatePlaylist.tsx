import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { FormModal, FormValues } from "@/features/Playlist/FormModal";
import { useCreatePlaylistMutation } from "../../model/api/api";

export const CreatePlaylist = () => {
  const [visible, setVisible] = useBoolean(false);

  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async ({ name }: FormValues) => {
    await createPlaylist({
      name,
    });
  };

  return (
    <>
      <button onClick={setVisible.on}>create playlist</button>
      <FormModal
        title="Создание нового плейлиста"
        visible={visible}
        onClose={setVisible.off}
        onSave={handleCreatePlaylist}
      />
    </>
  );
};
