import { State } from "@/app/providers/StoreProvider/config/storeTypes";

export const selectTypeSort = ({ filtersArticles }: State) => filtersArticles?.typeSort;
