import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies default variant class', () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId('card').className).toMatch(/variant_default/);
  });

  it('applies the elevated variant class', () => {
    render(<Card variant="elevated" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card').className).toMatch(/variant_elevated/);
  });

  it('applies the bordered variant class', () => {
    render(<Card variant="bordered" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card').className).toMatch(/variant_bordered/);
  });

  it('applies the hoverable class', () => {
    render(<Card hoverable data-testid="card">Content</Card>);
    expect(screen.getByTestId('card').className).toMatch(/hoverable/);
  });

  it('adds role=button and tabIndex when interactive', () => {
    render(<Card interactive data-testid="card">Content</Card>);
    const card = screen.getByTestId('card');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabindex', '0');
  });

  it('renders as a different element via as prop', () => {
    render(<Card as="section" data-testid="card">Content</Card>);
    expect(screen.getByTestId('card').tagName).toBe('SECTION');
  });
});
