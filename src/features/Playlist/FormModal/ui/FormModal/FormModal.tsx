import { useSelector } from "react-redux";
import { ReactNode, useEffect } from "react";
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
import { actions, reducer } from "../../model/slice/slice";
import { FormValues } from "../../model/types/FormValues";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

type Props = {
  onSave?: (args: OnSaveArgs) => void;
  visible?: boolean;
  onClose?: () => void;
  initialValues?: DeepPartial<FormValues>;
  title: string;
  leftAddon?: ReactNode;
};

const initialReducers: ReducersList = {
  [MODULE_NAME]: reducer,
};

export const FormModal = ({
  onSave,
  onClose = () => {},
  visible = false,
  initialValues = {},
  title,
  leftAddon,
}: Props) => {
  const dispatch = useAppDispatch();
  const screen = useSelector(rootSelector.selectScreen);

  const screens: Record<Screens, ReactNode> = {
    main: <MainScreen onSave={onSave} title={title} leftAddon={leftAddon} />,
    "search-music": <SearchMusicScreen />,
  };

  useEffect(() => {
    dispatch(actions.setInitialValuesForm(initialValues));
  }, [initialValues]);

  if (!visible) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Modal isOpen={visible} onClose={onClose}>
        {screens[screen]}
      </Modal>
    </DynamicModuleLoader>
  );
};
