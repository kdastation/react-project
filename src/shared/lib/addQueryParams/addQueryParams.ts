import { getQueryParams } from "./getQueryParams/getQueryParams";

// TODO: Add tests
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  window.history.pushState(null, "", getQueryParams(params));
};
