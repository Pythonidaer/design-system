import { type HTMLAttributes, type ReactNode, useId } from 'react';
import styles from './FormField.module.css';
import { clsx } from '../../utils/clsx';

export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  htmlFor?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  'data-testid'?: string;
  children: ReactNode;
}

export function FormField({
  label,
  htmlFor,
  error,
  hint,
  required = false,
  className,
  children,
  ...rest
}: FormFieldProps) {
  const hintId = useId();
  const errorId = useId();

  return (
    <div
      className={clsx(styles.field, error && styles.hasError, className)}
      {...rest}
    >
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}*
          </span>
        )}
      </label>
      <div className={styles.control}>{children}</div>
      {hint && !error && (
        <p id={hintId} className={styles.hint}>
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className={styles.error} role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
