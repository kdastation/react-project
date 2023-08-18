import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MODULE_NAME } from "../consts/moduleName";
import { State } from "../types/State";

const initialState: State = {
  url: "",
  volume: 40,
  playing: false,
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setUrl(state, { payload }: PayloadAction<string>) {
      state.url = payload;
    },
    setPlaying(state, { payload }: PayloadAction<boolean>) {
      state.playing = payload;
    },
  },
});

export const { reducer, actions } = slice;
