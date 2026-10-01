import { useState, type ChangeEvent, type SubmitEvent } from 'react';

type FormValues = {
  username: string;
  bio: string;
  country: string;
};

const initialFormData: FormValues = {
  username: '',
  bio: '',
  country: ''
};

export default function Form() {
  const [formData, setFormData] = useState<FormValues>(initialFormData);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    // hacer algo con formData
    console.log(formData);
    setFormData(initialFormData);
  }

  function handleChange(
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = event.target;
    const nextFormData = { ...formData, [name]: value };
    setFormData(nextFormData);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='bio'>Biography:</label>
          <textarea
            id='bio'
            name='bio'
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='country'>Country:</label>
          <select
            id='country'
            name='country'
            value={formData.country}
            onChange={handleChange}
          >
            <option value=''>Select one</option>
            <option value='pe'>Peru</option>
            <option value='mx'>Mexico</option>
            <option value='co'>Colombia</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
      <hr />
      <p>formData:</p>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
