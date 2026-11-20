import { type MouseEvent } from 'react';
import Button from '../../ui/button';
import styles from './styles.module.css';
import { useNavigate } from '../router-provider';

export default function MainNav() {
  const navigate = useNavigate();
  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute('href')!);
  }
  return (
    <nav aria-label='Navegación principal' className={styles['main-nav']}>
      <ul className={styles['main-nav__list']}>
        <li className={styles['main-nav__item']}>
          <Button
            href='/categories/polos'
            className={styles['main-nav__link']}
            onClick={handleLinkClick}
          >
            Polos
          </Button>
        </li>
        <li className={styles['main-nav__item']}>
          <Button
            href='/categories/tazas'
            className={styles['main-nav__link']}
            onClick={handleLinkClick}
          >
            Tazas
          </Button>
        </li>
        <li className={styles['main-nav__item']}>
          <Button
            href='/categories/stickers'
            className={styles['main-nav__link']}
            onClick={handleLinkClick}
          >
            Stickers
          </Button>
        </li>
      </ul>
    </nav>
  );
}
