import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './Card.module.css';
import { clsx } from '../../utils/clsx';

export type CardVariant = 'default' | 'elevated' | 'bordered';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardOwnProps<E extends ElementType = 'div'> {
  as?: E;
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  interactive?: boolean;
  className?: string;
  'data-testid'?: string;
}

export type CardProps<E extends ElementType = 'div'> = CardOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof CardOwnProps<E>>;

function CardInner<E extends ElementType = 'div'>(
  {
    as,
    variant = 'default',
    padding = 'md',
    hoverable = false,
    interactive = false,
    className,
    children,
    ...rest
  }: CardProps<E>,
  ref: React.Ref<Element>,
) {
  const Element = (as ?? 'div') as ElementType;
  return (
    <Element
      ref={ref}
      className={clsx(
        styles.card,
        styles[`variant_${variant}`],
        styles[`padding_${padding}`],
        hoverable && styles.hoverable,
        interactive && styles.interactive,
        className,
      )}
      {...(interactive ? { role: 'button', tabIndex: 0 } : {})}
      {...rest}
    >
      {children}
    </Element>
  );
}

export const Card = forwardRef(CardInner) as <E extends ElementType = 'div'>(
  props: CardProps<E> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
