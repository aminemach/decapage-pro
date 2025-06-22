import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaExternalLinkAlt } from 'react-icons/fa';
import './Testimonials.scss';

// Import images
import cdgrImage from '../../assets/images/cdgr.png';
import apiImage from '../../assets/images/api.png';
import iradaImage from '../../assets/images/Irada4Youth.png';

interface Testimonial {
  id: number;
  name: string;
  description: string;
  text: string;
  image: string;
  website: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const partners = [
    {
      id: 1,
      name: 'Centre de Gestion et de Développement des Ressources',
      description: 'Organisme gouvernemental',
      text: 'Nous sommes sincèrement reconnaissants envers CGDR - Irada4Youth, Tunis pour nous avoir offert l\'opportunité de concrétiser notre projet innovant. Leur soutien est d\'une grande valeur pour aider les jeunes entrepreneurs à concrétiser leur vision et à jouer un rôle dans le développement de la Tunisie.',
      image: cdgrImage,
      website: 'https://cgdr.nat.tn/fr/index.php?rub=261&srub=420',
    },
    {
      id: 2,
      name: 'Agence de Promotion de l\'Industrie et de l\'Innovation',
      description: 'Institution nationale',
      text: 'Nous voulons exprimer notre reconnaissance envers l\'Agence de Promotion de l\'Industrie et de l\'Innovation pour son soutien constant à notre projet. Leur expertise et leur dévouement ont été inestimables pour nous aider à concrétiser notre vision.',
      image: apiImage,
      website: 'https://www.tunisieindustrie.nat.tn/fr/home.asp',
    },
    {
      id: 3,
      name: 'EU4Youth IRADA',
      description: 'Programme européen',
      text: 'Nous voulons exprimer notre sincère gratitude envers les associations et les personnes qui ont contribué à la réalisation de ce projet. Ils ont joué un rôle crucial dans notre réussite grâce à leur soutien et leur collaboration.',
      image: iradaImage,
      website: 'https://eu4youth.tn/explorer/irada4youth/',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="partners-section section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Dédicace</h2>
          <p>
            Nous voulons exprimer notre sincère gratitude envers les associations et les personnes qui ont contribué à la réalisation de ce projet.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="partners-container"
        >
          {partners.map((partner) => (
            <motion.div key={partner.id} className="partner-card" variants={itemVariants}>
              <div className="partner-content">
                <div className="partner-text">
                  <p>{partner.text}</p>
                </div>
                
                <div className="partner-info">
                  <div className="partner-logo-container">
                    <motion.img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="partner-logo-img"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>
                  
                  <div className="partner-details">
                    <h4>{partner.name}</h4>
                    <p className="partner-type">{partner.description}</p>
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="partner-link"
                    >
                      Visiter le site <span style={{ marginLeft: '6px', fontSize: '0.8rem', display: 'inline-block' }}>{FaExternalLinkAlt({ size: 12 })}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
