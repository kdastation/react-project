import { tags } from "@/shared/api";
import { rtkApi } from "@/shared/api/rtkApi";

import { Playlist } from "../types/Playlist";

export const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query<Playlist[], void>({
      query: () => ({
        url: "/playlist",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: tags.PLAYLIST_TAG, id })),
              { type: tags.PLAYLIST_TAG, id: "LIST" },
            ]
          : [{ type: tags.PLAYLIST_TAG, id: "LIST" }],
    }),
  }),
});

export const { useGetPlaylistsQuery } = api;
