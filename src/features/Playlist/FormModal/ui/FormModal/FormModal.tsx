import { useSelector } from "react-redux";
import { ReactNode } from "react";
import { rootSelector } from "../../model/selectors/rootSelector";
import { OnSaveArgs } from "../../model/types/OnSaveArgs";
import { Screens } from "../../model/types/Screens";
import { MainScreen } from "../MainScreen/MainScreen";
import { SearchMusicScreen } from "../SearchMusicScreen/SearchMusicScreen";
import { Modal } from "@/shared/ui/redesign/Modal";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { MODULE_NAME } from "../../model/consts/moduleName";
import { reducer } from "../../model/slice/slice";

type Props = {
  onSave?: (args: OnSaveArgs) => void;
  visible?: boolean;
  onClose?: () => void;
};

const initialReducers: ReducersList = {
  [MODULE_NAME]: reducer,
};

export const FormModal = ({ onSave, onClose = () => {}, visible = false }: Props) => {
  const screen = useSelector(rootSelector.selectScreen);

  const screens: Record<Screens, ReactNode> = {
    main: <MainScreen onSave={onSave} />,
    "search-music": <SearchMusicScreen />,
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Modal isOpen={visible} onClose={onClose}>
        {screens[screen]}
      </Modal>
    </DynamicModuleLoader>
  );
};
