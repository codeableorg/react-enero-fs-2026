import { NavLink, Outlet } from 'react-router';

export default function DashboardShell() {
  return (
    <div className='dashboard'>
      <aside className='dashboard__sidebar'>
        <strong>Panel</strong>
        <nav
          className='shell__nav'
          style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}
        >
          <NavLink
            to='/dashboard'
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
            end
          >
            Resumen
          </NavLink>
          <NavLink
            to='/dashboard/reports'
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
          >
            Reportes
          </NavLink>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? 'nav__link nav__link--active' : 'nav__link'
            }
            end
          >
            ← Volver al sitio
          </NavLink>
        </nav>
      </aside>
      <main className='shell__main'>
        <Outlet />
      </main>
    </div>
  );
}
