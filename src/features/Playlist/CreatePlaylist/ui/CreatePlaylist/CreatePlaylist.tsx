import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { FormModal, OnSaveArgs } from "@/features/Playlist/FormModal";
import { useCreatePlaylistMutation } from "../../model/api/api";

export const CreatePlaylist = () => {
  const [visible, setVisible] = useBoolean(false);

  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async ({ name }: OnSaveArgs) => {
    await createPlaylist({
      name,
    });
  };

  return (
    <>
      <button onClick={setVisible.on}>create playlist</button>
      <FormModal visible={visible} onClose={setVisible.off} onSave={handleCreatePlaylist} />
    </>
  );
};
