import { type ReactNode } from 'react';
import styleNota from './Nota.module.css';

type NotaProps = {
  title: string;
  children: ReactNode;
};

export default function Nota({ title, children }: NotaProps) {
  return (
    <aside className={styleNota.wrapper}>
      <h3 className={styleNota.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  );
}

// export function sumar() {
//   console.log('carlos');
// }
