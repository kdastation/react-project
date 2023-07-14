import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../consts/moduleName";
import { State } from "../types/types";

const initialState: State = {
  search: "",
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
  },
});

export const { reducer } = slice;
export const { actions } = slice;
