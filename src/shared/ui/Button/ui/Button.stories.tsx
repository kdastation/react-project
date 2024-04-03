import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonTheme } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (
  args,
) => <Button {...args} />;

// export const Default = Template.bind({});

export const Primary: ComponentStory<typeof Button> = (
  args,
) => (
  <Button {...args} />
);

Primary.args = {
  children: 'sadasdasdasd',
};

export const Clear: ComponentStory<typeof Button> = (
  args,
) => (
  <Button {...args} />
);

Clear.args = {
  children: 'asdsadad',
  theme: ButtonTheme.CLEAR,
};
