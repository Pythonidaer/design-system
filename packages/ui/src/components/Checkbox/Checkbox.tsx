import { type InputHTMLAttributes, forwardRef, useId } from 'react';
import styles from './Checkbox.module.css';
import { clsx } from '../../utils/clsx';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: boolean;
  'aria-describedby'?: string;
  'data-testid'?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, error = false, className, id, ...rest },
  ref,
) {
  const autoId = useId();
  const checkboxId = id ?? autoId;

  return (
    <label htmlFor={checkboxId} className={clsx(styles.wrapper, rest.disabled && styles.wrapperDisabled, className)}>
      <input
        ref={ref}
        id={checkboxId}
        type="checkbox"
        className={clsx(styles.checkbox, error && styles.error)}
        aria-invalid={error || undefined}
        {...rest}
      />
      <span className={styles.label}>{label}</span>
    </label>
  );
});
