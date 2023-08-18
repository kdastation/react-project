import { useSelector } from "react-redux";
import { ReactNode, useEffect } from "react";
import { rootSelector } from "../../model/selectors/rootSelector";
import { Screens } from "../../model/types/Screens";
import { MainScreen } from "../MainScreen/MainScreen";
import { SearchMusicScreen } from "../SearchMusicScreen/SearchMusicScreen";
import { Modal } from "@/shared/ui/redesign/Popups";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/components/DynamicModuleLoader/DynamicModuleLoader";
import { MODULE_NAME } from "../../model/consts/moduleName";
import { actions, reducer } from "../../model/slice/slice";
import { FormValues } from "../../model/types/FormValues";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Back } from "../Back/Back";

type Props = {
  onSave?: (args: FormValues) => void;
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
    main: (
      <Modal title={title} isOpen={visible} onClose={onClose}>
        <MainScreen onSave={onSave} leftAddon={leftAddon} />
      </Modal>
    ),
    "search-music": (
      <Modal title={<Back />} isOpen={visible} onClose={onClose}>
        <SearchMusicScreen />
      </Modal>
    ),
  };

  useEffect(() => {
    dispatch(actions.setInitialValuesForm(initialValues));
  }, []);

  if (!visible) {
    return null;
  }

  return <DynamicModuleLoader reducers={initialReducers}>{screens[screen]}</DynamicModuleLoader>;
};
