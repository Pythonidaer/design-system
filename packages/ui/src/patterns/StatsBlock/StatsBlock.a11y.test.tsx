import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { StatsBlock } from './StatsBlock';

const stats = [
  { value: '200+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction', highlighted: true },
  { value: '$40M', label: 'Revenue Generated' },
];

describe('StatsBlock accessibility', () => {
  it('has no violations', async () => {
    const { container } = render(<StatsBlock stats={stats} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
