import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Input } from './Input';
import { FormField } from '../FormField';

describe('Input accessibility', () => {
  it('has no violations with a label via FormField', async () => {
    const { container } = render(
      <FormField label="Email" htmlFor="email">
        <Input id="email" type="email" />
      </FormField>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations in error state', async () => {
    const { container } = render(
      <FormField label="Email" htmlFor="email-err" error="Invalid email">
        <Input id="email-err" type="email" error aria-describedby="email-err-error" />
      </FormField>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations when disabled', async () => {
    const { container } = render(
      <FormField label="Email" htmlFor="email-dis">
        <Input id="email-dis" disabled />
      </FormField>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
