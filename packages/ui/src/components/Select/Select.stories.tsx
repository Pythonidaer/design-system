import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';
import { FormField } from '../FormField';

const options = [
  { value: 'design', label: 'Design' },
  { value: 'development', label: 'Development' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: { options, placeholder: 'Select a department...' },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <FormField label="Department" htmlFor="dept" style={{ maxWidth: 320 }}>
      <Select id="dept" aria-label="Department" {...args} />
    </FormField>
  ),
};

export const WithError: Story = {
  render: (args) => (
    <FormField label="Department" htmlFor="dept-err" error="Please select a department." style={{ maxWidth: 320 }}>
      <Select id="dept-err" aria-label="Department" error {...args} />
    </FormField>
  ),
};
