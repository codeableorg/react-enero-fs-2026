import type { Product } from '../../types';
import styles from './styles.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a href={`/product/${product.slug}`} className={styles['product-card']}>
      <div className={styles['product-card__container']}>
        <img src={product.imgSrc} alt={product.name} />
        <h2 className={styles['product-card__title']}>{product.name}</h2>
        <p className={styles['product-card__price']}>
          S/ {product.price / 100}
        </p>
      </div>
    </a>
  );
}
