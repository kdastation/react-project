import { State } from "@/app/providers/StoreProvider/config/storeTypes";

export const selectOrderSort = ({ filtersArticles }: State) => filtersArticles?.orderSort || "asc";
