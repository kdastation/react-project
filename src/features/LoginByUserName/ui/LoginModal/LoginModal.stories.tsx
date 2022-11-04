import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginByUserName/LoginModal',
  component: LoginModal,
  argTypes: {
  },
} as ComponentMeta<typeof LoginModal>;

export const LoginModalLight: ComponentStory<typeof LoginModal> = (
  args,
) => (
  <LoginModal {...args} />
);

LoginModalLight.args = {
  isOpen: true,
};

LoginModalLight.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
  loginByUserName: {
    username: 'asdsadasd',
    password: 'asdasdasd',
    isLoading: false,
    error: null,
  },
})];

export const LoginModalDark: ComponentStory<typeof LoginModal> = (
  args,
) => <LoginModal {...args} />;

LoginModalDark.args = {
  isOpen: true,
};

LoginModalDark.decorators = [ThemeDecorator(Theme.LIGHT), StoreDecorator({
  loginByUserName: {
    username: 'asdsadasd',
    password: 'asdasdasd',
    isLoading: false,
    error: null,
  },
})];
