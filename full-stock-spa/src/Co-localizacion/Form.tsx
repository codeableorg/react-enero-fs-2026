import { useState } from 'react';

export default function Form() {
  const [value, setValue] = useState('');
  return (
    <div>
      <h2>Form component:</h2>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
