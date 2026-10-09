import styles from './styles.module.css';

export default function Features() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <h2 className={styles['features__title']}>
          Nuestra Promesa de Calidad
        </h2>
        <div className={styles['features__grid']}>
          <div className='feature'>
            <img
              src='/images/icons/truck.svg'
              alt=''
              className={styles['feature__icon']}
            />
            <h3 className={styles['feature__title']}>Entrega rápida</h3>
            <p className={styles['feature__description']}>
              Recibe tus productos en tiempo récord, directo a tu puerta, para
              que puedas disfrutar de ellos cuanto antes.
            </p>
          </div>

          <div className='feature'>
            <img
              src='/images/icons/return.svg'
              alt=''
              className={styles['feature__icon']}
            />
            <h3 className={styles['feature__title']}>
              Satisfacción Garantizada
            </h3>
            <p className={styles['feature__description']}>
              Tu felicidad es nuestra prioridad. Si no estás 100% satisfecho,
              estamos aquí para ayudarte con cambios o devoluciones.
            </p>
          </div>

          <div className='feature'>
            <img
              src='/images/icons/ribbon.svg'
              alt=''
              className={styles['feature__icon']}
            />
            <h3 className={styles['feature__title']}>
              Materiales de Alta Calidad
            </h3>
            <p className={styles['feature__description']}>
              Nos aseguramos de que todos nuestros productos estén hechos con
              materiales de la más alta calidad.
            </p>
          </div>

          <div className='feature'>
            <img
              src='/images/icons/idea.svg'
              alt=''
              className={styles['feature__icon']}
            />
            <h3 className={styles['feature__title']}>Diseños Exclusivos</h3>
            <p className={styles['feature__description']}>
              Cada producto está diseñado pensando en los desarrolladores, con
              estilos únicos que no encontrarás en ningún otro lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
