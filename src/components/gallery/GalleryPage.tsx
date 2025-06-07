import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './GalleryPage.scss';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  detailedDescription?: string;
  additionalImages?: string[];
  specifications?: { label: string; value: string }[];
  processDescription?: string;
}

const GalleryPage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'metal',
      title: 'Restauration de Portail en Fer Forgé',
      description: 'Décapage de rouille et peinture ancienne sur un portail en fer forgé du 19ème siècle.',
      beforeImage: 'https://picsum.photos/id/102/600/400',
      afterImage: 'https://picsum.photos/id/103/600/400',
    },
    {
      id: 2,
      category: 'wood',
      title: 'Nettoyage de Meuble Ancien',
      description: 'Élimination des vernis et peintures sur un meuble en chêne du 18ème siècle.',
      beforeImage: 'https://picsum.photos/id/104/600/400',
      afterImage: 'https://picsum.photos/id/105/600/400',
    },
    {
      id: 3,
      category: 'stone',
      title: 'Restauration de Façade en Pierre',
      description: 'Nettoyage de pollution et mousses sur une façade en pierre calcaire.',
      beforeImage: 'https://picsum.photos/id/106/600/400',
      afterImage: 'https://picsum.photos/id/107/600/400',
    },
    {
      id: 4,
      category: 'metal',
      title: 'Décapage de Pièces Mécaniques',
      description: 'Élimination de rouille sur des pièces mécaniques de collection.',
      beforeImage: 'https://picsum.photos/id/108/600/400',
      afterImage: 'https://picsum.photos/id/109/600/400',
    },
    {
      id: 5,
      category: 'wood',
      title: 'Restauration d\'Escalier en Bois',
      description: 'Décapage de peinture sur un escalier en bois massif.',
      beforeImage: 'https://picsum.photos/id/110/600/400',
      afterImage: 'https://picsum.photos/id/111/600/400',
    },
    {
      id: 6,
      category: 'stone',
      title: 'Nettoyage de Monument Historique',
      description: 'Restauration d\'une statue en marbre du 17ème siècle.',
      beforeImage: 'https://picsum.photos/id/112/600/400',
      afterImage: 'https://picsum.photos/id/113/600/400',
    },
    {
      id: 7,
      category: 'metal',
      title: 'Décapage de Radiateur en Fonte',
      description: 'Élimination de multiples couches de peinture sur un radiateur ancien.',
      beforeImage: 'https://picsum.photos/id/114/600/400',
      afterImage: 'https://picsum.photos/id/115/600/400',
    },
    {
      id: 8,
      category: 'wood',
      title: 'Restauration de Parquet Ancien',
      description: 'Décapage de vernis sur un parquet en chêne du 19ème siècle.',
      beforeImage: 'https://picsum.photos/id/116/600/400',
      afterImage: 'https://picsum.photos/id/117/600/400',
    },
    {
      id: 9,
      category: 'stone',
      title: 'Nettoyage de Fontaine en Pierre',
      description: 'Élimination de calcaire et algues sur une fontaine historique.',
      beforeImage: 'https://picsum.photos/id/118/600/400',
      afterImage: 'https://picsum.photos/id/119/600/400',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'metal', label: 'Métal' },
    { id: 'wood', label: 'Bois' },
    { id: 'stone', label: 'Pierre' },
    { id: 'kitchen', label: 'Cuisine' },
  ];

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <div className="container">
          <h1>Notre Galerie</h1>
          <p>
            Découvrez nos réalisations avant/après et constatez l'efficacité de notre technologie laser
            sur différents types de matériaux et surfaces.
          </p>
        </div>
      </div>

      <section className="gallery-content section">
        <div className="container">
          <div className="gallery-filter">
            <div className="filter-tabs">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="gallery-grid"
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="gallery-item"
              >
                <div className="gallery-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  
                  <div className="before-after-container">
                    <div className="before-image">
                      <span className="label">Avant</span>
                      <img src={item.beforeImage} alt={`${item.title} avant`} />
                    </div>
                    <div className="after-image">
                      <span className="label">Après</span>
                      <img src={item.afterImage} alt={`${item.title} après`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="gallery-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Vous avez un projet similaire ?</h2>
            <p>
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit.
              Notre équipe d'experts est à votre disposition pour vous conseiller.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Demander un Devis
              </Link>
              <a href="tel:0767271123" className="btn btn-outline">
                Appelez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
