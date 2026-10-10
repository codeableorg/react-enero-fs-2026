import { useState } from 'react';
import styles from './styles.module.css';

function handleMathClassName(value: number) {
  let mathClassName = '';

  if (value > 10) mathClassName += ` ${styles.big}`;
  if (value < 0) mathClassName += ` ${styles.small}`;
  if (value !== 0 && value % 5 === 0) mathClassName += ` ${styles.bold}`;
  if (value % 2 === 0) mathClassName += ` ${styles.even}`;
  if (value % 2 === 1 || value % 2 === -1) mathClassName += ` ${styles.odd}`;

  return mathClassName;
}

function NumberPicker() {
  const [value, setValue] = useState(0);

  return (
    <input
      className={`${styles.number} ${handleMathClassName(value)}`}
      type='number'
      value={value}
      onChange={(e) => setValue(Number(e.currentTarget.value))}
    />
  );
}

export default NumberPicker;
