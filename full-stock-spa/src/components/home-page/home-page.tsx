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

export default function HomePage() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/category')
      .then((response) => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then(({ data }) => setCategories(data))
      .catch((e) => console.error(e));
  });

  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <Features />
    </>
  );
}
