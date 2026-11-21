import Footer from '../footer';
import Header from '../header';
import CategoryPage from '../category-page';
import styles from './styles.module.css';
import HomePage from '../home-page';
import Container from '../../ui/container';
import { Route, Routes } from 'react-router';

const user: { email: string } | null =
  Math.random() > 0.5 ? { email: 'user@example.com' } : null;
const cartItemsCount = 0;

export default function App() {
  return (
    <div className='root'>
      <Header
        className={styles['root__header']}
        user={user}
        cartItemsCount={cartItemsCount}
      />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories/:slug' element={<CategoryPage />} />
          <Route
            path='*'
            element={
              <Container>
                <p>404 - Página no encontrada</p>
              </Container>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
