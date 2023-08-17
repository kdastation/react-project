import { State } from "@/app/providers/StoreProvider";

export const selectSearchValue = ({ formPlaylist }: State) => formPlaylist?.searchMusic || "";
