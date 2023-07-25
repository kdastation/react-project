import { arrayMove } from "@dnd-kit/sortable";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Id } from "@/shared/types/Id";

import { MODULE_NAME } from "../consts/moduleName";
import { fetchMusics } from "../services/fetchMusics";
import { State } from "../types/State";

const initialState: State = {
  isLoading: false,
  error: null,
  data: [],
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    changeOrders(
      state,
      {
        payload,
      }: PayloadAction<{
        id1: number;
        id2: number;
      }>,
    ) {
      const { id1, id2 } = payload;

      const indexMusic1 = state.data.findIndex((music) => music.id === id1);
      const indexMusic2 = state.data.findIndex((music) => music.id === id2);

      state.data = arrayMove(state.data, indexMusic1, indexMusic2);
    },
    removeOne(state, { payload }: PayloadAction<{ id: Id }>) {
      state.data = state.data.filter((music) => music.id !== payload.id);
    },
  },
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
