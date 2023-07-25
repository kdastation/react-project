import { AxiosInstance } from "axios";

import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { createReduxStore } from "@/app/providers/StoreProvider";
import { KeysReducers } from "@/app/providers/StoreProvider/config/rootReducer";
import { ArticleState, MODULE_NAME_ARTICLE } from "@/entities/Article/ArticleById";
import { ArticlesState, MODULE_NAME_ARTICLES } from "@/entities/Article/Articles";
import {
  ArticleCommentsState,
  MODULE_NAME_ARTICLE_COMMENTS,
} from "@/entities/Comment/ArticleComments/articleComments";
import { MODULE_NAME_MUSICS, MusicsState } from "@/entities/Music/Musics";
import { UserSliceState } from "@/entities/User";
import {
  AddCommentForArticleState,
  MODULE_NAME_ADD_COMMENT_FOR_ARTICLE,
} from "@/features/AddComment/addCommentForArticle";
import { DeleteMusicState, MODULE_NAME_DELETE_MUSIC } from "@/features/DeleteMusic";
import {
  EditableProfileCardSliceState,
  MODULE_NAME_EDITABLE_PROFILE_CARD,
} from "@/features/EditableProfileCard";
import { FiltersArticlesState, MODULE_NAME_FILTERS_ARTICLES } from "@/features/FiltersArticles";
import { LoginByUserNameSliceState } from "@/features/LoginByUserName/index";
import { ChangeOrderMusicState, MODULE_NAME_CHANGE_ORDER_MUSICS } from "@/features/OrderMusics";

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
  [MODULE_NAME_DELETE_MUSIC]: DeleteMusicState;
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
