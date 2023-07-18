import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderSort } from "@/shared/types/OrderSort";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { MODULE_NAME } from "../consts/moduleName";

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

function parseLinkHeader(linkHeader: string) {
  const linkHeadersArray = linkHeader.split(", ").map((header) => header.split("; "));
  const linkHeadersMap = linkHeadersArray.map((header) => {
    const thisHeaderRel = header[1].replace(/"/g, "").replace("rel=", "");
    const thisHeaderUrl = header[0].slice(1, -1);
    return [thisHeaderRel, thisHeaderUrl];
  });
  return Object.fromEntries(linkHeadersMap);
}

export const fetchArticles = createAsyncThunk<
  {
    data: Article[];
    next: string | null;
  },
  Args | undefined,
  ThunkConfig<string>
>(`${MODULE_NAME}/fetchArticles`, async (args, thunk) => {
  try {
    if (args?.next) {
      const receivedData = await thunk.extra.api.get(args.next);

      return {
        data: receivedData.data,
        next: parseLinkHeader(receivedData.headers.link).next,
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
      next: parseLinkHeader(receivedData.headers.link).next,
    };
  } catch (error: any) {
    return thunk.rejectWithValue(error.message);
  }
});
