import React, { FC } from "react";
import { Provider } from "react-redux";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { createReduxStore } from "../config/store";
import { State } from "../config/storeTypes";

export type StoreProviderProps = {
  initialState?: DeepPartial<State>;
  asyncReducers?: DeepPartial<ReducersMapObject<State>>;
};

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState as State, asyncReducers as ReducersMapObject<State>);

  return <Provider store={store}>{children}</Provider>;
};
