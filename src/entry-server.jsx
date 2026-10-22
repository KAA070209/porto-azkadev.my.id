import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AppRoutes from './AppRoutes';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </StaticRouter>
  );
}
