import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { createReducerManager } from "@/app/providers/StoreProvider/lib/createReducerManager";
import { api } from "@/shared/api/api";
import { State, ThunkExtraArgs } from "./storeTypes";
import { rootReducer } from "./rootReducer";

export const createReduxStore = (
  initialState?: State,
  asyncReducers?: ReducersMapObject<State>,
) => {
  const reducerManager = createReducerManager({
    ...asyncReducers,
    ...rootReducer,
  });

  const extraArgument: ThunkExtraArgs = {
    api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<State>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument,
        },
      }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};
