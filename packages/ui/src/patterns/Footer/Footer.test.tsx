import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Footer } from './Footer';

const columns = [
  {
    heading: 'Services',
    links: [{ label: 'Web Design', href: '/web' }],
  },
];

const legalLinks = [{ label: 'Privacy Policy', href: '/privacy' }];

describe('Footer', () => {
  it('renders logo when provided', () => {
    render(<Footer logo={<span>MyLogo</span>} />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders tagline when provided', () => {
    render(<Footer tagline="Building great products." />);
    expect(screen.getByText('Building great products.')).toBeInTheDocument();
  });

  it('renders column headings and links', () => {
    render(<Footer columns={columns} />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Web Design' })).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer legalLinks={legalLinks} />);
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer copyright="© 2026 Jonnovative." />);
    expect(screen.getByText('© 2026 Jonnovative.')).toBeInTheDocument();
  });

  it('renders newsletter form when newsletter=true', () => {
    render(<Footer newsletter />);
    expect(screen.getByRole('form', { name: 'Newsletter sign-up' })).toBeInTheDocument();
  });

  it('submits newsletter form and calls onNewsletterSubmit', () => {
    const handleSubmit = vi.fn();
    render(<Footer newsletter onNewsletterSubmit={handleSubmit} />);
    const input = screen.getByRole('textbox', { name: /email address for newsletter/i });
    fireEvent.change(input, { target: { value: 'test@example.com' } });
    fireEvent.submit(screen.getByRole('form', { name: 'Newsletter sign-up' }));
    expect(handleSubmit).toHaveBeenCalledWith('test@example.com');
  });

  it('uses footer semantic element', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});
