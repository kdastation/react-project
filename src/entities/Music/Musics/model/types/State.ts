import { Music } from "@/entities/Music/model/types/Music";

export type State = {
  isLoading: boolean;
  error: string | null | undefined;
  data: Music[];
};
