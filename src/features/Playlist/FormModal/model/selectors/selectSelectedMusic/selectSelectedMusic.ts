import { State } from "@/app/providers/StoreProvider";

export const selectSelectedMusic = ({ formPlaylist }: State) => formPlaylist?.selectedMusic || {};
