import { rtkApi, tags } from "@/shared/api";
import { Id } from "@/shared/types/Id";
import { Playlist } from "@/entities/Playlist";

export const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    editPlaylist: build.mutation<Playlist, DeepPartial<Playlist> & { id: Id }>({
      query: ({ id, ...body }) => ({
        url: `/playlist/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (res) => [{ type: tags.PLAYLIST_TAG, id: res?.id }],
    }),
  }),
});

export const { useEditPlaylistMutation } = api;
