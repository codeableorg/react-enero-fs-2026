import { useState } from 'react';
import Display from './Display';
import Form from './Form';

export default function App() {
  const [value, setValue] = useState('');

  function handleChange(newValue: string) {
    setValue(newValue);
  }
  return (
    <div>
      <h1>Elevación de Estado</h1>
      <Form value={value} handleChange={handleChange} />
      <hr />
      <Display value={value} />
    </div>
  );
}
