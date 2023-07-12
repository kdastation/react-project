import { State } from '@/app/providers/StoreProvider/config/storeTypes';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Story } from '@storybook/react';
import { loginByUserNameReducer } from '@/features/LoginByUserName';
import { ReducersList } from '@/shared/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginByUserName: loginByUserNameReducer,
};

export const StoreDecorator = (
  initialState: DeepPartial<State>,
  asyncReducers?: ReducersList,
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
