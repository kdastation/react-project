import { useSelector } from "react-redux";
import { ArticleItem, rootSelectorArticles } from "@/entities/Article/Articles";

export const ArticlesList = () => {
  const articles = useSelector(rootSelectorArticles.selectorArticlesAdapter.selectAll);

  const isLoading = useSelector(rootSelectorArticles.selectIsLoading);

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
