import type { Meta, StoryObj } from '@storybook/react';
import { StatsBlock } from './StatsBlock';

const stats = [
  { value: '200+', label: 'Projects Delivered', description: 'Across 12 industries' },
  { value: '98%', label: 'Client Satisfaction', highlighted: true },
  { value: '$40M', label: 'Revenue Generated', description: 'For our clients last year' },
];

const meta = {
  title: 'Patterns/StatsBlock',
  component: StatsBlock,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { stats },
} satisfies Meta<typeof StatsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const TwoColumns: Story = {
  args: { columns: 2, stats: stats.slice(0, 2) },
};
export const FourColumns: Story = {
  args: {
    columns: 4,
    stats: [
      { value: '200+', label: 'Projects' },
      { value: '98%', label: 'Satisfaction', highlighted: true },
      { value: '$40M', label: 'Revenue' },
      { value: '15+', label: 'Team Members' },
    ],
  },
};
