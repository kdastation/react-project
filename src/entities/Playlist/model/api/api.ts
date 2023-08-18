import { tags } from "@/shared/api";
import { rtkApi } from "@/shared/api/rtkApi";

import { Playlist } from "../types/Playlist";
import { Id } from "@/shared/types/Id";

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
    getPlaylist: build.query<Playlist, Id>({
      query: (id) => ({
        url: `/playlist/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: tags.PLAYLIST_TAG, id }],
    }),
  }),
});

export const { useGetPlaylistsQuery, useGetPlaylistQuery } = api;
