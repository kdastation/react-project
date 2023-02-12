import { CommentArticle } from 'entities/Comment/ArticleComments/articleComments';

export type AddCommentForArticleState = {
  isLoading: boolean,
  error: string | null | undefined,
  addedComment: CommentArticle | null
}
