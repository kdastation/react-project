import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Id } from "@/shared/types/Id";

import { deleteMusic } from "../../model/services/deleteMusic";

type DeleteMusicButtonProps = {
  musicId: Id;
};

export const DeleteMusicButton = ({ musicId }: DeleteMusicButtonProps) => {
  const dispatch = useAppDispatch();

  const handleDeleteMusic = () => {
    console.log("delete music", musicId);
    if (musicId) {
      dispatch(
        deleteMusic({
          musicId,
        }),
      );
    }
  };

  return (
    <button type="button" onClick={handleDeleteMusic}>
      delete music
    </button>
  );
};
