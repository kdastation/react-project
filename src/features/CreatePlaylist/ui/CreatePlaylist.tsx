import { useState } from "react";

import { useCreatePlaylistMutation } from "../model/api/api";

export const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async () => {
    await createPlaylist({
      name,
    });
  };

  return (
    <div>
      Create new Playlist!
      {isLoading && <div>loading...</div>}
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <button disabled={isLoading} onClick={handleCreatePlaylist}>
        create
      </button>
    </div>
  );
};
