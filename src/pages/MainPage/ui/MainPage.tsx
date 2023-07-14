import React from "react";
import { ArticlesList } from "@/features/ArticlesList";
import { FiltersArticles } from "@/features/FiltersArticles";

const MainPage = () => {
  const a = 1;

  return (
    <div>
      <div>MAin PAge</div>
      <FiltersArticles />
      <ArticlesList />
    </div>
  );
};

export default MainPage;
