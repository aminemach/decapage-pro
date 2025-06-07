import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.scss';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <div className="footer-logo">
                <h2>Décapage<span>Pro</span></h2>
              </div>
              <p>Spécialiste du nettoyage et du décapage par laser. Nous proposons aux particuliers, PME et collectivités nos services de nettoyage laser de haute qualité.</p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  {FaFacebookF({})}
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  {FaInstagram({})}
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  {FaLinkedinIn({})}
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3>Nos Services</h3>
              <ul>
                <li><Link to="/services">Tous nos services</Link></li>
                <li><Link to="/services">Décapage Fer et Métaux</Link></li>
                <li><Link to="/services">Restauration d'Antiquité</Link></li>
                <li><Link to="/services">Nettoyage de la Pierre</Link></li>
                <li><Link to="/services">Nettoyage de Cuisine</Link></li>
                <li><Link to="/services">Élimination de la Rouille</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Liens Utiles</h3>
              <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À Propos</Link></li>
                <li><Link to="/gallery">Galerie</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/legal">Mentions Légales</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contactez-nous</h3>
              <div className="contact-info">
                <p>
                  {FaPhone({})} <a href="tel:+21622763146">+216 22 763 146</a>
                </p>
                <p>
                  {FaEnvelope({})} <a href="mailto:sdts2308@outlook.com">sdts2308@outlook.com</a>
                </p>
                <p>
                  {FaMapMarkerAlt({})} <span>Paris et région Île-de-France</span>
                </p>
              </div>
              <Link to="/contact" className="btn btn-secondary">Demander un Devis</Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} DécapagePro. Tous droits réservés. <Link to="/legal">Mentions légales</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
