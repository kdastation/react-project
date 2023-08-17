import { api } from "./api";

export type ArgsApi = {
  host?: string;
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  params?: Record<string, unknown>;
  body?: FormData | Record<string, any>;
};

export type GetResponse = ArgsApi;

export const getResponse = async <Result>({
  host = "http://localhost:8000",
  url,
  method,
  headers,
  params,
  body,
}: GetResponse) => {
  const response = await api({
    method,
    params,
    headers,
    data: body,
    baseURL: host,
    url,
  });
  return {
    result: response.data as Result,
    response,
  };
};
