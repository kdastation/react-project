import { Music } from "@/entities/Music";

export type State = {
  searchMusic: string;
  selectedMusic: Record<string, Music>;
};
