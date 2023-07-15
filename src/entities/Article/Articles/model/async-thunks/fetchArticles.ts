import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderSort } from "@/shared/types/OrderSort";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { MODULE_NAME } from "../consts/moduleName";

type Args = {
  search?: string;
  // TODO: Подвезти сюда тип
  typeSort?: string;
  order?: OrderSort;
};

export const fetchArticles = createAsyncThunk<Article[], Args | undefined, ThunkConfig<string>>(
  `${MODULE_NAME}/fetchArticles`,
  async (args, thunk) => {
    try {
      const search = args?.search || "";
      const typeSort = args?.typeSort || "views";
      const orderSort = args?.order || "asc";

      const receivedData = await thunk.extra.api.get("/articles", {
        params: {
          title_like: search,
          _sort: typeSort,
          _order: orderSort,
        },
      });

      return receivedData.data;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
