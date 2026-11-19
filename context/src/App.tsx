import CountProvider from './CountProvider';
import Toolbar from './Toolbar';

function App() {
  return (
    <CountProvider>
      <div className='container'>
        <h1>Contador</h1>
        <Toolbar />
      </div>
    </CountProvider>
  );
}

export default App;
