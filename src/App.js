import React from 'react';
import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Pricing from './pages/Pricing';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Testimonials from './pages/Testimonials';
import Refund from './pages/Refund';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="app">
      <div className="animated-bg">
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />
      </div>

      <Router>
        <header className="nav">
          <div className="brand">Bright Web D <span className="verse">31:8</span></div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/about">About</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
            {/* Admin route not exposed in main nav; visit /admin to access */}
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/admin" element={<Admin/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/pricing" element={<Pricing/>} />
              <Route path="/privacy" element={<Privacy/>} />
              <Route path="/terms" element={<Terms/>} />            <Route path="/testimonials" element={<Testimonials/>} />
            <Route path="/refund" element={<Refund/>} />          </Routes>
        </main>

        <footer>
          <div className="footer-inner">
            <div>
              <strong>Bright Web D 31:8</strong>
              <p>brightwebd318@gmail.com</p>
            </div>
            <div className="foot-links">
              <Link to="/">Home</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/about">About</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/refund">Refund</Link>
            </div>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Bright Web D 31:8</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
