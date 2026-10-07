import { type SubmitEvent } from 'react';
import styles from './styles.module.css';

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
      <div className='container'>
        <section className={`section ${styles['footer__section']}`}>
          <div className={styles['footer__links']}>
            <ul role='list' className={styles['footer__list']}>
              <li className={styles['footer__title']}>Tienda</li>
              <li>
                <a href='/categories/polos'>Polos</a>
              </li>
              <li>
                <a href='/categories/tazas'>Tazas</a>
              </li>
              <li>
                <a href='/categories/stickers'>Stickers</a>
              </li>
            </ul>
            <ul role='list' className={styles['footer__list']}>
              <li className={styles['footer__title']}>Compañía</li>
              <li>
                <a href='/about'>Quienes somos</a>
              </li>
              <li>
                <a href='/terms'>Términos y condiciones</a>
              </li>
              <li>
                <a href='/privacy'>Privacidad</a>
              </li>
            </ul>
            <ul role='list' className={styles['footer__list']}>
              <li className={styles['footer__title']}>Conecta</li>
              <li>
                <a href='https://wa.me/' target='_blank'>
                  WhatsApp
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/' target='_blank'>
                  Facebook
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/' target='_blank'>
                  Instagram
                </a>
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
              <button
                className='button button--lg button--secondary'
                type='submit'
              >
                Suscribirse
              </button>
            </form>
          </div>
        </section>
        <div className='separator'></div>
        <small className={styles['footer__copyright']}>
          Todos los derechos reservados © Full Stock
        </small>
      </div>
    </footer>
  );
}
