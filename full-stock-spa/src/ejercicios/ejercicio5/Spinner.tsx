import { Loader } from 'react-feather';
import styles from './Spinner.module.css';

type SpinnerProps = {
  color?: string;
  size?: string | number;
};

const Spinner = ({ color, size }: SpinnerProps) => {
  return (
    <div className={styles.wrapper}>
      <Loader color={color} size={size} />
    </div>
  );
};

export default Spinner;
