import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
// import Counter from './Counter';
import Products from './Products';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Products />
  </StrictMode>
);
