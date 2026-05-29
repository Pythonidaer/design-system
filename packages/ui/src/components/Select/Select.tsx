import { type SelectHTMLAttributes, forwardRef } from 'react';
import styles from './Select.module.css';
import { clsx } from '../../utils/clsx';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  size?: SelectSize;
  error?: boolean;
  options?: SelectOption[];
  placeholder?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'data-testid'?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = 'md', error = false, options, placeholder, className, children, ...rest },
  ref,
) {
  return (
    <div className={styles.wrapper}>
      <select
        ref={ref}
        className={clsx(
          styles.select,
          styles[`size_${size}`],
          error && styles.error,
          className,
        )}
        aria-invalid={error || undefined}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options
          ? options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))
          : children}
      </select>
      <span className={styles.chevron} aria-hidden="true" />
    </div>
  );
});
