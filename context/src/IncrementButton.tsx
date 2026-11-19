import { useContext } from 'react';
import { CountContext } from './CountProvider';

function IncrementButton() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('Este componente debe usarse dentro de CountProvider');
  }

  const { onIncrement } = context;

  return (
    <button className='button' onClick={onIncrement}>
      Incrementar
    </button>
  );
}

export default IncrementButton;
