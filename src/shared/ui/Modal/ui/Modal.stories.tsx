import React from 'react';
import {
  ThemeDecorator,
} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {
  ComponentMeta,
  ComponentStory,
} from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
  },
} as ComponentMeta<typeof Modal>;

export const DarkModal: ComponentStory<typeof Modal> = (
  args,
) => (
  <Modal {...args} />
);

DarkModal.args = {
  isOpen: true,
  children: 'loremasdasdasdas',
};

DarkModal.decorators = [ThemeDecorator(Theme.LIGHT)];

export const LightModal: ComponentStory<typeof Modal> = (
  args,
) => (
  <Modal {...args} />
);

LightModal.args = {
  isOpen: true,
  children: 'loremasdasdasdas',
};

LightModal.decorators = [ThemeDecorator(Theme.DARK)];
