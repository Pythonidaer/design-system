import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { PricingCard } from './PricingCard';

const features = [
  { text: 'Feature A', included: true },
  { text: 'Feature B', included: false },
];

describe('PricingCard accessibility', () => {
  it('has no violations — standard', async () => {
    const { container } = render(
      <PricingCard title="Starter" price="$29" features={features} ctaLabel="Get started" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — featured with badge', async () => {
    const { container } = render(
      <PricingCard title="Pro" price="$79" features={features} ctaLabel="Start trial" featured badge="Most Popular" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
