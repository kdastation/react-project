import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { MODULE_NAME } from "../consts/moduleName";
import { State } from "../types/State";

const initialState: State = {
  searchMusic: "",
  selectedMusic: {},
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setSearch(state, { payload }: PayloadAction<string>) {
      state.searchMusic = payload;
    },
  },
});

export const { reducer, actions } = slice;
