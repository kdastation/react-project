import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Music } from "@/entities/Music";

import { MODULE_NAME } from "../consts/moduleName";
import { Screens, State } from "../types/State";

const initialState: State = {
  searchMusic: "",
  selectedMusic: {},
  sreen: "main",
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setSearch(state, { payload }: PayloadAction<string>) {
      state.searchMusic = payload;
    },
    selectMusic(state, { payload }: PayloadAction<Music>) {
      const isAdded = Boolean(state.selectedMusic[payload.id]);

      if (isAdded) {
        delete state.selectedMusic[payload.id];
      } else {
        state.selectedMusic[payload.id] = payload;
      }
    },
    setScreen(state, { payload }: PayloadAction<Screens>) {
      state.sreen = payload;
    },
  },
});

export const { reducer, actions } = slice;
