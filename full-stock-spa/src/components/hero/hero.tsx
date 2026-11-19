import { useContext, type MouseEvent } from 'react';
import Button from '../../ui/button';
import Container from '../../ui/container';
import styles from './styles.module.css';
import { RouterContext } from '../router-provider';

export default function Hero() {
  const { navigate } = useContext(RouterContext)!;
  function handleLinkClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute('href')!);
  }

  return (
    <section className={styles.hero}>
      <Container className={styles['hero__container']}>
        <h2 className={styles['hero__title']}>Nuevos productos disponibles</h2>
        <p className={styles['hero__text']}>
          Un pequeño lote de increíbles productos acaba de llegar.
          <br />
          Agrega tus favoritos al carrito antes que se agoten.
        </p>
        <Button href='/categories/polos' size='xl' onClick={handleLinkClick}>
          Compra ahora
        </Button>
      </Container>
    </section>
  );
}
