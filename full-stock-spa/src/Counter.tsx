import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(1);

  function handleClick() {
    console.log('handleClick', count);
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
