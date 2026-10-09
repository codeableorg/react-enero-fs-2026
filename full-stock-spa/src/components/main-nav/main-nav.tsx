import styles from './styles.module.css';

export default function MainNav() {
  return (
    <nav aria-label='Navegación principal' className={styles['main-nav']}>
      <ul className={styles['main-nav__list']}>
        <li className={styles['main-nav__item']}>
          <a href='/categories/polos' className={styles['main-nav__link']}>
            Polos
          </a>
        </li>
        <li className={styles['main-nav__item']}>
          <a href='/categories/tazas' className={styles['main-nav__link']}>
            Tazas
          </a>
        </li>
        <li className={styles['main-nav__item']}>
          <a href='/categories/stickers' className={styles['main-nav__link']}>
            Stickers
          </a>
        </li>
      </ul>
    </nav>
  );
}
