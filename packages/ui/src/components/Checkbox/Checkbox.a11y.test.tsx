import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Checkbox } from './Checkbox';

describe('Checkbox accessibility', () => {
  it('has no violations — default', async () => {
    const { container } = render(<Checkbox label="Accept terms" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — checked', async () => {
    const { container } = render(<Checkbox label="Accept terms" defaultChecked />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — error state', async () => {
    const { container } = render(<Checkbox label="Accept terms" error />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — disabled', async () => {
    const { container } = render(<Checkbox label="Accept terms" disabled />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
