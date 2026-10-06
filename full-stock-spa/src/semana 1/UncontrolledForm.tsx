import { type SubmitEvent } from 'react';

export default function UncontrolledForm() {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    console.log(values);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' name='username' />
        </div>
        <div>
          <label htmlFor='bio'>Biography:</label>
          <textarea id='bio' name='bio' />
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <select name='country' id='country'>
            <option value=''>Select one</option>
            <option value='pe'>Peru</option>
            <option value='mx'>Mexico</option>
            <option value='co'>Colombia</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
