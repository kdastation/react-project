import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Music } from "@/entities/Music";

import { MODULE_NAME } from "../consts/moduleName";
import { State } from "../types/State";
import { Screens } from "../types/Screens";
import { FormValues } from "../types/FormValues";

const initialState: State = {
  searchMusic: "",
  selectedMusic: {},
  sreen: "main",
  form: {
    name: "",
  },
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
    setName(state, { payload }: PayloadAction<FormValues["name"]>) {
      state.form.name = payload;
    },
    setInitialValuesForm(state, { payload = {} }: PayloadAction<DeepPartial<FormValues>>) {
      state.form = {
        ...initialState.form,
        ...payload,
      };
    },
  },
});

export const { reducer, actions } = slice;
