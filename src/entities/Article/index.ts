import { Article } from './model/types/article';
import { ArticleState } from './model/types/state';
import { MODULE_NAME } from './model/consts/moduleName';
import { ArticleCard } from './ui/ArticleCard/ArticleCard';
import { articleReducer } from './model/slice/articleSlice';

export {
  Article,
  ArticleState,
  ArticleCard,
  MODULE_NAME as MODULE_NAME_ARTICLE,
  articleReducer,
};
