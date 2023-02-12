import { ReducersMapObject } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider/config/storeTypes';
import { MODULE_NAME_USER_SLICE, userReducer } from 'entities/User';
import { MODULE_NAME_EDITABLE_PROFILE_CARD } from 'features/EditableProfileCard';
import {
  editableProfileCardReducer,
} from 'features/EditableProfileCard/model/slice/editableProfileCardSlice';
import {
  MODULE_NAME_ARTICLE,
  articleReducer,
} from 'entities/Article/ArticleById';
import {
  MODULE_NAME_ARTICLE_COMMENTS,
  articleCommentsReducer,
} from 'entities/Comment/ArticleComments/articleComments';
import {
  MODULE_NAME_ADD_COMMENT_FOR_ARTICLE,
  addCommentForArticleReducer,
} from 'features/AddComment/addCommentForArticle';
import {
  MODULE_NAME_ARTICLES,
  articlesReducer,
} from 'entities/Article/Articles';

export const rootReducer: ReducersMapObject<State> = {
  [MODULE_NAME_USER_SLICE]: userReducer,
  [MODULE_NAME_EDITABLE_PROFILE_CARD]: editableProfileCardReducer,
  [MODULE_NAME_ARTICLE]: articleReducer,
  [MODULE_NAME_ARTICLE_COMMENTS]: articleCommentsReducer,
  [MODULE_NAME_ADD_COMMENT_FOR_ARTICLE]: addCommentForArticleReducer,
  [MODULE_NAME_ARTICLES]: articlesReducer,
};

export type KeysReducers = keyof ReducersMapObject<State>
