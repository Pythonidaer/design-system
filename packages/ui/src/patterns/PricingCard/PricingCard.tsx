import { type HTMLAttributes } from 'react';
import styles from './PricingCard.module.css';
import { clsx } from '../../utils/clsx';
import { Button } from '../../components/Button';

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  price: string;
  billingPeriod?: string;
  description?: string;
  features: PricingFeature[];
  ctaLabel: string;
  onCtaClick?: () => void;
  featured?: boolean;
  badge?: string;
  'data-testid'?: string;
}

export function PricingCard({
  title,
  price,
  billingPeriod = '/month',
  description,
  features,
  ctaLabel,
  onCtaClick,
  featured = false,
  badge,
  className,
  ...rest
}: PricingCardProps) {
  return (
    <div
      className={clsx(styles.card, featured && styles.featured, className)}
      aria-label={featured ? `${title} — Recommended plan` : title}
      {...rest}
    >
      {badge && (
        <div className={styles.badge} aria-label={`Plan badge: ${badge}`}>
          {badge}
        </div>
      )}

      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div className={styles.pricing}>
        <span className={styles.price}>{price}</span>
        <span className={styles.period}>{billingPeriod}</span>
      </div>

      <ul className={styles.features} role="list" aria-label={`${title} features`}>
        {features.map((feature) => (
          <li
            key={feature.text}
            className={clsx(styles.feature, !feature.included && styles.featureExcluded)}
          >
            <span className={styles.featureIcon} aria-hidden="true">
              {feature.included ? '✓' : '✕'}
            </span>
            <span
              className={styles.featureText}
              aria-label={feature.included ? feature.text : `Not included: ${feature.text}`}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={featured ? 'primary' : 'outline'}
        size="lg"
        className={styles.cta}
        onClick={onCtaClick}
        aria-label={`${ctaLabel} — ${title} plan`}
      >
        {ctaLabel}
      </Button>
    </div>
  );
}
