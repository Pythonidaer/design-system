import type { Meta, StoryObj } from '@storybook/react';
import { CaseStudyCard } from './CaseStudyCard';

const baseProps = {
  title: 'Redesigning the Acme B2B Sales Pipeline',
  summary: 'We overhauled the entire sales workflow for a Fortune 500 company, cutting deal cycle time by 40% and boosting win rate significantly.',
  metrics: [
    { value: '40%', label: 'Faster deal cycles' },
    { value: '28%', label: 'Higher win rate' },
    { value: '$2.4M', label: 'Additional ARR' },
  ],
  tags: ['CRM', 'B2B', 'Sales'],
  ctaHref: '#',
  ctaLabel: 'Read case study',
};

const meta = {
  title: 'Patterns/CaseStudyCard',
  component: CaseStudyCard,
  parameters: { layout: 'padded', docs: { description: { component: 'Project case study card with metrics array, tags, and CTA. Supports featured and compact layouts.' } } },
  tags: ['autodocs'],
  args: baseProps,
} satisfies Meta<typeof CaseStudyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { render: (args) => <div style={{ maxWidth: 480 }}><CaseStudyCard {...args} /></div> };

export const Featured: Story = {
  args: { featured: true, imageSrc: 'https://picsum.photos/seed/case/800/450', imageAlt: 'Acme project dashboard screenshot' },
  render: (args) => <div style={{ maxWidth: 800 }}><CaseStudyCard {...args} /></div>,
};

export const Compact: Story = {
  args: { compact: true },
  render: (args) => <div style={{ maxWidth: 360 }}><CaseStudyCard {...args} /></div>,
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
      <CaseStudyCard {...baseProps} />
      <CaseStudyCard {...baseProps} title="Rebuilding the onboarding flow" />
      <CaseStudyCard {...baseProps} compact title="Quick wins for SaaS startup" />
    </div>
  ),
};
