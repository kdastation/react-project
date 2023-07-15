import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchArticles } from "@/entities/Article/Articles";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { MODULE_NAME } from "../consts/moduleName";
import { rootSelector } from "../../selectors/rootSelector";
import { addQueryParams } from "@/shared/lib/addQueryParams";

export const fetchArticlesWithFilters = createAsyncThunk<void, void, ThunkConfig<string>>(
  `${MODULE_NAME}/fetchArticlesWithFilters`,
  async (_, thunk) => {
    const search = rootSelector.selectSearch(thunk.getState());
    const typeSort = rootSelector.selectTypeSort(thunk.getState());
    const order = rootSelector.selectOrderSort(thunk.getState());

    addQueryParams({
      search,
      typeSort,
      order,
    });

    await thunk.dispatch(
      fetchArticles({
        search,
        typeSort,
        order,
      }),
    );
  },
);
