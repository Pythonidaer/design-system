import { type InputHTMLAttributes, forwardRef } from 'react';
import styles from './Input.module.css';
import { clsx } from '../../utils/clsx';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  error?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'data-testid'?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = 'md', error = false, className, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      className={clsx(
        styles.input,
        styles[`size_${size}`],
        error && styles.error,
        className,
      )}
      aria-invalid={error || undefined}
      {...rest}
    />
  );
});
