import { Music } from "@/entities/Music/model/types/Music";
import { rtkApi, tags } from "@/shared/api";

type Args = {
  search?: string;
} | void;

export const api = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getMusic: build.query<Music[], Args>({
      query: (args) => ({
        url: "/music",
        params: {
          text_like: args?.search || "",
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: tags.MUSIC, id })),
              { type: tags.MUSIC, id: "LIST" },
            ]
          : [{ type: tags.MUSIC, id: "LIST" }],
    }),
  }),
});

export const { useGetMusicQuery } = api;
