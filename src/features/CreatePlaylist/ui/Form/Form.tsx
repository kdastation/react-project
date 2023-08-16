import { useState } from "react";

import { Input } from "@/shared/ui/redesign/Input";

import { useCreatePlaylistMutation } from "../../model/api/api";
import { SearchMusic } from "../SearchMusic/SearchMusic";
import { VisibleMusic } from "../VisibleMusic/VisibleMusic";

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
      <div>
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
      </div>
      <SearchMusic />
      <VisibleMusic />
      <div>
        <button
          data-testid="CreatePlaylistSubmit"
          disabled={isLoading}
          onClick={handleCreatePlaylist}
        >
          create
        </button>
      </div>
    </div>
  );
};
