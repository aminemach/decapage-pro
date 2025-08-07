import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8 }
    })
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            custom={0}
            className="hero-text"
          >
            <motion.div 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span>Expertise Professionnelle</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Spécialiste du <span className="highlight">Nettoyage</span>
              <br />
              et du <span className="highlight">Décapage par Laser</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Solutions professionnelles pour particuliers, PME et collectivités.
              <br />
              Redonnez vie à vos métaux, pierres et antiquités avec notre technologie laser de pointe.
            </motion.p>
            
            <motion.div 
              className="hero-features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="feature-item">
                <span className="icon">✓</span> <span>Résultats Précis</span>
              </div>
              <div className="feature-item">
                <span className="icon">✓</span> <span>Écologique</span>
              </div>
              <div className="feature-item">
                <span className="icon">✓</span> <span>Sans Produits Chimiques</span>
              </div>
            </motion.div>
            
            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Link to="/contact" className="btn btn-primary">
                Demander un Devis Gratuit <span className="btn-icon">→</span>
              </Link>
              <Link to="/services" className="btn btn-outline">
                Découvrir Nos Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
