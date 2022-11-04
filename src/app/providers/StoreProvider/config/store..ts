import { configureStore } from '@reduxjs/toolkit';
import { State } from './storeTypes';
import { rootReducer } from './rootReducer';

export const createReduxStore = (
  initialState?: State,
) => configureStore<State>({
  reducer: rootReducer,
  devTools: true,
  preloadedState: initialState,
});
