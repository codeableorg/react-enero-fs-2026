import Footer from '../footer';
import Header from '../header';
import HomePage from '../home-page';
import styles from './styles.module.css';

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
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
