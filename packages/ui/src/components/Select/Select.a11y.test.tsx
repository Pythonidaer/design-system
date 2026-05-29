import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Select } from './Select';
import { FormField } from '../FormField';

const options = [
  { value: 'a', label: 'Option A' },
  { value: 'b', label: 'Option B' },
];

describe('Select accessibility', () => {
  it('has no violations with FormField label', async () => {
    const { container } = render(
      <FormField label="Department" htmlFor="dept">
        <Select id="dept" options={options} />
      </FormField>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations in error state', async () => {
    const { container } = render(
      <FormField label="Department" htmlFor="dept-err" error="Required">
        <Select id="dept-err" options={options} error />
      </FormField>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
