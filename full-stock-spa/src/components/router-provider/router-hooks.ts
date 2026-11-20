import { useContext } from 'react';
import { RouterContext } from './router-context';

export function useRouterContext() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouterContext debe usarse dentro de <RouterProvider>');
  }

  return context;
}
