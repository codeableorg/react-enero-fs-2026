import { useRef } from 'react';
import InputField from './InputField';
import './App.css';

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    console.log(inputRef);
    inputRef.current?.focus();
  }

  return (
    <div className='form'>
      <InputField label='Username' name='username' ref={inputRef} />
      <button onClick={handleClick}>Focus al input</button>
    </div>
  );
}

export default App;
