import type { ComponentProps } from 'react';
import styles from './Input.module.css';

interface InputProps extends ComponentProps<'input'> {
  label: string;
}

export function Input({ id, label, ...props }: InputProps) {
  return (
    <label htmlFor={id} className={styles.field}>
      {label}
      <input id={id} className={styles.input} {...props} />
    </label>
  );
}
