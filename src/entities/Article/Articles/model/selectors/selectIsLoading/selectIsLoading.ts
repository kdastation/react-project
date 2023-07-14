import { State } from "@/app/providers/StoreProvider/config/storeTypes";

export const selectIsLoading = ({ articles }: State) => articles?.isLoading;
