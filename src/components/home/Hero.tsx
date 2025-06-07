import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>Spécialiste du Nettoyage et du Décapage par Laser</h1>
            <p>
              Solutions professionnelles pour particuliers, PME et collectivités dans les Hauts-de-France et environs.
              Redonnez vie à vos métaux, pierres et antiquités avec notre technologie laser de pointe.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">
                Demander un Devis Gratuit
              </Link>
              <Link to="/services" className="btn btn-outline">
                Découvrir Nos Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
