import clsx from 'clsx';
import type { ComponentPropsWithRef } from 'react';
import styles from './Button.module.css';

type ButtonLinkProps = ComponentPropsWithRef<'a'> & {
  variant?: 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'lg' | 'xl' | 'sm-icon' | 'icon' | 'lg-icon' | 'xl-icon';
};

export default function ButtonLink({
  variant,
  size,
  className,
  ...delegated
}: ButtonLinkProps) {
  const buttonLinkClassName = clsx(
    styles['button'],
    variant && styles[`button--${variant}`],
    size && styles[`button--${size}`],
    className
  );

  return <a className={buttonLinkClassName} {...delegated} />;
}
