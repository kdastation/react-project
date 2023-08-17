import { Music } from "@/entities/Music";
import { Screens } from "./Screens";
import { FormValues } from "@/features/Playlist/FormModal/model/types/FormValues";

export type State = {
  searchMusic: string;
  selectedMusic: Record<string, Music>;
  sreen: Screens;
  form: FormValues;
};
