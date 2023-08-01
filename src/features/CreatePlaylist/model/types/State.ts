import { Music } from "@/entities/Music";

export type Screens = "main" | "search-music";

export type State = {
  searchMusic: string;
  selectedMusic: Record<string, Music>;
  sreen: Screens;
};
