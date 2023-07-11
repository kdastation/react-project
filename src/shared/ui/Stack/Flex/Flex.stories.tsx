import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Stack/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const RowFlex = Template.bind({});
RowFlex.args = {
  children: <>
    <div>asdasd</div>
    <div>asdasda</div>
    <div>asdada</div>
  </>,
  direction: 'row',
};

export const ColumnFlex = Template.bind({});
ColumnFlex.args = {
  children: <>
    <div>asdasd</div>
    <div>asdasda</div>
    <div>asdada</div>
  </>,
  direction: 'column',
};
