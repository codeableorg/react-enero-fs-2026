import { useState } from 'react';

export default function ControlledForm() {
  const [username, setUsername] = useState('');

  return (
    <form>
      <div>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <p>Value: {username}</p>
    </form>
  );
}
