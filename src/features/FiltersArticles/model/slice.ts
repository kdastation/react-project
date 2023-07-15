import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../consts/moduleName";
import { State } from "../types/state";
import { typesSort, TypesSort } from "../types/typeSort";

const initialState: State = {
  search: "",
  typeSort: typesSort.TITLE,
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setSearch(state, { payload }: PayloadAction<string>) {
      state.search = payload;
    },
    setTypeSort(state, { payload }: PayloadAction<TypesSort>) {
      state.typeSort = payload;
    },
  },
});

export const { reducer } = slice;
export const { actions } = slice;
