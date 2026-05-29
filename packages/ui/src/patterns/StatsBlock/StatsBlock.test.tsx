import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatsBlock } from './StatsBlock';

const stats = [
  { value: '200+', label: 'Projects' },
  { value: '98%', label: 'Satisfaction', highlighted: true },
];

describe('StatsBlock', () => {
  it('renders all stat values', () => {
    render(<StatsBlock stats={stats} />);
    expect(screen.getByText('200+')).toBeInTheDocument();
    expect(screen.getByText('98%')).toBeInTheDocument();
  });

  it('renders all stat labels', () => {
    render(<StatsBlock stats={stats} />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Satisfaction')).toBeInTheDocument();
  });

  it('applies highlighted class to highlighted stat', () => {
    const { container } = render(<StatsBlock stats={stats} />);
    const items = container.querySelectorAll('[class*="stat"]');
    expect(items[1]?.className).toMatch(/highlighted/);
  });

  it('renders description when provided', () => {
    render(<StatsBlock stats={[{ value: '5', label: 'Years', description: 'In business' }]} />);
    expect(screen.getByText('In business')).toBeInTheDocument();
  });

  it('uses dl/dt/dd semantic HTML', () => {
    const { container } = render(<StatsBlock stats={stats} />);
    expect(container.querySelector('dl')).toBeInTheDocument();
    expect(container.querySelector('dt')).toBeInTheDocument();
    expect(container.querySelector('dd')).toBeInTheDocument();
  });
});
