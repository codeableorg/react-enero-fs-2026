import type { Category } from '../../types';
import styles from './styles.module.css';

type CategoryProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryProps) {
  return (
    <a href='category' className={styles.category}>
      <div className={styles.category__image}>
        <img src={category.imgSrc} alt={category.alt ?? category.name} />
      </div>
      <div>
        <h3 className={styles.category__name}>{category.name}</h3>
        <p className={styles.category__description}>{category.description}</p>
      </div>
    </a>
  );
}
