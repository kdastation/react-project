import { Article } from '@/entities/Article';
import { FC } from 'react';

type ArticleItemProps = {
  article: Article,
}

export const ArticleItem: FC<ArticleItemProps> = ({
  article,
}) => (
  <div>
    Card Article
    <p>{article.title}</p>
  </div>
);
