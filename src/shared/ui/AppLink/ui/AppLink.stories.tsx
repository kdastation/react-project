import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

export const PrimaryLink: ComponentStory<typeof AppLink> = (
  args,
) => (
  <AppLink {...args} />
);

PrimaryLink.args = {
  children: 'Link',
  theme: AppLinkTheme.PRIMARY,
};

export const InvertedPrimaryLink: ComponentStory<typeof AppLink> = (
  args,
) => (
  <AppLink {...args} />
);

InvertedPrimaryLink.args = {
  children: 'Link',
  theme: AppLinkTheme.INVERTED_PRIMARY,
};
