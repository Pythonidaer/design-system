import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PricingCard } from './PricingCard';

const features = [
  { text: 'Feature A', included: true },
  { text: 'Feature B', included: false },
];

const props = {
  title: 'Pro',
  price: '$79',
  features,
  ctaLabel: 'Get started',
};

describe('PricingCard', () => {
  it('renders the plan title', () => {
    render(<PricingCard {...props} />);
    expect(screen.getByRole('heading', { name: 'Pro' })).toBeInTheDocument();
  });

  it('renders the price', () => {
    render(<PricingCard {...props} />);
    expect(screen.getByText('$79')).toBeInTheDocument();
  });

  it('renders all features', () => {
    render(<PricingCard {...props} />);
    expect(screen.getByText('Feature A')).toBeInTheDocument();
    expect(screen.getByText('Feature B')).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<PricingCard {...props} />);
    expect(screen.getByRole('button', { name: /Get started/i })).toBeInTheDocument();
  });

  it('fires onCtaClick', () => {
    const handleClick = vi.fn();
    render(<PricingCard {...props} onCtaClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('renders badge when featured with badge text', () => {
    render(<PricingCard {...props} featured badge="Most Popular" />);
    expect(screen.getByText('Most Popular')).toBeInTheDocument();
  });
});
