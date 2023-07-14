export {
  actions as filtersArticlesActions,
  reducer as filtersArticlesReducer,
} from "./model/slice";

export { MODULE_NAME as MODULE_NAME_FILTERS_ARTICLES } from "./consts/moduleName";

export { rootSelector } from "./selectors/rootSelector";

export type { State as FiltersArticlesState } from "./types/types";

export { FiltersArticles } from "./ui/FiltersArticles/FiltersArticles";
