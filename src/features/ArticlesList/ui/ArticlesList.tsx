import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  ArticleItem,
  fetchArticles,
  rootSelectorArticles,
} from "@/entities/Article/Articles";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const ArticlesList = () => {
  const dispatch = useAppDispatch();

  const articles = useSelector(
    rootSelectorArticles.selectorArticlesAdapter.selectAll,
  );

  const isLoading = useSelector(rootSelectorArticles.selectIsLoading);

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};
