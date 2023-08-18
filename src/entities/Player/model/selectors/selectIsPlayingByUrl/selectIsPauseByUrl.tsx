import { createSelector } from "@reduxjs/toolkit";
import { selectPlaying } from "../selectPlaying/selectPlaying";
import { selectUrl } from "../selectUrl/selectUrl";

export const selectIsPauseByUrl = createSelector(
  [selectPlaying, selectUrl, (_, url: string) => url],
  (playing, currentUrl, url) => currentUrl !== url || !playing,
);
