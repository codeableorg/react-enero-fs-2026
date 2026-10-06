import { useState } from 'react';

export default function EjercicioPassword() {
  const [inputType, setInputType] = useState('password');
  const [checked, setChecked] = useState(false);

  function handleChange() {
    if (checked) {
      setInputType('password');
    } else {
      setInputType('text');
    }
    setChecked(!checked);
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', maxWidth: '200px' }}
    >
      <label htmlFor='password'>Password</label>
      <input type={inputType} name='password' id='password' />
      <label>
        <input type='checkbox' checked={checked} onChange={handleChange} />
        Mostrar password
      </label>
    </div>
  );
}
