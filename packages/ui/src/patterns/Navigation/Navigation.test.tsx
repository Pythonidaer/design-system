import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navigation } from './Navigation';

const links = [
  { label: 'Home', href: '/', current: true },
  { label: 'Services', href: '/services' },
];

const Logo = () => <span>MyLogo</span>;

describe('Navigation', () => {
  it('renders logo', () => {
    render(<Navigation logo={<Logo />} links={links} />);
    expect(screen.getByText('MyLogo')).toBeInTheDocument();
  });

  it('renders desktop nav links (hidden via CSS on mobile viewport)', () => {
    render(<Navigation logo={<Logo />} links={links} />);
    // Desktop links are display:none by default (shown only at ≥768px via media query)
    // Use { hidden: true } to find them regardless of CSS visibility
    expect(screen.getAllByRole('link', { name: 'Home', hidden: true }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: 'Services', hidden: true }).length).toBeGreaterThan(0);
  });

  it('marks current page link with aria-current', () => {
    render(<Navigation logo={<Logo />} links={links} />);
    const currentLinks = screen.getAllByRole('link', { name: 'Home', hidden: true });
    expect(currentLinks[0]).toHaveAttribute('aria-current', 'page');
  });

  it('renders hamburger button', () => {
    render(<Navigation logo={<Logo />} links={links} />);
    expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
  });

  it('opens mobile drawer on hamburger click', () => {
    render(<Navigation logo={<Logo />} links={links} />);
    fireEvent.click(screen.getByRole('button', { name: /open navigation menu/i }));
    expect(screen.getByRole('dialog', { name: 'Navigation menu' })).toBeInTheDocument();
  });

  it('hamburger aria-expanded updates when drawer opens', () => {
    render(<Navigation logo={<Logo />} links={links} />);
    const btn = screen.getByRole('button', { name: /open navigation menu/i });
    expect(btn).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(btn);
    // After open: hamburger toggles to "close" aria-label; drawer also has a close button
    const closeBtns = screen.getAllByRole('button', { name: /close navigation menu/i });
    expect(closeBtns.length).toBeGreaterThan(0);
    // The hamburger (first match) carries the aria-expanded attribute
    const hamburger = closeBtns.find((b) => b.hasAttribute('aria-expanded'));
    expect(hamburger).toHaveAttribute('aria-expanded', 'true');
  });

  it('closes drawer on Escape key', () => {
    render(<Navigation logo={<Logo />} links={links} />);
    fireEvent.click(screen.getByRole('button', { name: /open navigation menu/i }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders CTA button when ctaLabel provided', () => {
    render(<Navigation logo={<Logo />} links={links} ctaLabel="Book a call" />);
    expect(screen.getAllByRole('button', { name: /Book a call/i })[0]).toBeInTheDocument();
  });
});
