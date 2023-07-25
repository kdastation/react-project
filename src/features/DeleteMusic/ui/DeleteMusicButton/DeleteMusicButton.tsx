import { musicsActions } from "@/entities/Music/Musics";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { isSuccess } from "@/shared/lib/redux";
import { Id } from "@/shared/types/Id";

import { deleteMusic } from "../../model/services/deleteMusic";

type DeleteMusicButtonProps = {
  musicId: Id;
};

export const DeleteMusicButton = ({ musicId }: DeleteMusicButtonProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteMusic = async () => {
    if (musicId) {
      const data = await dispatch(
        deleteMusic({
          musicId,
        }),
      );

      if (isSuccess(data.meta.requestStatus)) {
        dispatch(musicsActions.removeOne({ id: musicId }));
      }
    }
  };

  return (
    <button type="button" onClick={handleDeleteMusic}>
      delete music
    </button>
  );
};
