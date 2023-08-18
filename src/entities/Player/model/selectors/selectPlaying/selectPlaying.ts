import { State } from "@/app/providers/StoreProvider";

export const selectPlaying = ({ player }: State) => player?.playing ?? false;
