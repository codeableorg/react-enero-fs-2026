import Footer from '../footer';
import Header from '../header';
import HomePage from '../home-page';

export default function App() {
  return (
    <div className='root'>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
