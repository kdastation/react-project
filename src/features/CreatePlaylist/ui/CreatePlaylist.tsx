import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { Modal } from "@/shared/ui/redesign/Modal";

import { MODULE_NAME } from "../model/consts/moduleName";
import { reducer } from "../model/slice/slice";
import { Form } from "./Form/Form";

const initialReducers: ReducersList = {
  [MODULE_NAME]: reducer,
};

export const CreatePlaylist = () => {
  const [visible, setVisible] = useBoolean(false);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <button data-testid="CreatePlaylistButton" onClick={setVisible.on}>
        create playlist
      </button>

      <Modal isOpen={visible} onClose={setVisible.off}>
        <Form onSuccess={setVisible.off} />
      </Modal>
    </DynamicModuleLoader>
  );
};
