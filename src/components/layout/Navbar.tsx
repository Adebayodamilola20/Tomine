import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import logoMark from '../../assets/logo-mark.png';
import logoMarkLight from '../../assets/logo-mark-light.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo" aria-label="Tomine Restaurant — home">
            <img className="navbar-logo-mark light-only" src={logoMark} alt="" />
            <img className="navbar-logo-mark dark-only" src={logoMarkLight} alt="" />
            <span className="navbar-logo-text">
              Tomine<span>.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="navbar-links desktop-only">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="navbar-actions desktop-only flex items-center gap-4">
            <a href="https://wa.me/2349036152411" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Order Now</Button>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="mobile-toggle mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu glass-panel"
          >
            <div className="mobile-menu-container">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mobile-menu-actions flex flex-col gap-4 mt-6">
                <a href="https://wa.me/2349036152411" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="primary" fullWidth>Order Now</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
