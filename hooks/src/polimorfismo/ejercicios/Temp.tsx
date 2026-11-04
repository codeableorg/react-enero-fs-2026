import clsx from 'clsx';
import type { ComponentPropsWithRef } from 'react';
import styles from './Button.module.css';

type ButtonProps = ComponentPropsWithRef<'button'> &
  ComponentPropsWithRef<'a'> & {
    variant?: 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'lg' | 'xl' | 'sm-icon' | 'icon' | 'lg-icon' | 'xl-icon';
  };

export default function Button({
  variant,
  size,
  className,
  href,
  ...delegated
}: ButtonProps) {
  const buttonClassName = clsx(
    styles['button'],
    variant && styles[`button--${variant}`],
    size && styles[`button--${size}`],
    className
  );

  return typeof href === 'string' ? (
    <a className={buttonClassName} href={href} {...delegated} />
  ) : (
    <button className={buttonClassName} {...delegated} />
  );
}
