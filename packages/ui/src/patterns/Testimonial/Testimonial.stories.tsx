import type { Meta, StoryObj } from '@storybook/react';
import { Testimonial } from './Testimonial';

const sampleProps = {
  quote:
    'Jonnovative Designs transformed our entire brand identity. The attention to detail and systematic approach delivered exceptional results in just 6 weeks.',
  name: 'Sarah Chen',
  title: 'Head of Design',
  company: 'Acme Corp',
};

const meta = {
  title: 'Patterns/Testimonial',
  component: Testimonial,
  parameters: { layout: 'padded', docs: { description: { component: 'Customer testimonial block. Supports dark mode and compact layout.' } } },
  tags: ['autodocs'],
  argTypes: {
    dark: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
  args: sampleProps,
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: (args) => <div style={{ maxWidth: 480 }}><Testimonial {...args} /></div> };

export const Dark: Story = {
  args: { dark: true },
  parameters: { backgrounds: { default: 'dark' } },
  render: (args) => <div style={{ maxWidth: 480 }}><Testimonial {...args} /></div>,
};

export const Compact: Story = {
  args: { compact: true },
  render: (args) => <div style={{ maxWidth: 360 }}><Testimonial {...args} /></div>,
};

export const WithAvatar: Story = {
  args: { avatarSrc: 'https://i.pravatar.cc/48?img=5', avatarAlt: 'Sarah Chen' },
  render: (args) => <div style={{ maxWidth: 480 }}><Testimonial {...args} /></div>,
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <Testimonial {...sampleProps} />
      <Testimonial {...sampleProps} compact />
      <Testimonial {...sampleProps} dark />
    </div>
  ),
};
