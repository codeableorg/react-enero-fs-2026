import { useEffect, useState } from 'react';
import type { Category, Product } from '../../types';
import { API_URL } from '../../config';

type CategoryPageProps = {
  categorySlug: string;
};

export default function CategoryPage({ categorySlug }: CategoryPageProps) {
  const [category, setCategory] = useState<Category | null>(null);
  const [categoryStatus, setCategoryStatus] = useState<
    'loading' | 'success' | 'error'
  >('loading');

  const [products, setProducts] = useState<Product[]>([]);
  const [productsStatus, setProductsStatus] = useState<
    'loading' | 'success' | 'error'
  >('loading');

  useEffect(() => {
    async function runEffect() {
      try {
        const response = await fetch(`${API_URL}/categories/${categorySlug}`);
        const body = await response.json();
        if (!response.ok) throw new Error(body.error);
        setCategory(body.data);
        setCategoryStatus('success');
      } catch (error) {
        console.error(error);
        setCategoryStatus('error');
      }
    }
    runEffect();
  }, [categorySlug]);

  useEffect(() => {
    async function runEffect() {
      try {
        const response = await fetch(
          `${API_URL}/categories/${categorySlug}/products`
        );
        const body = await response.json();
        if (!response.ok) throw new Error(body.error);
        setProducts(body.data);
        setProductsStatus('success');
      } catch (error) {
        console.error(error);
        setProductsStatus('error');
      }
    }
    runEffect();
  }, [categorySlug]);

  const isLoading =
    categoryStatus === 'loading' || productsStatus === 'loading';
  const isError = categoryStatus === 'error' || productsStatus === 'error';

  if (isError) {
    return <p>Algo salió mal...</p>;
  }

  if (isLoading || category === null) return null;

  return <></>;
}
