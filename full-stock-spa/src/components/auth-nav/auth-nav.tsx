import Button from '../../ui/button';
import Container from '../../ui/container';
import styles from './styles.module.css';

type AuthNavProps = {
  user: { email: string } | null;
};

export default function AuthNav({ user }: AuthNavProps) {
  return (
    <div className={styles['auth-nav']}>
      <Container className={styles['auth-nav__container']}>
        <nav aria-label='Autenticación de usuario'>
          <ul className={styles['auth-nav__list']}>
            {user ? (
              <>
                <li className={styles['auth-nav__item']}>
                  Bienvenido {user.email}
                </li>
                <li className={styles['auth-nav__item']}>
                  <form action='/logout' method='POST'>
                    <Button
                      className={`button button--ghost ${styles['auth-nav__button']}`}
                    >
                      Cerrar sesión
                    </Button>
                  </form>
                </li>
              </>
            ) : (
              <>
                <li className={styles['auth-nav__item']}>
                  <Button href='/login' className={styles['auth-nav__link']}>
                    Iniciar sesión
                  </Button>
                </li>
                <li className={styles['auth-nav__item']}>
                  <Button href='/signup' className={styles['auth-nav__link']}>
                    Crear una cuenta
                  </Button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
