import { type HTMLAttributes, type ReactNode, type FormEvent, useState } from 'react';
import styles from './Footer.module.css';
import { clsx } from '../../utils/clsx';
import { Button } from '../../components/Button';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  logo?: ReactNode;
  tagline?: string;
  columns?: FooterColumn[];
  legalLinks?: FooterLink[];
  copyright?: string;
  newsletter?: boolean;
  onNewsletterSubmit?: (email: string) => void;
  variant?: 'simple' | 'multi-column' | 'newsletter';
  'data-testid'?: string;
}

export function Footer({
  logo,
  tagline,
  columns,
  legalLinks,
  copyright = `© ${new Date().getFullYear()} Jonnovative Designs. All rights reserved.`,
  newsletter = false,
  onNewsletterSubmit,
  variant = 'multi-column',
  className,
  ...rest
}: FooterProps) {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewsletterSubmit?.(email);
    setEmail('');
  };

  return (
    <footer className={clsx(styles.footer, className)} {...rest}>
      <div className={styles.inner}>
        {/* Brand + optional newsletter */}
        <div className={styles.brand}>
          {logo && <div className={styles.logo}>{logo}</div>}
          {tagline && <p className={styles.tagline}>{tagline}</p>}

          {(newsletter || variant === 'newsletter') && (
            <form
              onSubmit={handleNewsletterSubmit}
              className={styles.newsletter}
              aria-label="Newsletter sign-up"
            >
              <label htmlFor="footer-newsletter-email" className={styles.newsletterLabel}>
                Subscribe to our newsletter
              </label>
              <div className={styles.newsletterRow}>
                <input
                  id="footer-newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={styles.newsletterInput}
                  required
                  aria-label="Email address for newsletter"
                  autoComplete="email"
                />
                <Button type="submit" variant="primary" size="sm">
                  Subscribe
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Multi-column links */}
        {columns && columns.length > 0 && variant !== 'simple' && (
          <nav aria-label="Footer navigation">
            <div className={styles.columns}>
              {columns.map((col) => (
                <div key={col.heading} className={styles.column}>
                  <h3 className={styles.columnHeading}>{col.heading}</h3>
                  <ul role="list" className={styles.columnLinks}>
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <a href={link.href} className={styles.footerLink}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        )}
      </div>

      {/* Legal strip */}
      <div className={styles.legal}>
        <p className={styles.copyright}>{copyright}</p>
        {legalLinks && legalLinks.length > 0 && (
          <nav aria-label="Legal links">
            <ul role="list" className={styles.legalLinks}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.legalLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </footer>
  );
}
