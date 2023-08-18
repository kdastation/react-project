import { selectUrl } from "./selectUrl/selectUrl";
import { selectPlaying } from "./selectPlaying/selectPlaying";
import { selectIsPauseByUrl } from "./selectIsPlayingByUrl/selectIsPauseByUrl";

export const rootSelector = {
  selectUrl,
  selectPlaying,
  selectIsPauseByUrl,
};
