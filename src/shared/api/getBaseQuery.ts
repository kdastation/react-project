import { BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";

import { ArgsApi, getResponse } from "./getResponse";

export type BaseQueryArgs<Meta> = {
  meta?: Meta;
};

export type ArgsBaseQuery = ArgsApi;

/**
 * Кастомной апи для rtk query
 * (аналог базового fetchBaseQuery)
 * https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery
 * @param meta
 */
export const getBaseQuery =
  <
    Args extends ArgsBaseQuery = ArgsBaseQuery,
    Result = unknown,
    DefinitionExtraOptions = Record<string, unknown>,
    Meta = Record<string, unknown>,
  >({ meta }: BaseQueryArgs<Meta> = {}): BaseQueryFn<
    Args,
    Result,
    unknown,
    DefinitionExtraOptions,
    Meta
  > =>
  async (args, api, extraOptions) => {
    try {
      const { result } = await getResponse<Result>({
        ...args,
      });

      return {
        data: result,
      };
    } catch (err: any) {
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
        meta,
      };
    }
  };
