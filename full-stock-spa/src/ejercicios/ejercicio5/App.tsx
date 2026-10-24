import { useState, type SubmitEvent } from 'react';
// import './App.css';

const ENDPOINT =
  'https://test-api-codeable.up.railway.app/api/data?simulatedError=true';

type statuses = 'idle' | 'loading' | 'error' | 'success';

function App() {
  const [status, setStatus] = useState<statuses>('idle');

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email')?.toString() ?? '';
    const message = formData.get('message')?.toString() ?? '';

    setStatus('loading');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: JSON.stringify({ email, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('algo salio mal');
      setStatus('success');
      const data = await response.json();
      form.reset();
      console.log(data);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div className='field-group'>
        <label htmlFor='email' className='label'>
          Email:
        </label>
        <input
          id='email'
          type='email'
          name='email'
          className='field'
          required
          disabled={status === 'loading'}
        />
      </div>
      <div className='field-group'>
        <label htmlFor='message' className='label'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          className='field'
          required
          disabled={status === 'loading'}
        />
      </div>
      <button type='submit' className='button' disabled={status === 'loading'}>
        {status === 'loading' ? 'Submitting...' : 'Submit'}
      </button>
      {status === 'success' && <p>Message sent!</p>}
      {status === 'error' && <p>Something went wrong!</p>}
    </form>
  );
}

export default App;
