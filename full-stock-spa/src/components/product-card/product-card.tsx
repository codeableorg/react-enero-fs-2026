import type { Product } from '../../types';
import styles from './styles.module.css';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <a href={`/products/${product.slug}`} className={styles['product-card']}>
      <div className={styles['product-card__container']}>
        <div className={styles['product-card__image-container']}>
          <img
            src={product.imgSrc}
            alt={product.name}
            className={styles['product-card__image']}
          />
        </div>
        <div className={styles['product-card__content']}>
          <h2 className={styles['product-card__title']}>{product.name}</h2>
          <p className={styles['product-card__description']}>
            {product.description}
          </p>
          <p className={styles['product-card__price']}>
            S/ {product.price / 100}
          </p>
        </div>
      </div>
    </a>
  );
}
