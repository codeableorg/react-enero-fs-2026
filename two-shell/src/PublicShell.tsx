import { type ReactNode } from 'react';
import { Link } from 'react-router';

type Props = { children: ReactNode };

export default function PublicShell({ children }: Props) {
  return (
    <div>
      <header className='shell__header'>
        <strong>Acme</strong>
        <nav className='shell__nav'>
          <Link to='/'>Inicio</Link>
          <Link to='/about'>Nosotros</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
      </header>
      <main className='shell__main'>{children}</main>
    </div>
  );
}
