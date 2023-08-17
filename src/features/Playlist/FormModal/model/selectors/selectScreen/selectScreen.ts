import { State } from "@/app/providers/StoreProvider";

export const selectScreen = ({ formPlaylist }: State) => formPlaylist?.sreen || "main";
