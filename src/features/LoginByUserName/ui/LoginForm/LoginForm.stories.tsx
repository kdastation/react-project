import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginByUserName/LoginForm',
  component: LoginForm,
  argTypes: {
  },
} as ComponentMeta<typeof LoginForm>;

export const LoginFormLight: ComponentStory<typeof LoginForm> = (
  args,
) => (
  <LoginForm {...args} />
);

LoginFormLight.decorators = [ThemeDecorator(Theme.DARK)];

export const LoginFormDark: ComponentStory<typeof LoginForm> = (
  args,
) => (
  <LoginForm {...args} />
);

LoginFormDark.decorators = [ThemeDecorator(Theme.LIGHT)];
