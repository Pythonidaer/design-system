import { type HTMLAttributes } from 'react';
import styles from './LogoCloud.module.css';
import { clsx } from '../../utils/clsx';

export interface LogoItem {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
}

export interface LogoCloudProps extends HTMLAttributes<HTMLDivElement> {
  logos: LogoItem[];
  title?: string;
  columns?: 2 | 3 | 4 | 5 | 6;
  'data-testid'?: string;
}

export function LogoCloud({ logos, title, columns = 4, className, ...rest }: LogoCloudProps) {
  return (
    <div className={clsx(styles.cloud, className)} {...rest}>
      {title && <p className={styles.title}>{title}</p>}
      <ul
        className={clsx(styles.grid, styles[`cols_${columns}`])}
        role="list"
        aria-label={title ?? 'Partner logos'}
      >
        {logos.map((logo) => (
          <li key={logo.src} className={styles.item}>
            {logo.href ? (
              <a
                href={logo.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${logo.alt}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={styles.logo}
                  width={logo.width ?? 120}
                  height={logo.height ?? 40}
                />
              </a>
            ) : (
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logo}
                width={logo.width ?? 120}
                height={logo.height ?? 40}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
