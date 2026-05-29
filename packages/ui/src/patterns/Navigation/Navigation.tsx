import { type HTMLAttributes, type ReactNode, useState, useEffect, useCallback, useId } from 'react';
import FocusTrap from 'focus-trap-react';
import styles from './Navigation.module.css';
import { clsx } from '../../utils/clsx';
import { Button } from '../../components/Button';

export interface NavLink {
  label: string;
  href: string;
  current?: boolean;
}

export type NavigationVariant = 'centered' | 'split' | 'minimal' | 'cta-right';

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
  logo: ReactNode;
  links: NavLink[];
  variant?: NavigationVariant;
  ctaLabel?: string;
  onCtaClick?: () => void;
  'data-testid'?: string;
}

export function Navigation({
  logo,
  links,
  variant = 'split',
  ctaLabel,
  onCtaClick,
  className,
  ...rest
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerId = useId();

  const closeDrawer = useCallback(() => setMobileOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen, closeDrawer]);

  // Prevent body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={clsx(styles.header, styles[`variant_${variant}`], className)}
      {...rest}
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <div className={styles.logoSlot}>{logo}</div>

        {/* Desktop nav links */}
        <ul className={styles.desktopLinks} role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={clsx(styles.navLink, link.current && styles.navLinkActive)}
                aria-current={link.current ? 'page' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {ctaLabel && (
            <Button
              variant="primary"
              size="sm"
              onClick={onCtaClick}
              className={styles.desktopCta}
            >
              {ctaLabel}
            </Button>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            className={styles.hamburger}
            aria-expanded={mobileOpen}
            aria-controls={drawerId}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className={clsx(styles.hamburgerLine, mobileOpen && styles.hamburgerLineTop)} />
            <span className={clsx(styles.hamburgerLine, mobileOpen && styles.hamburgerLineMiddle)} />
            <span className={clsx(styles.hamburgerLine, mobileOpen && styles.hamburgerLineBottom)} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer with focus trap */}
      {mobileOpen && (
        <FocusTrap
          focusTrapOptions={{
            onDeactivate: closeDrawer,
            clickOutsideDeactivates: true,
            escapeDeactivates: true,
            // Fallback required for jsdom/test environments where tabbable detection can fail
            fallbackFocus: () =>
              document.querySelector<HTMLElement>('[data-focus-trap-fallback]') ?? document.body,
          }}
        >
          <div
            id={drawerId}
            className={styles.drawer}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <nav aria-label="Mobile navigation">
              {/* Hidden sentinel ensures FocusTrap always has a tabbable element */}
              <button
                type="button"
                data-focus-trap-fallback
                className={styles.drawerClose}
                onClick={closeDrawer}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
              <ul className={styles.drawerLinks} role="list">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={clsx(styles.drawerLink, link.current && styles.navLinkActive)}
                      aria-current={link.current ? 'page' : undefined}
                      onClick={closeDrawer}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {ctaLabel && (
                <Button
                  variant="primary"
                  size="md"
                  className={styles.drawerCta}
                  onClick={() => { onCtaClick?.(); closeDrawer(); }}
                >
                  {ctaLabel}
                </Button>
              )}
            </nav>
          </div>
        </FocusTrap>
      )}

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className={styles.backdrop}
          aria-hidden="true"
          onClick={closeDrawer}
        />
      )}
    </header>
  );
}
