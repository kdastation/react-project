import { ReactNode, useState } from "react";
import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { FormModal, FormValues } from "@/features/Playlist/FormModal";
import { useCreatePlaylistMutation } from "../../model/api/api";
import { InfoDialog } from "@/shared/ui/redesign/Popups";

type Screens = "form" | "success" | "error";
export const CreatePlaylist = () => {
  const [screen, setScreen] = useState<Screens>("form");
  const [visible, setVisible] = useBoolean(false);

  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async (values: FormValues) => {
    try {
      await createPlaylist(values).unwrap();
      setScreen("success");
    } catch (error) {
      setScreen("error");
    }
  };

  const handleClose = () => {
    setVisible.off();
    setScreen("form");
  };

  const screens: Record<Screens, ReactNode> = {
    form: (
      <FormModal
        title="Создание нового плейлиста"
        visible={visible}
        onClose={handleClose}
        onSave={handleCreatePlaylist}
      />
    ),
    success: <InfoDialog isOpen={visible} onClose={handleClose} text="Плейлист создан!" />,
    error: <InfoDialog isOpen={visible} onClose={handleClose} text="Произошла ошибка:(" />,
  };

  return (
    <>
      <button onClick={setVisible.on}>create playlist</button>
      {screens[screen]}
    </>
  );
};
