import { State } from "@/app/providers/StoreProvider";

export const selectName = ({ formPlaylist }: State) => formPlaylist?.form.name || "";
