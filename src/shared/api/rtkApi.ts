import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { tags } from "./tags";

const baseURL = "http://localhost:8000";

export const rtkApi = createApi({
  reducerPath: "api",
  tagTypes: [...Object.values(tags)],
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", "lol");
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
