import { State } from "@/app/providers/StoreProvider";

export const selectSelectedMusic = ({ createPlaylist }: State) =>
  createPlaylist?.selectedMusic || {};
