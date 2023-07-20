import { selectorArticlesAdapter } from "../slice/articlesSlice";
import { selectIsLoading } from "./selectIsLoading/selectIsLoading";
import { selectNext } from "./selectNext/selectNext";
import { selectIsLoadingMore } from "./selectIsLoadingMore/selectIsLoadingMore";

export const rootSelectorArticles = {
  selectorArticlesAdapter,
  selectIsLoading,
  selectNext,
  selectIsLoadingMore,
};
