import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

const links = [
  { label: 'Home', href: '/', current: true },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
];

const Logo = () => (
  <span style={{ fontWeight: 600, fontSize: '1.125rem', color: 'var(--color-primary-600)' }}>
    Jonnovative
  </span>
);

const meta = {
  title: 'Patterns/Navigation',
  component: Navigation,
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Sticky navigation header. Includes responsive mobile drawer with focus trap. Closes on Escape.' } } },
  tags: ['autodocs'],
  args: {
    logo: <Logo />,
    links,
    variant: 'split',
    ctaLabel: 'Get in touch',
  },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Split: Story = {};
export const Minimal: Story = { args: { variant: 'minimal' } };
export const CtaRight: Story = { args: { variant: 'cta-right' } };
