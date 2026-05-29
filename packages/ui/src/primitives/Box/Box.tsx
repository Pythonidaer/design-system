import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './Box.module.css';
import { clsx } from '../../utils/clsx';

type BoxOwnProps<E extends ElementType = 'div'> = {
  as?: E;
  className?: string;
  'data-testid'?: string;
};

export type BoxProps<E extends ElementType = 'div'> = BoxOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof BoxOwnProps<E>>;

function BoxInner<E extends ElementType = 'div'>(
  { as, className, children, ...rest }: BoxProps<E>,
  ref: React.Ref<Element>,
) {
  const Element = (as ?? 'div') as ElementType;
  return (
    <Element ref={ref} className={clsx(styles.box, className)} {...rest}>
      {children}
    </Element>
  );
}

export const Box = forwardRef(BoxInner) as <E extends ElementType = 'div'>(
  props: BoxProps<E> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
