import { type ComponentPropsWithoutRef } from 'react';
import s from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  ComponentPropsWithoutRef<'a'>;

export default function Button({ href, ...delegated }: ButtonProps) {
  const Tag = typeof href === 'string' ? 'a' : 'button';

  return <Tag className={s.button} href={href} {...delegated} />;
}
