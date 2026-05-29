import { type HTMLAttributes } from 'react';
import styles from './StatsBlock.module.css';
import { clsx } from '../../utils/clsx';

export interface StatItem {
  value: string;
  label: string;
  description?: string;
  highlighted?: boolean;
}

export interface StatsBlockProps extends HTMLAttributes<HTMLDListElement> {
  stats: StatItem[];
  columns?: 2 | 3 | 4;
  'data-testid'?: string;
}

export function StatsBlock({ stats, columns = 3, className, ...rest }: StatsBlockProps) {
  return (
    <dl
      className={clsx(styles.block, styles[`cols_${columns}`], className)}
      {...rest}
    >
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={clsx(styles.stat, stat.highlighted && styles.highlighted)}
        >
          <dd className={styles.value}>{stat.value}</dd>
          <dt className={styles.label}>{stat.label}</dt>
          {stat.description && (
            <p className={styles.description}>{stat.description}</p>
          )}
        </div>
      ))}
    </dl>
  );
}
