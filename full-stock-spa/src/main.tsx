import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import EjercicioPassword from './EjercicioPassword';
// import Form from './Form';
// import ControlledForm from './ControlledForm';
// import UncontrolledForm from './UncontrolledForm';

// import App from './App.tsx';
// import Counter from './Counter';
// import Products from './Products';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EjercicioPassword />
  </StrictMode>
);
