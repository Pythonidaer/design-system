import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LogoCloud } from './LogoCloud';

const logos = [
  { src: '/logo-a.svg', alt: 'Company A' },
  { src: '/logo-b.svg', alt: 'Company B' },
];

describe('LogoCloud', () => {
  it('renders all logo images', () => {
    render(<LogoCloud logos={logos} />);
    expect(screen.getByAltText('Company A')).toBeInTheDocument();
    expect(screen.getByAltText('Company B')).toBeInTheDocument();
  });

  it('renders title when provided', () => {
    render(<LogoCloud logos={logos} title="Trusted by" />);
    expect(screen.getByText('Trusted by')).toBeInTheDocument();
  });

  it('wraps in a link when href is provided', () => {
    const logosWithLink = [{ src: '/logo.svg', alt: 'Acme', href: 'https://acme.com' }];
    render(<LogoCloud logos={logosWithLink} />);
    const link = screen.getByRole('link', { name: 'Visit Acme' });
    expect(link).toHaveAttribute('href', 'https://acme.com');
  });

  it('all images have non-empty alt text', () => {
    render(<LogoCloud logos={logos} />);
    const images = screen.getAllByRole('img');
    images.forEach((img) => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });
});
