import { UserSliceState } from 'entities/User';
import { LoginByUserNameSliceState } from 'features/LoginByUserName/index';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { KeysReducers } from 'app/providers/StoreProvider/config/rootReducer';
import { createReduxStore } from 'app/providers/StoreProvider';

export type State = {
  user: UserSliceState,

  // Асинхронные редьюсеры
  loginByUserName?: LoginByUserNameSliceState
}

export type ReducerManager = {
  getReducerMap: () => ReducersMapObject<State>,
  add: (key: KeysReducers, reducer: Reducer) => void,
  reduce: (state: State, action: AnyAction) => CombinedState<State>,
  remove: (key: KeysReducers) => void
}

export type ReduxStoreWithReducerManager = EnhancedStore<State> & {
  reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
