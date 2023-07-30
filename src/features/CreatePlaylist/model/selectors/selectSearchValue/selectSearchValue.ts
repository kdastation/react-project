import { State } from "@/app/providers/StoreProvider";

export const selectSearchValue = ({ createPlaylist }: State) => createPlaylist?.searchMusic || "";
