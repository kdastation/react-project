import { FC } from "react";
import { Provider } from "react-redux";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import { State } from "../config/storeTypes";

type StoreProviderProps = {
  initialState?: State;
  asyncReducers?: DeepPartial<ReducersMapObject<State>>;
};

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState, asyncReducers as ReducersMapObject<State>);

  return <Provider store={store}>{children}</Provider>;
};
