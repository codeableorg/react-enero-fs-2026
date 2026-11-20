import useLocalStorage from './useLocalStorage';

function App() {
  const [count, setCount] = useLocalStorage<number>('count', 0);

  return (
    <div className='container'>
      <p className='count'>{count}</p>
      <button className='button' onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  );
}

export default App;
