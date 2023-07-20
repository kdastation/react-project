import { FiltersArticles } from "@/features/FiltersArticles";
import { Articles } from "./Articles/Articles";

export const ArticlesWithFilters = () => (
  <div>
    <FiltersArticles />
    <Articles />
  </div>
);
