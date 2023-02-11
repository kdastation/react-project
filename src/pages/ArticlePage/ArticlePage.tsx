import { ArticleCard } from 'entities/Article';
import { ArticleCommentsList } from 'entities/Comment/ArticleComments/articleComments';

export const ArticlePage = () => {
  const id = '1';

  return (
    <div>
      <ArticleCard
        id={id}
      />
      <ArticleCommentsList
        articleId={id}
      />
    </div>
  );
};
