export {
  actions as filtersArticlesActions,
  reducer as filtersArticlesReducer,
} from "./model/slice/slice";

export { MODULE_NAME as MODULE_NAME_FILTERS_ARTICLES } from "./model/consts/moduleName";

export type { State as FiltersArticlesState } from "./model/types/state";

export { FiltersArticles } from "./ui/FiltersArticles/FiltersArticles";

export { fetchArticlesWithFilters } from "./model/services/fetchArticlesWithFilters";
