import { useEffect, useState } from 'react';
import type { Category, Product } from '../../types';
import { API_URL } from '../../config';
import styles from './styles.module.css';
import Container from '../../ui/container';
import PriceFilter from '../price-filter';
import ProductCard from '../product-card';
import { useParams } from 'react-router';

export default function CategoryPage() {
  const [filters, setFilters] = useState<{ min: string; max: string }>({
    min: '',
    max: ''
  });

  const { slug } = useParams();

  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('loading');

  function parsePrice(value: string | null): number | undefined {
    if (value === null || value.trim() === '') return undefined;
    const parsed = Number(value);
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : undefined;
  }

  const minPrice = parsePrice(filters.min);
  const maxPrice = parsePrice(filters.max);

  const visibleProducts = products.filter((product) => {
    const priceInSoles = product.price / 100; // el precio viene en centavos

    // retornamos false si el producto no pasa el filtro
    if (minPrice !== undefined && priceInSoles < minPrice) return false;
    if (maxPrice !== undefined && priceInSoles > maxPrice) return false;

    return true;
  });

  function handleFilter(formData: FormData) {
    setFilters({
      min: String(formData.get('minPrice') ?? ''),
      max: String(formData.get('maxPrice') ?? '')
    });
  }

  useEffect(() => {
    async function runEffect() {
      try {
        const [categoryResponse, productsResponse] = await Promise.all([
          fetch(`${API_URL}/categories/${slug}`),
          fetch(`${API_URL}/categories/${slug}/products`)
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
  }, [slug]);

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
            <PriceFilter
              className={styles['products__price-filter']}
              defaultMinPrice={filters.min}
              defaultMaxPrice={filters.max}
              onFilter={handleFilter}
            />
            {visibleProducts.length === 0 ? (
              <p>No hay productos en esta categoría.</p>
            ) : (
              <div className={styles['products__grid']}>
                {visibleProducts.map((product) => (
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
