import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ScrollToTop from './components/scroll-to-top';
import Home from './pages/home';
import Products from './pages/products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
