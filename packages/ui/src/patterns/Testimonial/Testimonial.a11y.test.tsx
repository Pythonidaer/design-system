import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from '../../test-setup';
import { Testimonial } from './Testimonial';

const props = { quote: 'Outstanding service.', name: 'Alex Kim', title: 'CEO', company: 'Startup Inc' };

describe('Testimonial accessibility', () => {
  it('has no violations — default', async () => {
    const { container } = render(<Testimonial {...props} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — dark mode', async () => {
    const { container } = render(<Testimonial {...props} dark />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — compact', async () => {
    const { container } = render(<Testimonial {...props} compact />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no violations — with avatar', async () => {
    const { container } = render(
      <Testimonial {...props} avatarSrc="/avatar.jpg" avatarAlt="Alex Kim" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
