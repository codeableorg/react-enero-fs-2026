import { Link, Outlet } from 'react-router';

export default function DashboardShell() {
  return (
    <div className='dashboard'>
      <aside className='dashboard__sidebar'>
        <strong>CPanel</strong>
        <nav className='shell__nav'>
          <Link to='/dashboard'>Resumen</Link>
          <Link to='/dashboard/reports'>Reportes</Link>
          <Link to='/'>← Volver al sitio</Link>
        </nav>
      </aside>
      <main className='shell__main'>
        <Outlet />
      </main>
    </div>
  );
}
