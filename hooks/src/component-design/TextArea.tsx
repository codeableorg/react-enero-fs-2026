import type { ComponentProps } from 'react';
import styles from './TextArea.module.css';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label: string;
}

export function TextArea({ id, label, ...props }: TextAreaProps) {
  return (
    <label htmlFor={id} className={styles.field}>
      {label}
      <textarea id={id} className={styles.textarea} {...props} />
    </label>
  );
}
