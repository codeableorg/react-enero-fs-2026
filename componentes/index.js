import React from 'react';
import { createRoot } from 'react-dom/client';

const div = document.getElementById('root');
const root = createRoot(div);

function Bienvenida(props) {
  const { nombre = 'melquiades', children } = props;
  return (
    <h1>
      Hola, {nombre}
      {children}
    </h1>
  );
}

function Mensaje(props) {
  console.log(props);

  return <p>{props.children}</p>;
}

const elemento = (
  <div>
    <Bienvenida>
      <Mensaje> soy programador</Mensaje>
    </Bienvenida>
  </div>
);

root.render(elemento);
