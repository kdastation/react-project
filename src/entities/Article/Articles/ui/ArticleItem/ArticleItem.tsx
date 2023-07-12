import { FC } from 'react';
import { Article } from '@/entities/Article';

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
