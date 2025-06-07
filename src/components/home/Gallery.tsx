import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.scss';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  beforeImage: string;
  afterImage: string;
}

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // This would normally be populated with actual images
  // For now we'll use placeholders
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'metaux',
      title: 'Portail en Fer Forgé',
      beforeImage: 'https://via.placeholder.com/600x400?text=Avant',
      afterImage: 'https://via.placeholder.com/600x400?text=Après',
    },
    {
      id: 2,
      category: 'metaux',
      title: 'Grille Ancienne',
      beforeImage: 'https://via.placeholder.com/600x400?text=Avant',
      afterImage: 'https://via.placeholder.com/600x400?text=Après',
    },
    {
      id: 3,
      category: 'antiquite',
      title: 'Meuble Vintage',
      beforeImage: 'https://via.placeholder.com/600x400?text=Avant',
      afterImage: 'https://via.placeholder.com/600x400?text=Après',
    },
    {
      id: 4,
      category: 'pierre',
      title: 'Façade en Pierre',
      beforeImage: 'https://via.placeholder.com/600x400?text=Avant',
      afterImage: 'https://via.placeholder.com/600x400?text=Après',
    },
    {
      id: 5,
      category: 'cuisine',
      title: 'Hotte de Restaurant',
      beforeImage: 'https://via.placeholder.com/600x400?text=Avant',
      afterImage: 'https://via.placeholder.com/600x400?text=Après',
    },
    {
      id: 6,
      category: 'pierre',
      title: 'Statue Ancienne',
      beforeImage: 'https://via.placeholder.com/600x400?text=Avant',
      afterImage: 'https://via.placeholder.com/600x400?text=Après',
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section-header text-center">
          <h2>Nos Réalisations</h2>
          <p>
            Découvrez nos transformations avant/après et voyez la différence que notre technologie laser peut faire.
          </p>
        </div>

        <div className="gallery-tabs">
          <button 
            className={`gallery-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Tous
          </button>
          <button 
            className={`gallery-tab ${activeTab === 'metaux' ? 'active' : ''}`}
            onClick={() => setActiveTab('metaux')}
          >
            Métaux
          </button>
          <button 
            className={`gallery-tab ${activeTab === 'antiquite' ? 'active' : ''}`}
            onClick={() => setActiveTab('antiquite')}
          >
            Antiquités
          </button>
          <button 
            className={`gallery-tab ${activeTab === 'pierre' ? 'active' : ''}`}
            onClick={() => setActiveTab('pierre')}
          >
            Pierre
          </button>
          <button 
            className={`gallery-tab ${activeTab === 'cuisine' ? 'active' : ''}`}
            onClick={() => setActiveTab('cuisine')}
          >
            Cuisine
          </button>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="gallery-grid"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} className="gallery-item" variants={itemVariants}>
              <div className="before-after-container">
                <div className="image-container before">
                  <img src={item.beforeImage} alt={`${item.title} - Avant`} />
                  <div className="image-overlay">
                    <span>Avant</span>
                  </div>
                </div>
                <div className="image-container after">
                  <img src={item.afterImage} alt={`${item.title} - Après`} />
                  <div className="image-overlay">
                    <span>Après</span>
                  </div>
                </div>
              </div>
              <h3>{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-5">
          <Link to="/gallery" className="btn btn-primary">
            Voir Toute la Galerie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
