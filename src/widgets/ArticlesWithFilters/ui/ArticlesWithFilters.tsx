import { useEffect } from "react";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { fetchArticlesWithFilters, FiltersArticles } from "@/features/FiltersArticles";
import { ArticlesList } from "@/features/ArticlesList";

export const ArticlesWithFilters = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticlesWithFilters());
  }, []);

  return (
    <div>
      <FiltersArticles />
      <ArticlesList />
    </div>
  );
};
