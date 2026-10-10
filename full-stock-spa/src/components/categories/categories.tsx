import styles from './styles.module.css';

export default function Categories() {
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
          <a href='category' className={styles.category}>
            <div className={styles.category__image}>
              <img src='/images/polos.jpg' alt='Polos' />
            </div>
            <div>
              <h3 className={styles.category__title}>Polos</h3>
              <p className={styles.category__description}>
                Polos exclusivos con diseños que todo desarrollador querrá
                lucir. Ideales para llevar el código a donde vayas.
              </p>
            </div>
          </a>
          <a href='category' className={styles.category}>
            <div className={styles.category__image}>
              <img src='/images/tazas.jpg' alt='Tazas' />
            </div>
            <div>
              <h3 className={styles.category__title}>Tazas</h3>
              <p className={styles.category__description}>
                Tazas que combinan perfectamente con tu café matutino y tu
                pasión por la programación. ¡Empieza el día con estilo!
              </p>
            </div>
          </a>
          <a href='category' className={styles.category}>
            <div className={styles.category__image}>
              <img src='/images/stickers.jpg' alt='Stickers' />
            </div>
            <div>
              <h3 className={styles.category__title}>Stickers</h3>
              <p className={styles.category__description}>
                Personaliza tu espacio de trabajo con nuestros stickers únicos y
                muestra tu amor por el desarrollo web.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
