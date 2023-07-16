import { ReducersMapObject } from "@reduxjs/toolkit";
import { Theme } from "../../../../../app/providers/ThemeProvider/lib/ThemeContext";
import { State } from "@/app/providers/StoreProvider/config/storeTypes";

export type Options = {
  route?: string;
  initialState?: DeepPartial<State>;
  asyncReducers?: DeepPartial<ReducersMapObject<State>>;
  theme?: Theme;
};
