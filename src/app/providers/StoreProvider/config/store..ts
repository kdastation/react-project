import { configureStore } from '@reduxjs/toolkit';
import { State } from 'app/providers/StoreProvider/config/storeTypes';

export const createReduxStore = (
  initialState?: State,
) => configureStore({
  reducer: {},
  devTools: true,
  preloadedState: initialState,
});
