import PokemonCard from './PokemonCard';
import Spinner from './Spinner';
import styles from './App.module.css';
import { useCallback, useEffect, useState } from 'react';

type Pokemon = {
  id: string;
  name: string;
  image_url: string;
  types: string[];
};

const ENDPOINT = 'https://test-api-codeable.up.railway.app/api/pokemons';

type status = 'idle' | 'loading' | 'success' | 'error';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [status, setStatus] = useState<status>('idle');

  const runFetch = useCallback(async () => {
    try {
      const response = await fetch(ENDPOINT);
      if (!response.ok) throw new Error();
      setStatus('success');
      const { data } = await response.json();
      setPokemons(data);
    } catch {
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    setStatus('loading');

    // fetch(ENDPOINT)
    //   .then((response) => {
    //     if (!response.ok) throw new Error();
    //     return response.json();
    //   })
    //   .then(({ data }) => {
    //     console.log(data);
    //     setStatus('success');
    //     setPokemons(data);
    //   })
    //   .catch(() => {
    //     console.log('Algo salió mal');
    //     setStatus('error');
    //   });
    runFetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      {status === 'loading' && <Spinner />}
      {status === 'error' && <p> Algo salió mal </p>}
      {status === 'success' &&
        pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            imageUrl={pokemon.image_url}
            name={pokemon.name}
            types={pokemon.types}
          />
        ))}
    </div>
  );
}

export default App;
