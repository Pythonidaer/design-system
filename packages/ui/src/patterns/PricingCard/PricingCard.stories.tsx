import type { Meta, StoryObj } from '@storybook/react';
import { PricingCard } from './PricingCard';

const features = [
  { text: 'Up to 5 projects', included: true },
  { text: 'Priority support', included: true },
  { text: 'Custom branding', included: false },
  { text: 'API access', included: false },
];

const proFeatures = [
  { text: 'Unlimited projects', included: true },
  { text: 'Priority support', included: true },
  { text: 'Custom branding', included: true },
  { text: 'API access', included: true },
];

const meta = {
  title: 'Patterns/PricingCard',
  component: PricingCard,
  parameters: { layout: 'padded' },
  tags: ['autodocs'],
  args: {
    title: 'Starter',
    price: '$29',
    billingPeriod: '/month',
    description: 'Perfect for small teams getting started.',
    features,
    ctaLabel: 'Get started',
  },
} satisfies Meta<typeof PricingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: (args) => <div style={{ maxWidth: 360 }}><PricingCard {...args} /></div> };

export const Featured: Story = {
  args: {
    title: 'Pro',
    price: '$79',
    description: 'Everything you need to scale.',
    features: proFeatures,
    featured: true,
    badge: 'Most Popular',
    ctaLabel: 'Start free trial',
  },
  render: (args) => <div style={{ maxWidth: 360, paddingTop: '24px' }}><PricingCard {...args} /></div>,
};

export const PricingGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', alignItems: 'center', paddingTop: '24px' }}>
      <PricingCard title="Starter" price="$29" features={features} ctaLabel="Get started" description="For small teams." />
      <PricingCard title="Pro" price="$79" features={proFeatures} ctaLabel="Start free trial" description="For growing teams." featured badge="Most Popular" />
      <PricingCard title="Enterprise" price="Custom" billingPeriod="" features={proFeatures} ctaLabel="Contact sales" description="For large organizations." />
    </div>
  ),
};
