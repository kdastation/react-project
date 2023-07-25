import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { UserSliceState } from "@/entities/User";
import { LoginByUserNameSliceState } from "@/features/LoginByUserName/index";
import { KeysReducers } from "@/app/providers/StoreProvider/config/rootReducer";
import { createReduxStore } from "@/app/providers/StoreProvider";
import {
  MODULE_NAME_EDITABLE_PROFILE_CARD,
  EditableProfileCardSliceState,
} from "@/features/EditableProfileCard";
import { ArticleState, MODULE_NAME_ARTICLE } from "@/entities/Article/ArticleById";
import {
  MODULE_NAME_ARTICLE_COMMENTS,
  ArticleCommentsState,
} from "@/entities/Comment/ArticleComments/articleComments";
import {
  MODULE_NAME_ADD_COMMENT_FOR_ARTICLE,
  AddCommentForArticleState,
} from "@/features/AddComment/addCommentForArticle";
import { ArticlesState, MODULE_NAME_ARTICLES } from "@/entities/Article/Articles";
import { FiltersArticlesState, MODULE_NAME_FILTERS_ARTICLES } from "@/features/FiltersArticles";
import { MODULE_NAME_MUSICS, MusicsState } from "@/entities/Music/Musics";
import { MODULE_NAME_CHANGE_ORDER_MUSICS, ChangeOrderMusicState } from "@/features/OrderMusics";

export type State = {
  user: UserSliceState;

  // Асинхронные редьюсеры
  loginByUserName?: LoginByUserNameSliceState;
  [MODULE_NAME_EDITABLE_PROFILE_CARD]: EditableProfileCardSliceState;
  [MODULE_NAME_ARTICLE]: ArticleState;
  [MODULE_NAME_ARTICLE_COMMENTS]: ArticleCommentsState;
  [MODULE_NAME_ADD_COMMENT_FOR_ARTICLE]: AddCommentForArticleState;
  [MODULE_NAME_ARTICLES]: ArticlesState;
  [MODULE_NAME_FILTERS_ARTICLES]: FiltersArticlesState;
  [MODULE_NAME_MUSICS]: MusicsState;
  [MODULE_NAME_CHANGE_ORDER_MUSICS]: ChangeOrderMusicState;
};

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<State>;
  add: (key: KeysReducers, reducer: Reducer) => void;
  reduce: (state: State, action: AnyAction) => CombinedState<State>;
  remove: (key: KeysReducers) => void;
};

export type ReduxStoreWithReducerManager = EnhancedStore<State> & {
  reducerManager: ReducerManager;
};

export type ThunkExtraArgs = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  state: State;
  extra: ThunkExtraArgs;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
