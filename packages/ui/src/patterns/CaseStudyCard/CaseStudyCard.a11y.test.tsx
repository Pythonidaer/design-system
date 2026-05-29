import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { CaseStudyCard } from './CaseStudyCard';

const props = {
  title: 'Test Project',
  summary: 'We delivered exceptional results.',
  metrics: [{ value: '40%', label: 'Faster cycles' }],
  tags: ['Design'],
  ctaHref: '/case-study',
};

describe('CaseStudyCard accessibility', () => {
  it('has no violations — default', async () => {
    const { container } = render(<CaseStudyCard {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — featured with image', async () => {
    const { container } = render(
      <CaseStudyCard {...props} featured imageSrc="/img.jpg" imageAlt="Project screenshot" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
