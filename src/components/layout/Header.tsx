import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.scss';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      if (window.innerWidth > 767) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Add body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h1>Décapage<span>Pro</span></h1>
              </motion.div>
            </Link>
          </div>

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} ref={menuRef}>
            <div className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
              {FaTimes({})}
            </div>
            <ul>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link 
                  to="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  Accueil
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link 
                  to="/services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={location.pathname === '/services' ? 'active' : ''}
                >
                  Services
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link 
                  to="/gallery" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={location.pathname === '/gallery' ? 'active' : ''}
                >
                  Galerie
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link 
                  to="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={location.pathname === '/about' ? 'active' : ''}
                >
                  À Propos
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link 
                  to="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className={location.pathname === '/contact' ? 'active' : ''}
                >
                  Contact
                </Link>
              </motion.li>
            </ul>
          </nav>

          {mobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setMobileMenuOpen(false)}></div>}

          <div className="header-right">
            <a href="tel:+21622763146" className="phone-link">
              {FaPhone({})} <span>+216 22 763 146</span>
            </a>
            <Link to="/contact" className="btn btn-primary">Devis Gratuit</Link>
            {isMobile && (
              <div className="mobile-menu-toggle" onClick={toggleMobileMenu} ref={toggleButtonRef}>
                {mobileMenuOpen ? FaTimes({}) : FaBars({})}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
