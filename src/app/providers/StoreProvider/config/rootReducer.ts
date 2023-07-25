import { ReducersMapObject } from "@reduxjs/toolkit";
import { State } from "@/app/providers/StoreProvider/config/storeTypes";
import { articleReducer, MODULE_NAME_ARTICLE } from "@/entities/Article/ArticleById";
import { articlesReducer, MODULE_NAME_ARTICLES } from "@/entities/Article/Articles";
import {
  articleCommentsReducer,
  MODULE_NAME_ARTICLE_COMMENTS,
} from "@/entities/Comment/ArticleComments/articleComments";
import { MODULE_NAME_MUSICS, musicsReducer } from "@/entities/Music/Musics";
import { MODULE_NAME_USER_SLICE, userReducer } from "@/entities/User";
import {
  addCommentForArticleReducer,
  MODULE_NAME_ADD_COMMENT_FOR_ARTICLE,
} from "@/features/AddComment/addCommentForArticle";
import { deleteMusicReducer, MODULE_NAME_DELETE_MUSIC } from "@/features/DeleteMusic";
import { MODULE_NAME_EDITABLE_PROFILE_CARD } from "@/features/EditableProfileCard";
import { editableProfileCardReducer } from "@/features/EditableProfileCard/model/slice/editableProfileCardSlice";
import { filtersArticlesReducer, MODULE_NAME_FILTERS_ARTICLES } from "@/features/FiltersArticles";
import { changeOrderMusicReducer, MODULE_NAME_CHANGE_ORDER_MUSICS } from "@/features/OrderMusics";

export const rootReducer: ReducersMapObject<State> = {
  [MODULE_NAME_USER_SLICE]: userReducer,
  [MODULE_NAME_EDITABLE_PROFILE_CARD]: editableProfileCardReducer,
  [MODULE_NAME_ARTICLE]: articleReducer,
  [MODULE_NAME_ARTICLE_COMMENTS]: articleCommentsReducer,
  [MODULE_NAME_ADD_COMMENT_FOR_ARTICLE]: addCommentForArticleReducer,
  [MODULE_NAME_ARTICLES]: articlesReducer,
  [MODULE_NAME_FILTERS_ARTICLES]: filtersArticlesReducer,
  [MODULE_NAME_MUSICS]: musicsReducer,
  [MODULE_NAME_CHANGE_ORDER_MUSICS]: changeOrderMusicReducer,
  [MODULE_NAME_DELETE_MUSIC]: deleteMusicReducer,
};

export type KeysReducers = keyof ReducersMapObject<State>;
