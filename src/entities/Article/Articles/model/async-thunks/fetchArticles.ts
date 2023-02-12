import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { MODULE_NAME } from '../consts/moduleName';

export const fetchArticles = createAsyncThunk<Article[],
    void,
    ThunkConfig<string>
>(
  `${MODULE_NAME}/fetchArticles`,
  async (_, thunk) => {
    try {
      const receivedData = await thunk.extra.api.get('/articles');
      return receivedData.data;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
