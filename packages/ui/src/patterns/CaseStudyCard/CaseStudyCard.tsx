import { type HTMLAttributes } from 'react';
import styles from './CaseStudyCard.module.css';
import { clsx } from '../../utils/clsx';

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyCardProps extends HTMLAttributes<HTMLElement> {
  title: string;
  summary: string;
  metrics?: CaseStudyMetric[];
  imageSrc?: string;
  imageAlt?: string;
  tags?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  featured?: boolean;
  compact?: boolean;
  'data-testid'?: string;
}

export function CaseStudyCard({
  title,
  summary,
  metrics,
  imageSrc,
  imageAlt,
  tags,
  ctaLabel = 'Read case study',
  ctaHref,
  featured = false,
  compact = false,
  className,
  ...rest
}: CaseStudyCardProps) {
  return (
    <article
      className={clsx(
        styles.card,
        featured && styles.featured,
        compact && styles.compact,
        className,
      )}
      {...rest}
    >
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <img
            src={imageSrc}
            alt={imageAlt ?? title}
            className={styles.image}
          />
        </div>
      )}

      <div className={styles.body}>
        {tags && tags.length > 0 && (
          <ul className={styles.tags} role="list" aria-label="Tags">
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>

        {metrics && metrics.length > 0 && (
          <dl className={styles.metrics} aria-label="Key metrics">
            {metrics.map((m) => (
              <div key={m.label} className={styles.metric}>
                <dd className={styles.metricValue}>{m.value}</dd>
                <dt className={styles.metricLabel}>{m.label}</dt>
              </div>
            ))}
          </dl>
        )}

        {ctaHref && (
          <a href={ctaHref} className={styles.cta} aria-label={`${ctaLabel}: ${title}`}>
            {ctaLabel}
            <span aria-hidden="true"> →</span>
          </a>
        )}
      </div>
    </article>
  );
}
