import { createSlice } from "@reduxjs/toolkit";
import { MODULE_NAME } from "../consts/moduleName";
import { SliceState } from "./types";

const initialState: SliceState = {
  search: "",
};

export const slice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
});

export const { reducer } = slice;
export const { actions } = slice;
