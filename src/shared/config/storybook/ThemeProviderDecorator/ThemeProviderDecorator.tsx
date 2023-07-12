import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeProviderDecorator = (StoryComponent: Story) => (
  <ThemeProvider>
    <StoryComponent />
  </ThemeProvider>
);
