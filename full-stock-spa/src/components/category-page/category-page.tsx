import { useEffect, useState } from 'react';
import type { Category, Product } from '../../types';
import { API_URL } from '../../config';
import styles from './styles.module.css';
import Container from '../../ui/container';
import PriceFilter from '../price-filter';
import ProductCard from '../product-card';

type CategoryPageProps = {
  categorySlug: string;
};

export default function CategoryPage({ categorySlug }: CategoryPageProps) {
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('loading');

  useEffect(() => {
    async function runEffect() {
      try {
        const [categoryResponse, productsResponse] = await Promise.all([
          fetch(`${API_URL}/categories/${categorySlug}`),
          fetch(`${API_URL}/categories/${categorySlug}/products`)
        ]);
        const categoryBody = await categoryResponse.json();
        const productsBody = await productsResponse.json();

        if (!categoryResponse.ok) throw new Error(categoryBody.error);
        if (!productsResponse.ok) throw new Error(productsBody.error);

        setCategory(categoryBody.data);
        setProducts(productsBody.data);
        setStatus('success');
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    }
    runEffect();
  }, [categorySlug]);

  const isLoading = status === 'loading';
  const isError = status === 'error';

  if (isError) {
    return (
      <section className={styles['category-page-error']}>
        <Container>
          <p className={styles['category-page-error__message']}>
            Algo salió mal. Por favor, intenta recargar la página.
          </p>
        </Container>
      </section>
    );
  }

  if (isLoading || category === null) return null;

  return (
    <>
      <section className={styles['category-header']}>
        <Container>
          <div className={styles['category-header__content']}>
            <h1 className={styles['category-header__title']}>
              {category.name}
            </h1>
            <p className={styles['category-header__description']}>
              {category.description}
            </p>
          </div>
        </Container>
      </section>
      <section className={styles['products']}>
        <Container>
          <div className={styles['products__layout']}>
            <PriceFilter className={styles['products__price-filter']} />
            {products.length === 0 ? (
              <p>No hay productos en esta categoría.</p>
            ) : (
              <div className={styles['products__grid']}>
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
