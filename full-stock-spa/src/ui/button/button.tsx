import clsx from 'clsx';
import type { ComponentPropsWithRef } from 'react';
import styles from './styles.module.css';

type BaseProps = {
  variant?: 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'lg' | 'xl' | 'sm-icon' | 'icon' | 'lg-icon' | 'xl-icon';
};

type ButtonNativeProps = BaseProps &
  ComponentPropsWithRef<'button'> & { href?: never };

type ButtonAsLinkProps = BaseProps &
  ComponentPropsWithRef<'a'> & { href: string };

type ButtonProps = ButtonNativeProps | ButtonAsLinkProps;

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

  if (typeof delegated.href === 'string') {
    return <a className={buttonClassName} {...delegated} />;
  }

  return <button className={buttonClassName} {...delegated} />;
}
