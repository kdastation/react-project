import { State } from "@/app/providers/StoreProvider";

export const selectDescription = ({ formPlaylist }: State) => formPlaylist?.form.description || "";
