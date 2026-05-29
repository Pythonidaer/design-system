import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './Text.module.css';
import { clsx } from '../../utils/clsx';

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body-large' | 'body' | 'small';

type TextOwnProps<E extends ElementType = 'p'> = {
  as?: E;
  variant?: TextVariant;
  className?: string;
  'data-testid'?: string;
};

export type TextProps<E extends ElementType = 'p'> = TextOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof TextOwnProps<E>>;

const variantToElement: Record<TextVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  'body-large': 'p',
  body: 'p',
  small: 'small',
};

function TextInner<E extends ElementType = 'p'>(
  { as, variant = 'body', className, children, ...rest }: TextProps<E>,
  ref: React.Ref<Element>,
) {
  const Element = (as ?? variantToElement[variant]) as ElementType;
  return (
    <Element
      ref={ref}
      className={clsx(styles.text, styles[variant.replace('-', '_') as keyof typeof styles], className)}
      {...rest}
    >
      {children}
    </Element>
  );
}

export const Text = forwardRef(TextInner) as <E extends ElementType = 'p'>(
  props: TextProps<E> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
