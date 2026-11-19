import { useContext } from 'react';
import { CountContext } from './CountProvider';

function Display() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('Este componente debe usarse dentro de CountProvider');
  }

  const { count } = context;
  return <p className='count'>{count}</p>;
}

export default Display;
