import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.querySelector('#root'));

function Card(props) {
  return (
    <li className='card'>
      <h2>{props.nombre}</h2>
      <p>{props.role}</p>
    </li>
  );
}

function App() {
  return (
    <>
      <p></p>
      <ul className='card-list'>
        <Card nombre='Micaela' role='Frontend Developer' />
        <Card nombre='Simon' role='Backend Developer' />
        <Card nombre='Miguel' role='Fullstack Developer' />
      </ul>
    </>
  );
}

root.render(<App />);
