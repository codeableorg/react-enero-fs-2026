import Footer from '../footer';
import Header from '../header';
// import HomePage from '../home-page';
import CategoryPage from '../category-page';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import HomePage from '../home-page';
import Container from '../../ui/container';

const user: { email: string } | null =
  Math.random() > 0.5 ? { email: 'user@example.com' } : null;
const cartItemsCount = 0;

export default function App() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    function handlePopState() {
      setPath(window.location.pathname);
    }

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  function navigate(to: string) {
    window.history.pushState(null, '', to);
    setPath(to);
  }

  let page;
  if (path === '/') {
    page = <HomePage navigate={navigate} />;
  } else if (path.startsWith('/categories')) {
    const slug = path.replace('/categories/', '');
    page = <CategoryPage categorySlug={slug} />;
  } else {
    page = (
      <Container>
        <p>404 — Página no encontrada</p>
      </Container>
    );
  }

  return (
    <div className='root'>
      <Header
        className={styles['root__header']}
        user={user}
        cartItemsCount={cartItemsCount}
        navigate={navigate}
      />
      <main>{page}</main>
      <Footer navigate={navigate} />
    </div>
  );
}
