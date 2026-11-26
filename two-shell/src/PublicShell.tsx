import { NavLink, Outlet } from 'react-router';

export default function PublicShell() {
  return (
    <div>
      <header className='shell__header'>
        <strong>Acme</strong>
        <nav
          className='shell__nav'
          style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}
        >
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
            end
          >
            Inicio
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
          >
            Nosotros
          </NavLink>
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
          >
            Dashboard
          </NavLink>
        </nav>
      </header>
      <main className='shell__main'>
        <Outlet />
      </main>
    </div>
  );
}
