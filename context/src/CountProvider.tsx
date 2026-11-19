import { createContext, useState, type ReactNode } from 'react';

type CountContextValue = {
  count: number;
  onIncrement: () => void;
};

export const CountContext = createContext<CountContextValue | null>(null);

type CountProviderProps = {
  children: ReactNode;
};

function CountProvider({ children }: CountProviderProps) {
  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount(count + 1);
  }

  return (
    <CountContext.Provider value={{ count, onIncrement }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountProvider;
