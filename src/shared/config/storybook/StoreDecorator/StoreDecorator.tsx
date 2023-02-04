import { State } from 'app/providers/StoreProvider/config/storeTypes';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Story } from '@storybook/react';
import { loginByUserNameReducer } from 'features/LoginByUserName';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<State>> = {
  loginByUserName: loginByUserNameReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<State>,
  asyncReducers?: DeepPartial<ReducersMapObject<State>>,
) => (StoryComponent: Story) => (
  <StoreProvider
    initialState={initialState as State}
    asyncReducers={{
      ...defaultAsyncReducers,
      ...asyncReducers,
    }}
  >
    <StoryComponent />
  </StoreProvider>
);
