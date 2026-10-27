import { useEffect, useState } from 'react';
import Categories from '../categories';
import Features from '../features';
import Hero from '../hero';

export type Category = {
  id: number;
  name: string;
  slug: string;
  imgSrc: string;
  alt: string | null;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

type statuses = 'idle' | 'loading' | 'success' | 'error';

const url = 'http://localhost:3000/api/category';

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [status, setStatus] = useState<statuses>('idle');

  useEffect(() => {
    async function runEffect() {
      try {
        setStatus('loading');
        const response = await fetch(url);
        if (!response.ok) throw new Error();
        const { data } = await response.json();
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
      {status === 'success' && <Categories categories={categories} />}
      <Features />
    </>
  );
}
