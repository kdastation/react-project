import { ReactElement } from "react";
import { useSelector } from "react-redux";

import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { useBoolean } from "@/shared/lib/hooks/useBoolean";
import { Modal } from "@/shared/ui/redesign/Modal";

import { MODULE_NAME } from "../model/consts/moduleName";
import { rootSelector } from "../model/selectors/rootSelector";
import { reducer } from "../model/slice/slice";
import { Screens } from "../model/types/State";
import { MainScreen } from "./MainScreen/MainScreen";
import { SearchMusicScreen } from "./SearchMusicScreen/SearchMusicScreen";

const initialReducers: ReducersList = {
  [MODULE_NAME]: reducer,
};

const ScreensContent: Record<Screens, ReactElement> = {
  main: <MainScreen />,
  "search-music": <SearchMusicScreen />,
};

export const CreatePlaylist = () => {
  const [visible, setVisible] = useBoolean(false);

  const screen = useSelector(rootSelector.selectScreen);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <button data-testid="CreatePlaylistButton" onClick={setVisible.on}>
        create playlist
      </button>

      <Modal isOpen={visible} onClose={setVisible.off}>
        {ScreensContent[screen]}
      </Modal>
    </DynamicModuleLoader>
  );
};
