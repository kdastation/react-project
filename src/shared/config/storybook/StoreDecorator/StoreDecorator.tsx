import { State } from 'app/providers/StoreProvider/config/storeTypes';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/StoreProvider';
import { Story } from '@storybook/react';

export const StoreDecorator = (initialState: DeepPartial<State>) => (StoryComponent: Story) => (
  <StoreProvider initialState={initialState as State}>
    <StoryComponent />
  </StoreProvider>
);
