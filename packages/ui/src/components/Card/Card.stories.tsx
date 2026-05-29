import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../../primitives/Text';
import { Stack } from '../../primitives/Stack';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'padded', docs: { description: { component: 'Base layout container. Supports three visual variants and flexible padding.' } } },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'elevated', 'bordered'] },
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    hoverable: { control: 'boolean' },
    interactive: { control: 'boolean' },
  },
  args: { variant: 'default', padding: 'md' },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const CardContent = () => (
  <Stack direction="column" gap="2">
    <Text variant="h5">Card Title</Text>
    <Text variant="body">This is a sample card with some descriptive content inside it.</Text>
  </Stack>
);

export const Default: Story = {
  render: (args) => <Card {...args} style={{ maxWidth: 320 }}><CardContent /></Card>,
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <Card variant="default" style={{ width: 240 }}><CardContent /></Card>
      <Card variant="elevated" style={{ width: 240 }}><CardContent /></Card>
      <Card variant="bordered" style={{ width: 240 }}><CardContent /></Card>
    </div>
  ),
};

export const Hoverable: Story = {
  args: { hoverable: true },
  render: (args) => <Card {...args} style={{ maxWidth: 320 }}><CardContent /></Card>,
};

export const Interactive: Story = {
  args: { interactive: true },
  render: (args) => <Card {...args} style={{ maxWidth: 320 }}><CardContent /></Card>,
};
