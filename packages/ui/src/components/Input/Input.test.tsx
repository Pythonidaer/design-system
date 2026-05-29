import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input aria-label="Email" />);
    expect(screen.getByRole('textbox', { name: 'Email' })).toBeInTheDocument();
  });

  it('accepts user input', async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Name" />);
    const input = screen.getByRole('textbox', { name: 'Name' });
    await user.type(input, 'John');
    expect(input).toHaveValue('John');
  });

  it('fires onChange', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Input aria-label="Name" onChange={handleChange} />);
    await user.type(screen.getByRole('textbox'), 'A');
    expect(handleChange).toHaveBeenCalled();
  });

  it('sets aria-invalid when error is true', () => {
    render(<Input aria-label="Email" error />);
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when disabled prop is set', () => {
    render(<Input aria-label="Email" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('forwards ref', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Input aria-label="Ref" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
