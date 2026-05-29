import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Select } from './Select';

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];

describe('Select', () => {
  it('renders a select element', () => {
    render(<Select aria-label="Choose" options={options} />);
    expect(screen.getByRole('combobox', { name: 'Choose' })).toBeInTheDocument();
  });

  it('renders options', () => {
    render(<Select aria-label="Choose" options={options} />);
    expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument();
  });

  it('renders placeholder as first disabled option', () => {
    render(<Select aria-label="Choose" options={options} placeholder="Pick one" />);
    const placeholder = screen.getByRole('option', { name: 'Pick one' });
    expect(placeholder).toBeDisabled();
  });

  it('sets aria-invalid when error is true', () => {
    render(<Select aria-label="Choose" options={options} error />);
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
  });
});
