import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders a checkbox with label', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole('checkbox', { name: 'Accept terms' })).toBeInTheDocument();
  });

  it('can be checked by user', async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Accept" />);
    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('fires onChange', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Checkbox label="Accept" onChange={handleChange} />);
    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('sets aria-invalid when error is true', () => {
    render(<Checkbox label="Accept" error />);
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('is disabled when disabled prop is set', () => {
    render(<Checkbox label="Accept" disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
