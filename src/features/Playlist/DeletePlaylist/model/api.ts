import { rtkApi, tags } from "@/shared/api";
import { Id } from "@/shared/types/Id";

export const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    deletePlaylist: build.mutation<void, Id>({
      query: (id) => ({
        url: `/playlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: tags.PLAYLIST_TAG, id: "LIST" }],
    }),
  }),
});

export const { useDeletePlaylistMutation } = api;
