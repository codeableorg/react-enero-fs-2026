import { useEffect, useState } from 'react';
import Categories from '../categories';
import Features from '../features';
import Hero from '../hero';
import styles from './styles.module.css';
import type { Category } from '../../types';
import { API_URL } from '../../config';

type statuses = 'idle' | 'loading' | 'success' | 'error';

const url = `${API_URL}/category`;

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState<statuses>('idle');

  useEffect(() => {
    async function runEffect() {
      try {
        setStatus('loading');

        const response = await fetch(url);
        const body = await response.json();

        if (!response.ok) throw new Error(body.error);

        const { data } = body;
        setStatus('success');
        setCategories(data);
      } catch (e) {
        setStatus('error');
        console.error(e);
      }
    }

    runEffect();
  }, []);

  return (
    <>
      <Hero />
      {status === 'error' && (
        <section className={styles['categories-error']}>
          <div className='container'>
            <h2 className={styles['categories-error__title']}>
              Algo salió mal
            </h2>
            <p className={styles['categories-error__description']}>
              No pudimos cargar las categorías. Por favor, intenta recargar la
              página.
            </p>
          </div>
        </section>
      )}
      {status === 'success' && <Categories categories={categories} />}
      <Features />
    </>
  );
}
