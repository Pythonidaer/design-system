import type { Preview } from '@storybook/react';
import '@pythonidaer/tokens/tokens.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: 'var(--color-neutral-0)' },
        { name: 'neutral', value: 'var(--color-neutral-50)' },
        { name: 'dark', value: 'var(--color-neutral-900)' },
      ],
    },
  },
  tags: ['autodocs'],
};

export default preview;
