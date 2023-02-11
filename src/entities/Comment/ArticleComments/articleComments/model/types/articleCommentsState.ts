import { EntityState } from '@reduxjs/toolkit';
import { CommentArticle } from './commentArticle';

export type ArticleCommentsState = EntityState<CommentArticle> & {
  isLoading: boolean,
  error: string | null | undefined
}
