import { type SubmitEvent } from 'react';
import styles from './styles.module.css';
import Button from '../../ui/button';
import Container from '../../ui/container';

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // La API todavía no tiene un endpoint de boletín. Sin el preventDefault, el
    // navegador enviaría el formulario de forma nativa y recargaría la SPA.
    console.log('Suscripción al boletín:', formData.get('email'));
  }

  return (
    <footer className={className}>
      <Container>
        <section className={`section ${styles['footer__section']}`}>
          <div className={styles['footer__links']}>
            <ul role='list' className={styles['footer__list']}>
              <li className={styles['footer__title']}>Tienda</li>
              <li>
                <Button href='/categories/polos'>Polos</Button>
              </li>
              <li>
                <Button href='/categories/tazas'>Tazas</Button>
              </li>
              <li>
                <Button href='/categories/stickers'>Stickers</Button>
              </li>
            </ul>
            <ul role='list' className={styles['footer__list']}>
              <li className={styles['footer__title']}>Compañía</li>
              <li>
                <Button href='/about'>Quienes somos</Button>
              </li>
              <li>
                <Button href='/terms'>Términos y condiciones</Button>
              </li>
              <li>
                <Button href='/privacy'>Privacidad</Button>
              </li>
            </ul>
            <ul role='list' className={styles['footer__list']}>
              <li className={styles['footer__title']}>Conecta</li>
              <li>
                <Button href='https://wa.me/' target='_blank'>
                  WhatsApp
                </Button>
              </li>
              <li>
                <Button href='https://www.facebook.com/' target='_blank'>
                  Facebook
                </Button>
              </li>
              <li>
                <Button href='https://www.instagram.com/' target='_blank'>
                  Instagram
                </Button>
              </li>
            </ul>
          </div>
          <div className={styles['footer__newsletter']}>
            <p className={styles['footer__newsletter-title']}>
              Suscríbete a nuestro boletín
            </p>
            <p className={styles['footer__newsletter-text']}>
              Recibe las últimas ofertas y descuentos en tu correo semanalmente.
            </p>
            <form className={styles['footer__form']} onSubmit={handleSubmit}>
              <input
                type='email'
                aria-label='Correo'
                name='email'
                required
                placeholder='ejemplo@mail.com'
                autoComplete='email'
              />
              <Button
                className='button button--lg button--secondary'
                type='submit'
              >
                Suscribirse
              </Button>
            </form>
          </div>
        </section>
        <div className='separator'></div>
        <small className={styles['footer__copyright']}>
          Todos los derechos reservados © Full Stock
        </small>
      </Container>
    </footer>
  );
}
