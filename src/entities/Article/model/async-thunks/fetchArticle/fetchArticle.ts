import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { MODULE_NAME } from '../../consts/moduleName';
import { Article } from '../../types/article';

export const fetchArticle = createAsyncThunk<Article,
    { id: string | number },
    ThunkConfig<string>
    >(
      `${MODULE_NAME}/fetchArticle`,
      async ({ id }, thunk) => {
        try {
          const receivedData = await thunk.extra.api.get(`/articles/${id}`);

          if (!receivedData.data) {
            throw new Error('Нет данных');
          }

          return receivedData.data;
        } catch (error: any) {
          return thunk.rejectWithValue(error.message);
        }
      },
    );
