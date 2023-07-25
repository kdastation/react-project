import { State } from "@/app/providers/StoreProvider";

export const selectMusics = ({ musics }: State) => musics?.data || [];
