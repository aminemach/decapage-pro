import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import './Header.scss';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link to="/gallery" onClick={() => setMobileMenuOpen(false)}>Galerie</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>À Propos</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </motion.li>
            </ul>
          </nav>

          <div className="header-right">
            <a href="tel:0767271123" className="phone-link">
              {FaPhone({})} <span>07 67 27 11 23</span>
            </a>
            <Link to="/contact" className="btn btn-primary">Devis Gratuit</Link>
            <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? FaTimes({}) : FaBars({})}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
