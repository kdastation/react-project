import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../consts/moduleName";
import { State } from "../types/State";
import { fetchMusics } from "../services/fetchMusics";

const initialState: State = {
  isLoading: false,
  error: null,
  data: [],
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMusics.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMusics.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(fetchMusics.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { reducer, actions } = slice;
