import { Outlet, useLocation } from 'react-router';
import Footer from '../footer';
import Header from '../header';
import styles from './styles.module.css';
import { useEffect } from 'react';

const user: { email: string } | null =
  Math.random() > 0.5 ? { email: 'user@example.com' } : null;
const cartItemsCount = 0;

export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.root}>
      <Header
        className={styles['root__header']}
        user={user}
        cartItemsCount={cartItemsCount}
      />
      <main>
        <Outlet />
      </main>
      <Footer className={styles['root__footer']} />
    </div>
  );
}
