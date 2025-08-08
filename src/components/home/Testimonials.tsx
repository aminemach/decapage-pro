import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Icons removed - using text-based navigation
import './Testimonials.scss';

// Import images
import cdgrImage from '../../assets/images/cdgr.png';
import apiImage from '../../assets/images/api.png';
import iradaImage from '../../assets/images/Irada4Youth.png';

// Interface moved inline for partner objects

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
      name: 'Direction de Développement Régional',
      description: 'Institution régionale',
      text: 'Nous exprimons notre profonde gratitude envers la Direction de Développement Régional pour son soutien précieux et son engagement envers le développement économique régional. Leur accompagnement a été déterminant dans la réalisation de notre projet.',
      image: undefined,
      website: '#',
    },
    {
      id: 4,
      name: 'IRADA4Youth',
      description: 'Programme européen',
      text: 'Nous voulons exprimer notre sincère gratitude envers les associations et les personnes qui ont contribué à la réalisation de ce projet. Ils ont joué un rôle crucial dans notre réussite grâce à leur soutien et leur collaboration.',
      image: iradaImage,
      website: 'https://eu4youth.tn/explorer/irada4youth/',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerSlide = 2;
  const totalSlides = Math.ceil(partners.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const getCurrentSlidePartners = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return partners.slice(startIndex, startIndex + cardsPerSlide);
  };

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
          <h2>Remerciements & Partenaires</h2>
          <p>
            Nous exprimons notre profonde reconnaissance envers nos partenaires institutionnels et les organisations qui nous ont accompagnés dans la réalisation de ce projet. Leur soutien et leur confiance ont été déterminants pour notre réussite.
          </p>
        </motion.div>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button 
            className="carousel-nav carousel-nav-prev" 
            onClick={prevSlide}
            disabled={totalSlides <= 1}
          >
            ‹
          </button>
          
          <button 
            className="carousel-nav carousel-nav-next" 
            onClick={nextSlide}
            disabled={totalSlides <= 1}
          >
            ›
          </button>

          {/* Carousel Container */}
          <motion.div
            ref={ref}
            className="carousel-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="carousel-slide"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.5 }}
              >
                {getCurrentSlidePartners().map((partner) => (
                  <motion.div key={partner.id} className="partner-card" variants={itemVariants}>
                    <div className="partner-content">
                      <div className="partner-text">
                        <p>{partner.text}</p>
                      </div>
                      
                      <div className="partner-info">
                        <div className="partner-logo-container">
                          {partner.image ? (
                            <motion.img 
                              src={partner.image} 
                              alt={partner.name} 
                              className="partner-logo-img"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            />
                          ) : (
                            <div className="partner-logo-placeholder">
                              <div className="partner-initials">
                                DDR
                              </div>
                            </div>
                          )}
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
                            Visiter le site →
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="carousel-dots">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
