import { type ReactNode } from 'react';
import { Link } from 'react-router';

type Props = { children: ReactNode };

export default function DashboardShell({ children }: Props) {
  return (
    <div className='dashboard'>
      <aside className='dashboard__sidebar'>
        <strong>Panel</strong>
        <nav className='shell__nav'>
          <Link to='/dashboard'>Resumen</Link>
          <Link to='/dashboard/reports'>Reportes</Link>
          <Link to='/'>← Volver al sitio</Link>
        </nav>
      </aside>
      <main className='shell__main'>{children}</main>
    </div>
  );
}
