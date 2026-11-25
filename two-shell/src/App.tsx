import { Routes, Route, useLocation } from 'react-router';
import PublicShell from './PublicShell';
import DashboardShell from './DashboardShell';
import Overview from './pages/Overview';
import Reports from './pages/Reports';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const { pathname } = useLocation();

  // 🚧 Elegimos el shell a mano, ramificando sobre la URL.
  if (pathname.startsWith('/dashboard')) {
    return (
      <DashboardShell>
        <Routes>
          <Route path='/dashboard' element={<Overview />} />
          <Route path='/dashboard/reports' element={<Reports />} />
        </Routes>
      </DashboardShell>
    );
  }

  return (
    <PublicShell>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </PublicShell>
  );
}
