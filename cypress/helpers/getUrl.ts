import { getApiUrl } from "./getApiUrl";

export const getUrl = (path: string) => `${getApiUrl()}${path}`;
