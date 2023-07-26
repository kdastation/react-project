import { useState } from "react";

import { playlistApi } from "@/entities/Playlist";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

import { useCreatePlaylistMutation } from "../model/api/api";

export const CreatePlaylist = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [createPlaylist, { isLoading }] = useCreatePlaylistMutation();

  const handleCreatePlaylist = async () => {
    const data = await createPlaylist({
      name,
    }).unwrap();

    dispatch(
      playlistApi.util.updateQueryData("getPlaylists", undefined, (playlists) => {
        playlists.push(data);
        return playlists;
      }),
    );
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
