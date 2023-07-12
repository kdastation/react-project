import { ArticleCard } from '@/entities/Article/ArticleById';
import { ArticleCommentsList } from '@/entities/Comment/ArticleComments/articleComments';
import { AddCommentForArticle } from '@/features/AddComment/addCommentForArticle';

export const ArticlePage = () => {
  const id = '1';

  return (
    <div>
      <ArticleCard
        id={id}
      />
      <AddCommentForArticle
        articleId={id}
      />
      <ArticleCommentsList
        articleId={id}
      />
    </div>
  );
};
