import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Footer } from './Footer';

const columns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

describe('Footer accessibility', () => {
  it('has no violations — multi-column', async () => {
    const { container } = render(
      <Footer
        logo={<span>Jonnovative</span>}
        tagline="Building great products."
        columns={columns}
        legalLinks={legalLinks}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — with newsletter', async () => {
    const { container } = render(
      <Footer newsletter logo={<span>Jonnovative</span>} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — simple', async () => {
    const { container } = render(
      <Footer variant="simple" copyright="© 2026 Jonnovative." legalLinks={legalLinks} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
