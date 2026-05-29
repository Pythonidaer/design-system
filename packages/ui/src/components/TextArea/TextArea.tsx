import { type TextareaHTMLAttributes, forwardRef } from 'react';
import styles from './TextArea.module.css';
import { clsx } from '../../utils/clsx';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'data-testid'?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
  { error = false, className, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      className={clsx(styles.textarea, error && styles.error, className)}
      aria-invalid={error || undefined}
      rows={4}
      {...rest}
    />
  );
});
