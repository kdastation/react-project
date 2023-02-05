import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/StoreProvider/lib/createReducerManager';
import { api } from 'shared/api/api';
import { NavigateFunction } from 'react-router-dom';
import { State } from './storeTypes';
import { rootReducer } from './rootReducer';

export const createReduxStore = (
  initialState?: State,
  asyncReducers?: ReducersMapObject<State>,
  navigate?: NavigateFunction,
) => {
  const reducerManager = createReducerManager({
    ...asyncReducers,
    ...rootReducer,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
