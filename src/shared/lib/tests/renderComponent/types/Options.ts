import { Theme } from "@/app/providers/ThemeProvider";
import { StoreProviderProps } from "@/app/providers/StoreProvider";

export type Options = {
  route?: string;
  initialState?: StoreProviderProps["initialState"];
  asyncReducers?: StoreProviderProps["asyncReducers"];
  theme?: Theme;
};
