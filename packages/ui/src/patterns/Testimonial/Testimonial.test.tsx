import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Testimonial } from './Testimonial';

const props = {
  quote: 'Great product!',
  name: 'Jane Doe',
  title: 'CTO',
  company: 'Techco',
};

describe('Testimonial', () => {
  it('renders the quote text', () => {
    render(<Testimonial {...props} />);
    expect(screen.getByText('Great product!')).toBeInTheDocument();
  });

  it('renders the name', () => {
    render(<Testimonial {...props} />);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });

  it('renders title and company', () => {
    render(<Testimonial {...props} />);
    expect(screen.getByText('CTO, Techco')).toBeInTheDocument();
  });

  it('renders avatar with correct alt text when avatarSrc provided', () => {
    render(<Testimonial {...props} avatarSrc="/avatar.jpg" avatarAlt="Jane Doe" />);
    expect(screen.getByAltText('Jane Doe')).toBeInTheDocument();
  });

  it('uses figure/blockquote/figcaption semantic HTML', () => {
    const { container } = render(<Testimonial {...props} />);
    expect(container.querySelector('figure')).toBeInTheDocument();
    expect(container.querySelector('blockquote')).toBeInTheDocument();
    expect(container.querySelector('figcaption')).toBeInTheDocument();
  });
});
