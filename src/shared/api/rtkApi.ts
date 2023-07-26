import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "http://localhost:8000";

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (headers) => {
      headers.set("Authorization", "lol");
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
