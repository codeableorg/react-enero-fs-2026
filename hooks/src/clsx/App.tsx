import Banner from './Banner';
import './styles.css';

function App() {
  const user = { name: 'Testino Diprueba' };

  return (
    <Banner user={user} type='success'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      quos tenetur nisi laboriosam earum voluptatum dicta.
    </Banner>
  );
}

export default App;
