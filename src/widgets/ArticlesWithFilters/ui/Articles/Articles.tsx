import { useEffect } from "react";
import { useSelector } from "react-redux";

import { ArticleItem, fetchArticles, rootSelectorArticles } from "@/entities/Article/Articles";
import { fetchArticlesWithFilters } from "@/features/FiltersArticles";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useVisibleObserver } from "@/shared/lib/hooks/useVisibleObserver/useVisibleObserver";

export const Articles = () => {
  const dispatch = useAppDispatch();
  const articles = useSelector(rootSelectorArticles.selectorArticlesAdapter.selectAll);
  const isLoading = useSelector(rootSelectorArticles.selectIsLoading);
  const isLoadingMore = useSelector(rootSelectorArticles.selectIsLoadingMore);
  const next = useSelector(rootSelectorArticles.selectNext);

  const fetchMoreArticles = () => {
    const isReadyFetch = !isLoading && next && !isLoadingMore;

    if (isReadyFetch) {
      dispatch(
        fetchArticles({
          next,
        }),
      );
    }
  };

  const { ref } = useVisibleObserver({
    callback: () => {
      fetchMoreArticles();
    },
  });

  useEffect(() => {
    dispatch(fetchArticlesWithFilters());
  }, []);

  if (isLoading) {
    return <div>first loading...</div>;
  }

  return (
    <div data-testid="ArticlesList">
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
      {isLoadingMore && <div>loading..</div>}
      <div ref={ref} />
    </div>
  );
};
