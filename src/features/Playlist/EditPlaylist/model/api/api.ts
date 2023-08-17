import { rtkApi, tags } from "@/shared/api";
import { Id } from "@/shared/types/Id";

type Args = {
  name: string;
};
export const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    editPlaylist: build.mutation<void, DeepPartial<Args> & { id: Id }>({
      query: ({ id, ...body }) => ({
        url: `/playlist/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: [{ type: tags.PLAYLIST_TAG }],
    }),
  }),
});

export const { useEditPlaylistMutation } = api;
