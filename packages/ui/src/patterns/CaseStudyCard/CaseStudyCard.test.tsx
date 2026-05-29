import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CaseStudyCard } from './CaseStudyCard';

const props = {
  title: 'Test Project',
  summary: 'We did great work.',
  metrics: [{ value: '50%', label: 'Growth' }],
  tags: ['Design', 'Strategy'],
  ctaHref: '/case-study',
};

describe('CaseStudyCard', () => {
  it('renders title', () => {
    render(<CaseStudyCard {...props} />);
    expect(screen.getByRole('heading', { name: 'Test Project' })).toBeInTheDocument();
  });

  it('renders summary', () => {
    render(<CaseStudyCard {...props} />);
    expect(screen.getByText('We did great work.')).toBeInTheDocument();
  });

  it('renders all metrics', () => {
    render(<CaseStudyCard {...props} />);
    expect(screen.getByText('50%')).toBeInTheDocument();
    expect(screen.getByText('Growth')).toBeInTheDocument();
  });

  it('renders tags', () => {
    render(<CaseStudyCard {...props} />);
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Strategy')).toBeInTheDocument();
  });

  it('renders CTA link with accessible label', () => {
    render(<CaseStudyCard {...props} />);
    const link = screen.getByRole('link', { name: /Test Project/i });
    expect(link).toHaveAttribute('href', '/case-study');
  });

  it('renders image when imageSrc is provided', () => {
    render(<CaseStudyCard {...props} imageSrc="/img.jpg" imageAlt="Project screenshot" />);
    expect(screen.getByAltText('Project screenshot')).toBeInTheDocument();
  });

  it('uses article semantic element', () => {
    const { container } = render(<CaseStudyCard {...props} />);
    expect(container.querySelector('article')).toBeInTheDocument();
  });
});
