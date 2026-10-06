import { type ReactNode } from 'react';
import styles from './Nota.module.css';

type NotaType = 'info' | 'success' | 'warning' | 'danger';

type NotaProps = {
  type: NotaType;
  title: string;
  children: ReactNode;
};

function Nota({ type, title, children }: NotaProps) {
  return (
    <aside className={`${styles.wrapper} ${styles[type]}`}>
      <h3>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

export default Nota;
