import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  fetchArticles,
  rootSelectorArticles,
  ArticleItem,
} from '@/entities/Article/Articles';

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
