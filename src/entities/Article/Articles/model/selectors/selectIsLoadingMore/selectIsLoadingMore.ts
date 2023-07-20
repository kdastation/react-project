import { State } from "@/app/providers/StoreProvider";

export const selectIsLoadingMore = ({ articles }: State) => articles?.isLoadingMore;

console.log("a");
