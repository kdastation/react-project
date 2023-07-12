import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { CommentArticle } from '../../types/commentArticle';
import { MODULE_NAME } from '../../consts/moduleName';

export const fetchArticleComments = createAsyncThunk<CommentArticle[],
    { articleId: string | number },
    ThunkConfig<string>
    >(
      `${MODULE_NAME}/fetchArticleComments`,
      async ({ articleId }, thunk) => {
        try {
          const receivedData = await thunk.extra.api.get(`/comments?articleId=${articleId}`);
          return receivedData.data;
        } catch (error: any) {
          return thunk.rejectWithValue(error.message);
        }
      },
    );
