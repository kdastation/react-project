import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';
import {
  fetchArticles,
  rootSelectorArticles,
  ArticleItem,
} from '@/entities/Article/Articles';
import { useSelector } from 'react-redux';

export const ArticlesWithFilters = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(rootSelectorArticles.selectorArticlesAdapter.selectAll);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
        />
      ))}
    </div>
  );
};
