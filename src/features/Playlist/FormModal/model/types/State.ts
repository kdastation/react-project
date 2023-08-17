import { Music } from "@/entities/Music";
import { Screens } from "./Screens";

export type State = {
  searchMusic: string;
  selectedMusic: Record<string, Music>;
  sreen: Screens;
};
