import { createContext, useState } from 'react';
import Toolbar from './Toolbar';

type CountContextValue = {
  count: number;
  onIncrement?: () => void;
};

export const CountContext = createContext<CountContextValue | null>(null);

function App() {
  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{ count, onIncrement }}>
      <div className='container'>
        <h1>Contador</h1>
        <Toolbar />
      </div>
    </CountContext.Provider>
  );
}

export default App;
