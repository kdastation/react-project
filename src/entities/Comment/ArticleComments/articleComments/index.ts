import { articleCommentsReducer } from './model/slice/articleCommentsSlice';
import { ArticleCommentsState } from './model/types/articleCommentsState';
import { MODULE_NAME } from './model/consts/moduleName';
import { ArticleCommentsList } from './ui/ArticleCommentsList/ArticleCommentsList';

export {
  articleCommentsReducer,
  ArticleCommentsState,
  MODULE_NAME as MODULE_NAME_ARTICLE_COMMENTS,
  ArticleCommentsList,
};
