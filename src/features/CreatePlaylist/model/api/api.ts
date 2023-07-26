import { Playlist } from "@/entities/Playlist";
import { rtkApi } from "@/shared/api/rtkApi";

type Args = {
  name: string;
};

const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createPlaylist: build.mutation<Playlist, Args>({
      query: (arg) => ({
        url: "/playlist",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const { useCreatePlaylistMutation } = api;
