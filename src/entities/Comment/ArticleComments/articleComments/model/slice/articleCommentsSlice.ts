import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider/config/storeTypes';
import { MODULE_NAME } from '../consts/moduleName';
import { CommentArticle } from '../types/commentArticle';
import { ArticleCommentsState } from '../types/articleCommentsState';
import {
  fetchArticleComments,
} from '../async-thunks/fetchArticleComments/fetchArticleComments';

const articleCommentsAdapter = createEntityAdapter<CommentArticle>({
  selectId: (comment) => comment.id,
});

export const selectorArticleComments = articleCommentsAdapter.getSelectors<State>(
  ({
    articleComments,
  }) => articleComments || articleCommentsAdapter.getInitialState(),
);

export const articleCommentsSlice = createSlice({
  name: MODULE_NAME,
  initialState: articleCommentsAdapter.getInitialState<ArticleCommentsState>({
    ids: [],
    isLoading: false,
    entities: {},
    error: null,
  }),
  reducers: {
    addComment(state, { payload }: PayloadAction<CommentArticle>) {
      articleCommentsAdapter.addOne(state, payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticleComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticleComments.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      articleCommentsAdapter.setAll(state, payload);
    });
    builder.addCase(fetchArticleComments.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: articleCommentsActions } = articleCommentsSlice;
export const { reducer: articleCommentsReducer } = articleCommentsSlice;
