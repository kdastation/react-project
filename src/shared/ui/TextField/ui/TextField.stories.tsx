import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextField } from './TextField';

export default {
  title: 'shared/TextField',
  component: TextField,
  argTypes: {
  },
} as ComponentMeta<typeof TextField>;

export const Default: ComponentStory<typeof TextField> = (
  args,
) => (
  <TextField {...args} />
);
