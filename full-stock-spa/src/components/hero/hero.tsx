import styles from './styles.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles['hero__container']}`}>
        <h2 className={styles['hero__title']}>Nuevos productos disponibles</h2>
        <p className={styles['hero__text']}>
          Un pequeño lote de increíbles productos acaba de llegar.
          <br />
          Agrega tus favoritos al carrito antes que se agoten.
        </p>
        <a href='/category' className='button button--xl'>
          Compra ahora
        </a>
      </div>
    </section>
  );
}
