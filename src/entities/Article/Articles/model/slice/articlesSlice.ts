import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Article } from '@/entities/Article';
import { State } from '@/app/providers/StoreProvider/config/storeTypes';
import { fetchArticles } from '@/entities/Article/Articles/model/async-thunks/fetchArticles';
import { MODULE_NAME } from '../consts/moduleName';
import { ArticlesState } from '../types/state';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const selectorArticlesAdapter = articlesAdapter.getSelectors<State>(({
  articles,
}) => articles || articlesAdapter.getInitialState());

export const articlesSlice = createSlice({
  name: MODULE_NAME,
  initialState: articlesAdapter.getInitialState<ArticlesState>({
    ids: [],
    isLoading: false,
    entities: {},
    error: null,
    page: 0,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      articlesAdapter.setMany(state, payload);
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
