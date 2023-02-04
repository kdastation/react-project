import { configureStore } from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/StoreProvider/lib/createReducerManager';
import { State } from './storeTypes';
import { rootReducer } from './rootReducer';

export const createReduxStore = (
  initialState?: State,
) => {
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<State>({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
