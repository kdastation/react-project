import { useState } from "react";

import { Input } from "@/shared/ui/redesign/Input";
import { HStack, VStack } from "@/shared/ui/Stack";

import { useCreatePlaylistMutation } from "../../model/api/api";
import { AddMusic } from "../AddMusic/AddMusic";
import { SearchMusic } from "../SearchMusic/SearchMusic";
import { VisibleMusic } from "../VisibleMusic/VisibleMusic";
import styles from "./Form.module.scss";

type FormProps = {
  onSuccess?: () => void;
  onError?: () => void;
};

export const Form = ({ onError, onSuccess }: FormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async () => {
    try {
      await createPlaylist({
        name,
      });

      onSuccess?.();
    } catch (error) {
      onError?.();
    }
  };

  return (
    <div>
      Create new Playlist!
      {isLoading && <div>loading...</div>}
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
          disabled={isLoading}
          onClick={handleCreatePlaylist}
        >
          Сохранить
        </button>
      </HStack>
    </div>
  );
};
