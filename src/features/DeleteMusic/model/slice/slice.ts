import { createSlice } from "@reduxjs/toolkit";

import { MODULE_NAME } from "../consts/moduleName";
import { deleteMusic } from "../services/deleteMusic";
import { State } from "../types/State";

const initialState: State = {
  isLoading: false,
  error: null,
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(deleteMusic.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteMusic.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteMusic.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reducer, actions } = slice;
