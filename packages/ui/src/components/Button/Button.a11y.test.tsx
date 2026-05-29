import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Button } from './Button';

describe('Button accessibility', () => {
  it('has no violations — primary', async () => {
    const { container } = render(<Button variant="primary">Submit</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — secondary', async () => {
    const { container } = render(<Button variant="secondary">Cancel</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — outline', async () => {
    const { container } = render(<Button variant="outline">Learn More</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — ghost', async () => {
    const { container } = render(<Button variant="ghost">Skip</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — danger', async () => {
    const { container } = render(<Button variant="danger">Delete</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — disabled', async () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — loading', async () => {
    const { container } = render(<Button loading>Loading...</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — all sizes', async () => {
    const { container } = render(
      <>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
