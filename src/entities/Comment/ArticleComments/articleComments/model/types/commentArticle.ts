import { Comment } from 'entities/Comment/model/types/comment';

export type CommentArticle = Comment & {
  articleId: string
}
