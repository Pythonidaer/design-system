import { type ElementType, type ComponentPropsWithoutRef, forwardRef } from 'react';
import styles from './Stack.module.css';
import { clsx } from '../../utils/clsx';

type StackDirection = 'row' | 'column';
type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type StackGap = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '8' | '10' | '12' | '16';

type StackOwnProps<E extends ElementType = 'div'> = {
  as?: E;
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  gap?: StackGap;
  wrap?: boolean;
  className?: string;
  'data-testid'?: string;
};

export type StackProps<E extends ElementType = 'div'> = StackOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof StackOwnProps<E>>;

function StackInner<E extends ElementType = 'div'>(
  {
    as,
    direction = 'column',
    align,
    justify,
    gap,
    wrap = false,
    className,
    children,
    ...rest
  }: StackProps<E>,
  ref: React.Ref<Element>,
) {
  const Element = (as ?? 'div') as ElementType;
  return (
    <Element
      ref={ref}
      className={clsx(
        styles.stack,
        styles[`direction_${direction}`],
        align && styles[`align_${align}`],
        justify && styles[`justify_${justify}`],
        gap !== undefined && styles[`gap_${gap}`],
        wrap && styles.wrap,
        className,
      )}
      {...rest}
    >
      {children}
    </Element>
  );
}

export const Stack = forwardRef(StackInner) as <E extends ElementType = 'div'>(
  props: StackProps<E> & { ref?: React.Ref<Element> },
) => React.ReactElement | null;
