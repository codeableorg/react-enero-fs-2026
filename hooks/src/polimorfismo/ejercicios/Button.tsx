import clsx from 'clsx';
import type { ComponentPropsWithRef } from 'react';
import styles from './Button.module.css';

type ButtonProps = ComponentPropsWithRef<'button'> & {
  variant?: 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'lg' | 'xl' | 'sm-icon' | 'icon' | 'lg-icon' | 'xl-icon';
};

export default function Button({
  variant,
  size,
  className,
  ...delegated
}: ButtonProps) {
  const buttonClassName = clsx(
    styles['button'],
    variant && styles[`button--${variant}`],
    size && styles[`button--${size}`],
    className
  );

  return <button className={buttonClassName} {...delegated} />;
}
