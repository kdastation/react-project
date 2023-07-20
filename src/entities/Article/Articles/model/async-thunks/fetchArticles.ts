import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderSort } from "@/shared/types/OrderSort";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { MODULE_NAME } from "../consts/moduleName";
import { parseLinkHeader } from "@/shared/lib/api/parseLinkHeader";

type Args =
  | {
      search?: string;
      // TODO: Подвезти сюда тип
      typeSort?: string;
      order?: OrderSort;
      next?: never;
    }
  | {
      next: string;
      search?: never;
      typeSort?: never;
      order?: never;
    };

export const fetchArticles = createAsyncThunk<
  {
    data: Article[];
    next: string | null;
    isMore: boolean;
  },
  Args | undefined,
  ThunkConfig<string>
>(`${MODULE_NAME}/fetchArticles`, async (args, thunk) => {
  try {
    if (args?.next) {
      const receivedData = await thunk.extra.api.get(args.next);

      // TODO: add parse link header in middleware api
      return {
        data: receivedData.data,
        next: receivedData.headers.link ? parseLinkHeader(receivedData.headers.link).next : null,
        isMore: true,
      };
    }

    const search = args?.search || "";
    const typeSort = args?.typeSort || "views";
    const orderSort = args?.order || "asc";

    const receivedData = await thunk.extra.api.get<Article[]>("/articles", {
      params: {
        title_like: search,
        _sort: typeSort,
        _order: orderSort,
        _page: 1,
        _limit: 2,
      },
    });

    return {
      data: receivedData.data,
      next: receivedData.headers.link ? parseLinkHeader(receivedData.headers.link).next : null,
      isMore: false,
    };
  } catch (error: any) {
    return thunk.rejectWithValue(error.message);
  }
});
