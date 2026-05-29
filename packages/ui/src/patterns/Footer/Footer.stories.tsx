import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const Logo = () => (
  <span style={{ fontWeight: 600, fontSize: '1.25rem', color: 'var(--color-neutral-0)' }}>
    Jonnovative
  </span>
);

const columns = [
  {
    heading: 'Services',
    links: [
      { label: 'Brand Strategy', href: '/services/brand' },
      { label: 'Web Design', href: '/services/web' },
      { label: 'Design Systems', href: '/services/systems' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { label: 'Twitter', href: 'https://twitter.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'GitHub', href: 'https://github.com' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const meta = {
  title: 'Patterns/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Site footer. Supports simple, multi-column, and newsletter variants. Dark background with legal strip.' } },
  },
  tags: ['autodocs'],
  args: {
    logo: <Logo />,
    tagline: 'Building exceptional digital products for forward-thinking companies.',
    columns,
    legalLinks,
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MultiColumn: Story = { args: { variant: 'multi-column' } };

export const WithNewsletter: Story = {
  args: { variant: 'newsletter', newsletter: true },
};

export const Simple: Story = {
  args: { variant: 'simple', columns: undefined },
};
