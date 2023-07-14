import { selectorArticlesAdapter } from "../slice/articlesSlice";
import { selectIsLoading } from "./selectIsLoading/selectIsLoading";

export const rootSelectorArticles = {
  selectorArticlesAdapter,
  selectIsLoading,
};
