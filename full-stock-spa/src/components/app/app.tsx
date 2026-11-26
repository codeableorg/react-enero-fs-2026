import CategoryPage from '../category-page';
import HomePage from '../home-page';
import Container from '../../ui/container';
import { Route, Routes } from 'react-router';
import RootLayout from '../root-layout';

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/categories/:slug' element={<CategoryPage />} />
        <Route
          path='*'
          element={
            <Container>
              <p>404 - Página no encontrada</p>
            </Container>
          }
        />
      </Route>
    </Routes>
  );
}
