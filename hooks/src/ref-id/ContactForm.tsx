import { useId, useState } from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const id = useId();
  const emailId = `${id}-email`;
  const messageId = `${id}-message`;

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles['form']}>
      <div className={styles['form-field']}>
        <label htmlFor={emailId} className={styles['label']}>
          Email:
        </label>
        <input
          id={emailId}
          type='email'
          name='email'
          placeholder='example@mail.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles['field']}
        />
      </div>
      <div className={styles['form-field']}>
        <label htmlFor={messageId} className={styles['label']}>
          Message:
        </label>
        <textarea
          id={messageId}
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles['field']}
          rows={4}
        />
      </div>
      <button type='submit' className={styles['submit-button']}>
        Send
      </button>
    </form>
  );
}

export default ContactForm;
