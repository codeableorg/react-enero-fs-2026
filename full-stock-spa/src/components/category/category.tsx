import { type MouseEvent } from 'react';
import type { Category } from '../../types';
import Button from '../../ui/button';
import styles from './styles.module.css';
import { useNavigate } from '../router-provider/router-hooks';

type CategoryProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryProps) {
  const navigate = useNavigate();
  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute('href')!);
  }
  return (
    <Button
      href={`/categories/${category.slug}`}
      className={styles.category}
      onClick={handleLinkClick}
    >
      <div className={styles.category__image}>
        <img src={category.imgSrc} alt={category.alt ?? category.name} />
      </div>
      <div>
        <h3 className={styles.category__name}>{category.name}</h3>
        <p className={styles.category__description}>{category.description}</p>
      </div>
    </Button>
  );
}
