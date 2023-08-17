import { useState } from "react";
import styles from "./MainScreen.module.scss";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Input } from "@/shared/ui/redesign/Input";
import { SearchMusic } from "../SearchMusic/SearchMusic";
import { AddMusic } from "../AddMusic/AddMusic";
import { VisibleMusic } from "../VisibleMusic/VisibleMusic";

type Props = {
  onSave?: (args: { name: string }) => void;
};
export const MainScreen = ({ onSave }: Props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSave = () => {
    onSave?.({ name });
  };

  return (
    <div>
      <div className={styles.field_wrapper}>Create new Playlist!</div>

      {/* {isLoading && <div>loading...</div>} */}
      <HStack className={styles.field_wrapper} gap="16">
        <div>Обложка</div>
        <VStack gap="16" max>
          <Input
            placeholder="Название плейлиста"
            data-testid="CreatePlaylistNameInput"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <Input
            placeholder="Описание плейлиста"
            type="text"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
      <HStack className={styles.controls} justify="end">
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
