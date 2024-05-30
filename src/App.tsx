import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ScrollToTop from './components/scroll-to-top';
import About from './pages/about';
import Contact from './pages/contact';
import Home from './pages/home';
import Products from './pages/products';
import { Routes, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <ScrollToTop />
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer></Footer>
      </HashRouter>
    </div>
  );
}

export default App;
