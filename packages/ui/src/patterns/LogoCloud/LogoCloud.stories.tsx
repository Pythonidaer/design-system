import type { Meta, StoryObj } from '@storybook/react';
import { LogoCloud } from './LogoCloud';

const logos = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', alt: 'Amazon' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', alt: 'Google' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', alt: 'Microsoft' },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg', alt: 'IBM' },
];

const meta = {
  title: 'Patterns/LogoCloud',
  component: LogoCloud,
  parameters: { layout: 'padded', docs: { description: { component: 'Responsive logo grid. Greyscale by default, color on hover. Alt text is required on all logo items.' } } },
  tags: ['autodocs'],
  args: { logos, title: 'Trusted by leading companies', columns: 4 },
} satisfies Meta<typeof LogoCloud>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const ThreeColumns: Story = { args: { columns: 3 } };
export const NoTitle: Story = { args: { title: undefined } };
