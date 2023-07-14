import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";
import { MODULE_NAME } from "../consts/moduleName";

type Args = {
  search?: string;
};

export const fetchArticles = createAsyncThunk<
  Article[],
  Args | undefined,
  ThunkConfig<string>
>(`${MODULE_NAME}/fetchArticles`, async (args, thunk) => {
  try {
    const search = args?.search || "";

    const receivedData = await thunk.extra.api.get("/articles", {
      params: {
        title_like: search,
      },
    });

    return receivedData.data;
  } catch (error: any) {
    return thunk.rejectWithValue(error.message);
  }
});
