import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  ThemeDecorator,
} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Header } from './Header';

export default {
  title: 'widgets/Header',
  component: Header,
  argTypes: {
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (
  args,
) => <Header {...args} />;

export const HeaderLight: ComponentStory<typeof Header> = (
  args,
) => (
  <Header {...args} />
);

HeaderLight.decorators = [ThemeDecorator(Theme.DARK)];

export const HeaderDark: ComponentStory<typeof Header> = (
  args,
) => (
  <Header {...args} />
);

HeaderDark.decorators = [ThemeDecorator(Theme.LIGHT)];
