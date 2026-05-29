import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './Container.module.css';
import { clsx } from '../../utils/clsx';

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

type ContainerOwnProps<E extends ElementType = 'div'> = {
  as?: E;
  size?: ContainerSize;
  className?: string;
  'data-testid'?: string;
};

export type ContainerProps<E extends ElementType = 'div'> = ContainerOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ContainerOwnProps<E>>;

function ContainerInner<E extends ElementType = 'div'>(
  { as, size = 'xl', className, children, ...rest }: ContainerProps<E>,
  ref: React.Ref<Element>,
) {
  const Element = (as ?? 'div') as ElementType;
  return (
    <Element
      ref={ref}
      className={clsx(styles.container, styles[`size_${size}`], className)}
      {...rest}
    >
      {children}
    </Element>
  );
}

export const Container = forwardRef(ContainerInner) as <E extends ElementType = 'div'>(
  props: ContainerProps<E> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
