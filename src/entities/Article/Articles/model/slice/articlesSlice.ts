import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Article } from "@/entities/Article";
import { State } from "@/app/providers/StoreProvider/config/storeTypes";
import { fetchArticles } from "@/entities/Article/Articles/model/async-thunks/fetchArticles";
import { MODULE_NAME } from "../consts/moduleName";
import { ArticlesState } from "../types/state";

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const selectorArticlesAdapter = articlesAdapter.getSelectors<State>(
  ({ articles }) => articles || articlesAdapter.getInitialState(),
);

export const articlesSlice = createSlice({
  name: MODULE_NAME,
  initialState: articlesAdapter.getInitialState<ArticlesState>({
    ids: [],
    isLoading: false,
    isLoadingMore: false,
    entities: {},
    error: null,
    next: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      const payload = action.meta.arg;
      if (payload?.next) {
        state.isLoadingMore = true;
      } else {
        state.isLoading = true;
      }
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      if (payload.isMore) {
        state.isLoadingMore = false;
        articlesAdapter.setMany(state, payload.data);
      } else {
        state.isLoading = false;
        articlesAdapter.setAll(state, payload.data);
      }

      state.next = payload.next;
    });
    builder.addCase(fetchArticles.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions: articlesActions } = articlesSlice;
export const { reducer: articlesReducer } = articlesSlice;
