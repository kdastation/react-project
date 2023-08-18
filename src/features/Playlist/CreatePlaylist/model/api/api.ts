import { Playlist } from "@/entities/Playlist";
import { tags } from "@/shared/api";
import { rtkApi } from "@/shared/api/rtkApi";

type Args = DeepPartial<Omit<Playlist, "id" | "name">> & Pick<Playlist, "name">;

const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    createPlaylist: build.mutation<Playlist, Args>({
      query: (arg) => ({
        url: "/playlist",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: [{ type: tags.PLAYLIST_TAG, id: "LIST" }],
    }),
  }),
});

export const { useCreatePlaylistMutation } = api;
