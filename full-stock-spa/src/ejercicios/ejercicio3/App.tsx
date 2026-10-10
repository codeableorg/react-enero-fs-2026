import NumberPicker from './components/NumberPicker';
import { range } from './helpers';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.wrapper}>
      {range(3).map((n) => (
        <NumberPicker key={n} />
      ))}
    </div>
  );
}

export default App;
