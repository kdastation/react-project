import { createApi } from "@reduxjs/toolkit/query/react";

import { ArgsBaseQuery, getBaseQuery } from "./getBaseQuery";
import { tags } from "./tags";

export const rtkApi = createApi({
  reducerPath: "api",
  tagTypes: [...Object.values(tags)],
  baseQuery: getBaseQuery<ArgsBaseQuery>(),
  endpoints: (builder) => ({}),
});
