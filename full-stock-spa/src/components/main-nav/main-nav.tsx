import Button from '../../ui/button';
import styles from './styles.module.css';

export default function MainNav() {
  return (
    <nav aria-label='Navegación principal' className={styles['main-nav']}>
      <ul className={styles['main-nav__list']}>
        <li className={styles['main-nav__item']}>
          <Button href='/categories/polos' className={styles['main-nav__link']}>
            Polos
          </Button>
        </li>
        <li className={styles['main-nav__item']}>
          <Button href='/categories/tazas' className={styles['main-nav__link']}>
            Tazas
          </Button>
        </li>
        <li className={styles['main-nav__item']}>
          <Button
            href='/categories/stickers'
            className={styles['main-nav__link']}
          >
            Stickers
          </Button>
        </li>
      </ul>
    </nav>
  );
}
