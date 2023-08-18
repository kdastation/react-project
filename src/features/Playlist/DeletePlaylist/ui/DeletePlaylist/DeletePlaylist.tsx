import { Id } from "@/shared/types/Id";
import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { Dialog } from "../Dialog/Dialog";

type Props = {
  id: Id;
  onSuccess?: () => void;
};
export const DeletePlaylist = ({ id, onSuccess }: Props) => {
  const [visibleDialog, setVisibleDialog] = useBoolean();

  return (
    <>
      <button onClick={setVisibleDialog.on}>Удалить плейлист</button>
      <Dialog
        id={id}
        onSuccess={onSuccess}
        visible={visibleDialog}
        onClose={setVisibleDialog.off}
      />
    </>
  );
};
