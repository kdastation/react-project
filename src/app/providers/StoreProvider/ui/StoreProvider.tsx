import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../config/store.';
import { State } from '../config/storeTypes';

type StoreProviderProps = {
  initialState?: State,
  asyncReducers?: DeepPartial<ReducersMapObject<State>>
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const navigate = useNavigate();

  const store = createReduxStore(
    initialState,
      asyncReducers as ReducersMapObject<State>,
      navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
