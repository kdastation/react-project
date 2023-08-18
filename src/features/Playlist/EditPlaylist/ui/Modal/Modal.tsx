import { ReactNode, useState } from "react";
import { Id } from "@/shared/types/Id";
import { useGetPlaylistQuery } from "@/entities/Playlist";
import { FormModal, FormValues } from "@/features/Playlist/FormModal";
import { useEditPlaylistMutation } from "../../model/api/api";
import { InfoDialog } from "@/shared/ui/redesign/Popups";

type Props = {
  onClose: () => void;
  visible: boolean;
  id: Id;
  leftAddon?: ReactNode;
};

type Screens = "form" | "success" | "error";
export const Modal = ({ visible, onClose, leftAddon, id }: Props) => {
  const [screen, setScreen] = useState<Screens>("form");
  const { data, isLoading } = useGetPlaylistQuery(id);
  const [editPlaylist] = useEditPlaylistMutation();

  const handleEditPlaylist = async (args: FormValues) => {
    try {
      await editPlaylist({
        ...args,
        id,
      }).unwrap();

      setScreen("success");
    } catch (error) {
      setScreen("error");
    }
  };

  if (!data) {
    return null;
  }

  const screens: Record<Screens, ReactNode> = {
    form: (
      <FormModal
        title="Редактирование плейлиста"
        visible={visible}
        onClose={onClose}
        initialValues={{
          name: data.name,
          description: data.description,
        }}
        leftAddon={leftAddon}
        onSave={handleEditPlaylist}
      />
    ),
    success: <InfoDialog isOpen={visible} onClose={onClose} text="Плейлист отредактирован!" />,
    error: <InfoDialog isOpen={visible} onClose={onClose} text="Произошла ошибка:(" />,
  };

  return <>{screens[screen]}</>;
};
