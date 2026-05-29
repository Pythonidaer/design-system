import { type HTMLAttributes } from 'react';
import styles from './Testimonial.module.css';
import { clsx } from '../../utils/clsx';

export interface TestimonialProps extends HTMLAttributes<HTMLElement> {
  quote: string;
  name: string;
  title: string;
  company?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  dark?: boolean;
  compact?: boolean;
  'data-testid'?: string;
}

export function Testimonial({
  quote,
  name,
  title,
  company,
  avatarSrc,
  avatarAlt,
  dark = false,
  compact = false,
  className,
  ...rest
}: TestimonialProps) {
  return (
    <figure
      className={clsx(
        styles.testimonial,
        dark && styles.dark,
        compact && styles.compact,
        className,
      )}
      {...rest}
    >
      <svg
        className={styles.quoteIcon}
        width="32"
        height="24"
        viewBox="0 0 32 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 24V14.4C0 10.56 1.04 7.36 3.12 4.8C5.28 2.24 8.24 0.64 12 0L13.44 2.64C11.04 3.2 9.12 4.4 7.68 6.24C6.32 8 5.68 9.92 5.76 12H11.04V24H0ZM20.96 24V14.4C20.96 10.56 22 7.36 24.08 4.8C26.24 2.24 29.2 0.64 32.96 0L34.4 2.64C32 3.2 30.08 4.4 28.64 6.24C27.28 8 26.64 9.92 26.72 12H32V24H20.96Z"
          fill="currentColor"
        />
      </svg>

      <blockquote className={styles.quote}>
        <p>{quote}</p>
      </blockquote>

      <figcaption className={styles.attribution}>
        {avatarSrc && (
          <img
            src={avatarSrc}
            alt={avatarAlt ?? `${name}'s avatar`}
            className={styles.avatar}
            width={compact ? 36 : 48}
            height={compact ? 36 : 48}
          />
        )}
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.role}>
            {title}
            {company && `, ${company}`}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
