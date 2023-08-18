import { ChangeEvent, ReactNode } from "react";
import { useSelector } from "react-redux";
import styles from "./MainScreen.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Input } from "@/shared/ui/redesign/Input";
import { SearchMusic } from "../SearchMusic/SearchMusic";
import { AddMusic } from "../AddMusic/AddMusic";
import { VisibleMusic } from "../VisibleMusic/VisibleMusic";
import { rootSelector } from "../../model/selectors/rootSelector";
import { actions } from "../../model/slice/slice";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { FormValues } from "../../model/types/FormValues";

type Props = {
  onSave?: (args: FormValues) => void;
  leftAddon?: ReactNode;
};
export const MainScreen = ({ onSave, leftAddon }: Props) => {
  const dispatch = useAppDispatch();
  const name = useSelector(rootSelector.selectName);
  const description = useSelector(rootSelector.selectDescription);

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setName(event.target.value));
  };

  const handleChangeDescription = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.setDescription(event.target.value));
  };

  const handleSave = () => {
    onSave?.({ name, description });
  };

  return (
    <div>
      <HStack className={styles.field_wrapper} gap="16">
        <div>Обложка</div>
        <VStack gap="16" max>
          <Input
            placeholder="Название плейлиста"
            data-testid="CreatePlaylistNameInput"
            type="text"
            onChange={handleChangeName}
            value={name}
          />
          <Input
            placeholder="Описание плейлиста"
            type="text"
            onChange={handleChangeDescription}
            value={description}
          />
        </VStack>
      </HStack>
      <div className={styles.field_wrapper}>
        <SearchMusic />
      </div>
      <div className={styles.field_wrapper}>
        <AddMusic />
      </div>
      <div className={styles.field_wrapper}>
        <VisibleMusic />
      </div>
      <HStack className={styles.controls} justify="between">
        {leftAddon && <div>{leftAddon}</div>}
        <button
          data-testid="CreatePlaylistSubmit"
          // disabled={isLoading}
          onClick={handleSave}
        >
          Сохранить
        </button>
      </HStack>
    </div>
  );
};
