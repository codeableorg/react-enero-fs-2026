import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app';
import RouterProvider from './components/router-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </StrictMode>
);
