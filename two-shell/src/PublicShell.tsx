import { Link, Outlet } from 'react-router';

export default function PublicShell() {
  return (
    <div>
      <header className='shell__header'>
        <strong>Acme, amigo del coyote</strong>
        <nav className='shell__nav'>
          <Link to='/'>Inicio</Link>
          <Link to='/about'>Nosotros</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </nav>
      </header>
      <main className='shell__main'>
        <Outlet />
      </main>
    </div>
  );
}
