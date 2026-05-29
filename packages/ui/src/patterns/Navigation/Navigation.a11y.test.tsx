import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Navigation } from './Navigation';

const links = [
  { label: 'Home', href: '/', current: true },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
];

const Logo = () => <span>Jonnovative</span>;

describe('Navigation accessibility', () => {
  it('has no violations — closed state', async () => {
    const { container } = render(
      <Navigation logo={<Logo />} links={links} ctaLabel="Get in touch" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
