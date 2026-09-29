// import type { MouseEvent } from 'react';

// function App() {
//   function handleClick(event: MouseEvent<HTMLButtonElement>) {
//     console.log('Evento click recibido');
//     console.log(event.type);
//     console.log(event.target);
//   }

//   return <button onClick={(e) => handleClick(e)}>Click me</button>;
// }

function App() {
  function setTheme(theme: string) {
    console.log('Cambiando al tema: ' + theme);
  }

  function handleClick(theme: string) {
    setTheme(theme);
  }

  return (
    <div>
      <button onClick={() => handleClick('light')}>Light Theme</button>
      <button onClick={() => handleClick('dark')}>Dark Theme</button>
    </div>
  );
}

export default App;
