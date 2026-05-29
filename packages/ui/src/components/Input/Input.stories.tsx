import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { FormField } from '../FormField';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { size: 'md', placeholder: 'Enter text...' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormField label="Email address" htmlFor="email">
      <Input id="email" type="email" aria-label="Email address" {...args} />
    </FormField>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <FormField label="Email address" htmlFor="email-err" error="Please enter a valid email address.">
      <Input id="email-err" type="email" error aria-label="Email address" aria-describedby="email-err-error" {...args} />
    </FormField>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <FormField label="Email address" htmlFor="email-dis">
      <Input id="email-dis" type="email" disabled aria-label="Email address" {...args} />
    </FormField>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: 360 }}>
      <Input size="sm" placeholder="Small input" aria-label="Small input" />
      <Input size="md" placeholder="Medium input" aria-label="Medium input" />
      <Input size="lg" placeholder="Large input" aria-label="Large input" />
    </div>
  ),
};
