import Display from './Display';
import IncrementButton from './IncrementButton';

function Toolbar() {
  return (
    <div className='toolbar'>
      <Display />
      <IncrementButton />
    </div>
  );
}

export default Toolbar;
