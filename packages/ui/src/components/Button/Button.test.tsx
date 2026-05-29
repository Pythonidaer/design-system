import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('applies the primary variant class by default', () => {
    render(<Button>Primary</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/variant_primary/);
  });

  it('applies the correct variant class', () => {
    render(<Button variant="danger">Delete</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/variant_danger/);
  });

  it('applies the correct size class', () => {
    render(<Button size="lg">Large</Button>);
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/size_lg/);
  });

  it('fires onClick handler', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('shows spinner and sets aria-busy when loading', () => {
    render(<Button loading>Saving</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('disables the button when loading', () => {
    render(<Button loading>Saving</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('accepts a data-testid prop', () => {
    render(<Button data-testid="my-btn">Click</Button>);
    expect(screen.getByTestId('my-btn')).toBeInTheDocument();
  });

  it('merges custom className', () => {
    render(<Button className="custom-class">Click</Button>);
    expect(screen.getByRole('button').className).toContain('custom-class');
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLButtonElement | null };
    render(<Button ref={ref}>Ref</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
