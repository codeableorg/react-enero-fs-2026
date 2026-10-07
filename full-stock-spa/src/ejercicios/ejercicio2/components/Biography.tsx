import { useState } from 'react';
import styles from './styles.module.css';

function Biography() {
  const [value, setValue] = useState('');

  const MAX_CHARS = 20;
  const remaining = MAX_CHARS - value.length;
  const isInvalid = value.length > MAX_CHARS;

  return (
    <div className={styles.wrapper}>
      <label id='bio'>Biografía:</label>
      <textarea
        id='bio'
        name='bio'
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <p className={`${styles.message} ${isInvalid ? styles.error : ''}`}>
        Quedan {remaining} caracteres disponibles
      </p>
    </div>
  );
}

export default Biography;
