import { State } from "@/app/providers/StoreProvider";

export const selectUrl = ({ player }: State) => player?.url || "";
