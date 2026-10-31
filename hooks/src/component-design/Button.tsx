import type { ComponentProps } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export function Button({ variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props} />
  );
}

// children explícito
// export function Button({ variant = 'primary', children, ...props }: ButtonProps) {
//   return (
//     <button className={`${styles.button} ${styles[variant]}`} {...props}>
//       {children}
//     </button>
//   );
// }
