import CategoryCard from '../category';
import type { Category } from '../home-page';
import styles from './styles.module.css';

interface CategoriesProps {
  categories: Category[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <section className={styles.categories}>
      <div className='container'>
        <div className={styles.categories__header}>
          <h2 className={styles.categories__title}>Compra por categoría</h2>
          <p className={styles.categories__description}>
            Explora nuestra selección de productos especialmente diseñados para
            desarrolladores web.
            <br className={styles['categories__description-break']} />
            Encuentra lo que buscas navegando por nuestras categorías de polos,
            tazas, stickers y más.
          </p>
        </div>
        <div className={styles.categories__grid}>
          {categories.map((category) => (
            <CategoryCard category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
