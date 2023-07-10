import { Article } from '../../../model/types/article';

export type ArticleState = {
  isLoading: boolean,
  error: string | null | undefined,
  article: Article | null
};
