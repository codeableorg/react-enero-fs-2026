import Nota from './components/Nota';

function App() {
  return (
    <div style={{ margin: '1rem' }}>
      <Nota title='Título' type='info'>
        Nota tipo "info"
      </Nota>
      <Nota title='Título' type='success'>
        Nota tipo "success"
      </Nota>
      <Nota title='Título' type='warning'>
        Nota tipo "warning"
      </Nota>
      <Nota title='Título' type='danger'>
        Nota tipo "danger"
      </Nota>
    </div>
  );
}

export default App;
