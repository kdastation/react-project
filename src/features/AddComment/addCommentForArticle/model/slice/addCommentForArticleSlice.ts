import { createSlice } from '@reduxjs/toolkit';
import { MODULE_NAME } from '../consts/moduleName';
import { AddCommentForArticleState } from '../types/state';
import { addCommentForArticle } from '../async-thunks/addCommentForArticle/addCommentForArticle';

const initialState: AddCommentForArticleState = {
  isLoading: false,
  error: null,
  addedComment: null,
};

export const addCommentForArticleSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCommentForArticle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addCommentForArticle.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.addedComment = payload;
    });
    builder.addCase(addCommentForArticle.rejected, (state, { payload }) => {
      state.isLoading = true;
      state.error = payload;
    });
  },
});

export const { actions: addCommentForArticleActions } = addCommentForArticleSlice;
export const { reducer: addCommentForArticleReducer } = addCommentForArticleSlice;
