import { rtkApi } from "@/shared/api/rtkApi";

import { Playlist } from "../types/Playlist";

export const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query<Playlist[], void>({
      query: () => ({
        url: "/playlist",
      }),
    }),
  }),
});

export const { useGetPlaylistsQuery } = api;
