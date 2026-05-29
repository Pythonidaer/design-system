import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Card } from './Card';

describe('Card accessibility', () => {
  it('has no violations — default', async () => {
    const { container } = render(<Card>Content</Card>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — elevated', async () => {
    const { container } = render(<Card variant="elevated">Content</Card>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — bordered', async () => {
    const { container } = render(<Card variant="bordered">Content</Card>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — interactive', async () => {
    const { container } = render(
      <Card interactive aria-label="View project details">
        Content
      </Card>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
