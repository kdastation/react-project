import { Article } from './article';

export type ArticleState = {
  isLoading: boolean,
  error: string | null | undefined,
  article: Article | null
};
