import { StoreProviderProps } from "@/app/providers/StoreProvider";
import { Theme } from "@/app/providers/ThemeProvider";

export type Options = {
  route?: string;
  initialState?: StoreProviderProps["initialState"];
  asyncReducers?: StoreProviderProps["asyncReducers"];
  theme?: Theme;
};
