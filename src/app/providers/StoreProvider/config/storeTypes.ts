import { UserSliceState } from 'entities/User';
import { LoginByUserNameSliceState } from 'features/LoginByUserName/index';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { KeysReducers } from 'app/providers/StoreProvider/config/rootReducer';
import { createReduxStore } from 'app/providers/StoreProvider';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import {
  MODULE_NAME_EDITABLE_PROFILE_CARD,
  EditableProfileCardSliceState,
} from 'features/EditableProfileCard';
import { ArticleState, MODULE_NAME_ARTICLE } from 'entities/Article';
import {
  MODULE_NAME_ARTICLE_COMMENTS,
  ArticleCommentsState,
} from 'entities/Comment/ArticleComments/articleComments';
import {
  MODULE_NAME_ADD_COMMENT_FOR_ARTICLE,
  AddCommentForArticleState,
} from 'features/AddComment/addCommentForArticle';

export type State = {
  user: UserSliceState,

  // Асинхронные редьюсеры
  loginByUserName?: LoginByUserNameSliceState,
  [MODULE_NAME_EDITABLE_PROFILE_CARD]: EditableProfileCardSliceState,
  [MODULE_NAME_ARTICLE]: ArticleState,
  [MODULE_NAME_ARTICLE_COMMENTS]: ArticleCommentsState,
  [MODULE_NAME_ADD_COMMENT_FOR_ARTICLE]: AddCommentForArticleState
}

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<State>,
  add: (key: KeysReducers, reducer: Reducer) => void,
  reduce: (state: State, action: AnyAction) => CombinedState<State>,
  remove: (key: KeysReducers) => void
}

export type ReduxStoreWithReducerManager = EnhancedStore<State> & {
  reducerManager: ReducerManager
}

export type ThunkExtraArgs = {
  api: AxiosInstance,
  navigate?: NavigateFunction
}

export type ThunkConfig<T> = {
   rejectValue: T,
   state: State
   extra: ThunkExtraArgs
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
