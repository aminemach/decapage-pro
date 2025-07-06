import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Gallery.scss';

// Import gallery images
import portailImage from '../../assets/images/gallerie/publication-portail-av-apr.jpg';
import antiqueImage from '../../assets/images/gallerie/antique2.jpeg';
import facadeImage from '../../assets/images/gallerie/.facadepiere2.jpeg';
import radiateurImage from '../../assets/images/gallerie/Laquage-radiateurs-fontes-(4).jpg';
import ferImage from '../../assets/images/gallerie/fer1.jpeg';
import pierreImage from '../../assets/images/gallerie/Nettoyage-avant-apres-dune-allee-en-pierre-exterieure.jpg';
import grilleImage from '../../assets/images/gallerie/Peinture_ferronnerie_portail_et_barrieres_v2.jpg';
import terrasseImage from '../../assets/images/gallerie/renovation-facade-pierre.jpg';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
  description?: string;
}

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Close lightbox on Escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [selectedImage]);

  // Gallery items with real images from assets
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'metaux',
      title: 'Restauration de Portail en Fer Forgé',
      image: portailImage,
      description: 'Décapage et restauration complète avec finition protectrice'
    },
    {
      id: 2,
      category: 'metaux',
      title: 'Décapage de Radiateur en Fonte',
      image: radiateurImage,
      description: 'Élimination de multiples couches de peinture'
    },
    {
      id: 3,
      category: 'antiquite',
      title: 'Restauration d\'Antiquités',
      image: antiqueImage,
      description: 'Restauration délicate avec préservation de l\'authenticité'
    },
    {
      id: 4,
      category: 'pierre',
      title: 'Restauration de Façade en Pierre',
      image: facadeImage,
      description: 'Nettoyage laser sans endommager le matériau'
    },
    {
      id: 5,
      category: 'metaux',
      title: 'Décapage Fer et Métaux',
      image: ferImage,
      description: 'Décapage professionnel avec élimination de la corrosion'
    },
    {
      id: 6,
      category: 'pierre',
      title: 'Nettoyage Pierre Extérieure',
      image: pierreImage,
      description: 'Nettoyage de terrasses et allées en pierre'
    },
    {
      id: 7,
      category: 'metaux',
      title: 'Restauration de Grilles et Ferronnerie',
      image: grilleImage,
      description: 'Restauration complète de ferronnerie décorative'
    },
    {
      id: 8,
      category: 'pierre',
      title: 'Nettoyage de Terrasse Noircie',
      image: terrasseImage,
      description: 'Retrouver la couleur d\'origine de la pierre'
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
              <img onClick={() => openLightbox(item)} src={item.image} alt={item.title} />
              
              <div className="item-content">
                <h3>{item.title}</h3>
                {item.description && <p>{item.description}</p>}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-5">
          <Link to="/gallery" className="btn btn-primary">
            Voir Toute la Galerie
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              {selectedImage.description && <p>{selectedImage.description}</p>}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
