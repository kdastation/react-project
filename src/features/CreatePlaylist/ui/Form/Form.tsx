import { useState } from "react";

import { useCreatePlaylistMutation } from "../../model/api/api";

type FormProps = {
  onSuccess?: () => void;
  onError?: () => void;
};

export const Form = ({ onError, onSuccess }: FormProps) => {
  const [name, setName] = useState("");
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
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div>
        <button disabled={isLoading} onClick={handleCreatePlaylist}>
          create
        </button>
      </div>
    </div>
  );
};
