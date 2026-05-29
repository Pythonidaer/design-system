import '@testing-library/jest-dom';
import { configureAxe, toHaveNoViolations } from 'jest-axe';
import { expect } from 'vitest';

expect.extend(toHaveNoViolations);

export const axe = configureAxe({
  rules: {
    // CSS variables don't resolve in jsdom so color-contrast check is unreliable
    'color-contrast': { enabled: false },
  },
});
