import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { LogoCloud } from './LogoCloud';

const logos = [
  { src: '/logo-a.svg', alt: 'Company A' },
  { src: '/logo-b.svg', alt: 'Company B' },
];

describe('LogoCloud accessibility', () => {
  it('has no violations — default', async () => {
    const { container } = render(<LogoCloud logos={logos} title="Our partners" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — with links', async () => {
    const logosWithLinks = logos.map((l) => ({ ...l, href: 'https://example.com' }));
    const { container } = render(<LogoCloud logos={logosWithLinks} title="Partners" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
