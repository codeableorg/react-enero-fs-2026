import Footer from '../footer';
import Header from '../header';
import CategoryPage from '../category-page';
import styles from './styles.module.css';
import HomePage from '../home-page';
import Container from '../../ui/container';
import { useRouterContext } from '../router-provider/router-hooks';

const user: { email: string } | null =
  Math.random() > 0.5 ? { email: 'user@example.com' } : null;
const cartItemsCount = 0;

export default function App() {
  const { path } = useRouterContext();

  let page;
  if (path === '/') {
    page = <HomePage />;
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
      />
      <main>{page}</main>
      <Footer />
    </div>
  );
}
