import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../consts/moduleName";

import { State } from "../types/State";
import { changeOrderMusic } from "../services/changeOrderMusic";

const initialState: State = {
  isLoading: false,
  error: null,
  data: null,
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(changeOrderMusic.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeOrderMusic.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(changeOrderMusic.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { actions, reducer } = slice;
