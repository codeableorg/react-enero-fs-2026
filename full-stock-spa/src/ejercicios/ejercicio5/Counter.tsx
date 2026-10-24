import { useState, useEffect } from 'react';

function Counter() {
  console.log('render Counter');

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('efecto: agregar eventListener');

    function listener(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        console.log('Escape pressed!');
      }
    }

    window.addEventListener('keydown', listener);
    return () => {
      console.log('limpieza de efecto');
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
