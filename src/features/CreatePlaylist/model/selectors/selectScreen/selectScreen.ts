import { State } from "@/app/providers/StoreProvider";

export const selectScreen = ({ createPlaylist }: State) => createPlaylist?.sreen || "main";
