import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentArticle } from 'entities/Comment/ArticleComments/articleComments';
import { rootSelectorUser } from 'entities/User';
import { MODULE_NAME } from '../../consts/moduleName';

export const addCommentForArticle = createAsyncThunk<
  CommentArticle,
  { articleId: string | number, text: string },
  ThunkConfig<string>
>(
  `${MODULE_NAME}/fetchArticleComments`,
  async ({
    articleId,
    text,
  }, thunk) => {
    try {
      const userId = rootSelectorUser.selectUserId(thunk.getState());

      if (!userId) {
        throw new Error('Нет пользователя');
      }

      const receivedData = await thunk.extra.api.post('/comments', {
        articleId,
        text,
        user: userId,
      });

      return receivedData.data;
    } catch (error: any) {
      return thunk.rejectWithValue(error.message);
    }
  },
);
