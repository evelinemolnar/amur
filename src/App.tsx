import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import CartProvider from './cart/CartProvider';
import AnnouncementBar from './components/AnnouncementBar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Checkout from './routes/Checkout';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Product from './routes/Product';
import Ritual from './routes/Ritual';
import Shop from './routes/Shop';
import Story from './routes/Story';
import Subscribe from './routes/Subscribe';
import Wellness from './routes/Wellness';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <AnnouncementBar />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/ritual" element={<Ritual />} />
          <Route path="/story" element={<Story />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <CartDrawer />
      </CartProvider>
    </BrowserRouter>
  );
}
