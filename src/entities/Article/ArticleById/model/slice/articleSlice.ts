import { createSlice } from '@reduxjs/toolkit';
import { fetchArticle } from '../async-thunks/fetchArticle/fetchArticle';
import { MODULE_NAME } from '../consts/moduleName';
import { ArticleState } from '../types/state';

const initialState: ArticleState = {
  error: null,
  isLoading: false,
  article: null,
};

export const articleSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticle.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.article = payload;
    });
    builder.addCase(fetchArticle.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
