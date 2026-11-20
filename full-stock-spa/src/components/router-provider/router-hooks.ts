import { useContext } from 'react';
import { RouterContext } from './router-context';

function useRouterContext() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouterContext debe usarse dentro de <RouterProvider>');
  }

  return context;
}

export function useLocation() {
  return useRouterContext().path;
}

export function useNavigate() {
  return useRouterContext().navigate;
}
