import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import SocialIcons from './SocialIcons';
import logoMark from '../../assets/logo-mark.png';
import logoMarkLight from '../../assets/logo-mark-light.png';
import './Navbar.css';

const WHATSAPP_ORDER = 'https://wa.me/2349036152411';

interface NavItem {
  name: string;
  path?: string;
  children?: { name: string; path: string }[];
}

/**
 * One bar, with the categories opening downwards. Every entry points at a page
 * that already exists — a dropdown that leads nowhere is worse than no dropdown.
 */
const NAV: NavItem[] = [
  { name: 'Home', path: '/' },
  {
    name: 'Who We Are',
    children: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/our-team' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Photo Gallery', path: '/gallery' },
    ],
  },
  {
    name: 'Our Services',
    children: [
      { name: 'Corporate Catering', path: '/corporate-catering' },
      { name: 'Outdoor Catering', path: '/outdoor-catering' },
      { name: 'Hall Reservation', path: '/hall-reservation' },
    ],
  },
  { name: 'Outlet Locator', path: '/outlet-locator' },
  { name: 'Menu', path: '/menu' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenMenu(null);
    setMobileOpenMenu(null);
  }, [location.pathname]);

  /* A dropdown left hanging after the pointer or focus has moved away is the
     usual failure here, so close on Escape and on any click outside the bar. */
  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenMenu(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [openMenu]);

  const isCurrent = (item: NavItem) =>
    item.path === location.pathname ||
    item.children?.some((c) => c.path === location.pathname);

  return (
    <>
      <header ref={navRef} className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          <Link to="/" className="navbar-logo" aria-label="Tomine Restaurant — home">
            <img className="navbar-logo-mark light-only" src={logoMark} alt="" />
            <img className="navbar-logo-mark dark-only" src={logoMarkLight} alt="" />
            <span className="navbar-logo-text">
              Tomine<span>.</span>
            </span>
          </Link>

          <nav className="navbar-links desktop-only">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="nav-group"
                  onMouseEnter={() => setOpenMenu(item.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={`nav-link nav-trigger ${isCurrent(item) ? 'active' : ''}`}
                    aria-expanded={openMenu === item.name}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === item.name ? null : item.name)}
                  >
                    {item.name}
                    <ChevronDown size={15} className={openMenu === item.name ? 'is-open' : ''} />
                  </button>

                  <AnimatePresence>
                    {openMenu === item.name && (
                      <motion.div
                        className="nav-dropdown"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className={`nav-dropdown-link ${
                              location.pathname === child.path ? 'active' : ''
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path!}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="navbar-actions desktop-only">
            <SocialIcons size={17} />
            <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Order Now</Button>
            </a>
          </div>

          <button
            className="mobile-toggle mobile-only"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

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
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.name} className="mobile-group">
                    <button
                      type="button"
                      className="mobile-nav-link mobile-trigger"
                      aria-expanded={mobileOpenMenu === item.name}
                      onClick={() =>
                        setMobileOpenMenu(mobileOpenMenu === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={mobileOpenMenu === item.name ? 'is-open' : ''}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileOpenMenu === item.name && (
                        <motion.div
                          className="mobile-sublinks"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className={`mobile-sublink ${
                                location.pathname === child.path ? 'active' : ''
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.path!}
                    className={`mobile-nav-link ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              <div className="mobile-menu-actions">
                <a href={WHATSAPP_ORDER} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="primary" fullWidth>
                    Order Now
                  </Button>
                </a>
                <SocialIcons size={20} className="mobile-socials" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
