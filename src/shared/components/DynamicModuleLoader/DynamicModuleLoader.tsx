import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithReducerManager } from '@/app/providers/StoreProvider/config/storeTypes';
import { FC, useEffect } from 'react';
import { KeysReducers } from '@/app/providers/StoreProvider/config/rootReducer';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [key in KeysReducers]?: Reducer
}

type DynamicModuleLoaderProps = {
  reducers: ReducersList
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = ({
  reducers,
  children,
}) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithReducerManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      store.reducerManager.add(key as KeysReducers, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      Object.entries(reducers).forEach(([key]) => {
        store.reducerManager.remove(key as KeysReducers);
        dispatch({ type: `@DESTROY ${key} reducer` });
      });
    };
  }, []);

  return (
    <>
      {children}
    </>
  );
};
