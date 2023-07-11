import {
  articleCommentsReducer,
  articleCommentsActions,
} from './model/slice/articleCommentsSlice';
import type { ArticleCommentsState } from './model/types/articleCommentsState';
import { MODULE_NAME } from './model/consts/moduleName';
import { ArticleCommentsList } from './ui/ArticleCommentsList/ArticleCommentsList';
import type { CommentArticle } from './model/types/commentArticle';

export {
  articleCommentsReducer,
  ArticleCommentsState,
  MODULE_NAME as MODULE_NAME_ARTICLE_COMMENTS,
  ArticleCommentsList,
  CommentArticle,
  articleCommentsActions,
};
