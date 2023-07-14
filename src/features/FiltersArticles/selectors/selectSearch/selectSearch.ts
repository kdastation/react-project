import { State } from "@/app/providers/StoreProvider/config/storeTypes";

export const selectSearch = ({ filtersArticles }: State) =>
  filtersArticles.search;
