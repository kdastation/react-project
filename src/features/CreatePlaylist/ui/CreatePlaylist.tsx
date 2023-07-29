import { useState } from "react";

import { playlistApi } from "@/entities/Playlist";
import { api } from "@/entities/Playlist/model/api/api";
import { tags } from "@/shared/api";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { useCreatePlaylistMutation } from "../model/api/api";

export const CreatePlaylist = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async () => {
    try {
      const data = await createPlaylist({
        name,
      }).unwrap();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
